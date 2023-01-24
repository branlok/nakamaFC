import fs from "fs";
import sanityClient from "@sanity/client";
import * as dotenv from "dotenv";
import replace from "replace-in-file";

dotenv.config();

const TOKEN = process.env.TOKEN;
const PROJECTID = process.env.PROJECTID;

const client = sanityClient({
  projectId: PROJECTID,
  dataset: "production",
  apiVersion: "2023-01-10", // use current UTC date - see "specifying API version"!
  token: TOKEN, // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
});

const blogCategoriesQuery = `*[_type == 'blogCategories' && !(_id in path("drafts.**"))]{
    blogCategoryName
  } | order(lower(blogCategoryName) asc)
  `;

let blogCategories = await client
  .fetch(blogCategoriesQuery)
  .then((data) => {
    return data;
  })
  .then((json) => {
    fs.writeFile("./test.json", JSON.stringify(json), (err) => {
      if (err) {
        throw new Error("Something went wrong.");
      }

      console.log("JSON written to file. Contents:");
      console.log(fs.readFileSync("test.json", "utf-8"));
    });
  });

const getAllBlogPostsQuery = `*[_type == 'blog' && !(_id in path("drafts.**"))] 
{title, 
  'slug': slug.current,
  'createdOn': _createdAt,content,
  'author': author->{'profileImage':  profileImage.asset._ref, name, role},
  'blogpostImage': blogpostImage.asset->{
    'blogpostImage': url,
    'blurHash': metadata.blurHash,
    'averageColor': metadata.palette.darkVibrant.background
  },
  blogCategories[]->{blogCategoryName,'color': categoryColor.rgb},
} | order(createdOn desc)`;

let blogpost = await client
  .fetch(getAllBlogPostsQuery)
  .then((data) => {
    return data;
  })
  .then((json) => {
    console.log(json, "s");
    fs.writeFile("./blogposts.json", JSON.stringify(json), (err) => {
      if (err) {
        throw new Error("Something went wrong.");
      }
      console.log("JSON written to file. Contents:");
      console.log(fs.readFileSync("test.json", "utf-8"));
    });
  });

const options = {
  files: "./blogposts.json",
  from: /(https\:\/\/cdn.sanity.io\/images\/([^]*?)\/production\/)/g,
  to: "https://testing.bobhere.workers.dev/",
};

await replace(options)
  .then((results) => {
    console.log("Replacement results:", results);
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });

const getAllMemberDetails = `*[_type == 'member'&& !(_id in path("drafts.**"))] {
    'profileImage':  profileImage.asset->{
    url
    },
    description,
    name,
    role
}
`;
let memberQuery = await client
  .fetch(getAllMemberDetails)
  .then((data) => {
    return data;
  })
  .then((json) => {
    console.log(json, "s");
    fs.writeFile("./members.json", JSON.stringify(json), (err) => {
      if (err) {
        throw new Error("Something went wrong.");
      }
      console.log("JSON written to file. Contents:");
      console.log(fs.readFileSync("test.json", "utf-8"));
    });
  })
  .then((r) => {
    const options = {
      files: "./members.json",
      from: /(https\:\/\/cdn.sanity.io\/images\/([^]*?)\/production\/)/g,
      to: "https://testing.bobhere.workers.dev/",
    };
    replace(options)
      .then((results) => {
        console.log("Replacement results:", results);
      })
      .catch((error) => {
        console.error("Error occurred:", error);
      });
  });
