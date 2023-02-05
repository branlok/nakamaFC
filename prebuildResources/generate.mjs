import fs from "fs";
import sanityClient from "@sanity/client";
import * as dotenv from "dotenv";
import replace from "replace-in-file";
import path from "path";
import { encode } from "punycode";
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
  'createdOn': _createdAt,
  "content": content[] {
  
  ...,
      ...select(
        _type == "image" => {
          ...,
          "asset": asset-> {
            '_ref': _id,
            'lqip': metadata.lqip,
            'aspectRatio': metadata.dimensions.aspectRatio
          }
        }  
      )
    },
  'author': author->{'profileImage':  profileImage.asset._ref, name, role},
  'blogpostImage': blogpostImage.asset->{
    'blogpostImage': url,
    'blurHash': metadata.blurHash,
      'lqip': metadata.lqip,
    'averageColor': metadata.palette.darkVibrant.background
  },
  blogCategories[]->{blogCategoryName,'color': categoryColor.rgb},
  interactives->{
    _id,
    title
  }
} | order(createdOn desc)`;

let blogpost = await client
  .fetch(getAllBlogPostsQuery)
  .then((data) => {
    return data;
  })
  .then((json) => {
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
} | order(role asc)
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

const TAGS = `
*[_type == "media.tag" && !(_id in path("drafts.**"))] {
  _id,
  "name": name.current
}
`;

let featuredImageAssets = await client
  .fetch(TAGS)
  .then((data) => {
    return data;
  })
  .then((json) => {
    fs.writeFile("./tags.json", JSON.stringify(json), (err) => {
      if (err) {
        throw new Error("Something went wrong.");
      }
      console.log("JSON written to file. Contents:");
      console.log(fs.readFileSync("tags.json", "utf-8"));
    });
    console.log(json, 'nani');
    return json.find((item) => (item.name === "Featured Images"));
  })
  .then((r) => {
    //Capture all Featured Images
    console.log(r);
    const QUERYSTRING = `
    {
      "items": *[
_type in ["sanity.fileAsset","sanity.imageAsset"] && !(_id in path("drafts.**"))
&& references('${r._id}')] {
  _id,
  altText,
  description,
  metadata {
      lqip,
    'aspectRatio': dimensions.aspectRatio,
        
  },    
  title,
  url
      } | order(_createdAt desc) [0...50],
    }
`;

    return client
      .fetch(QUERYSTRING)
      .then((data) => {
        return data;
      })
      .then((json) => {
        fs.writeFile("./featuredGallery.json", JSON.stringify(json), (err) => {
          if (err) {
            throw new Error("Something went wrong.");
          }
          console.log("JSON written to file. Contents:");
          console.log(fs.readFileSync("featuredGallery.json", "utf-8"));
        });
      })
      .then((r) => {
        const options = {
          files: "./featuredGallery.json",
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
  });

async function findImagesByTag(tagName) {
  //tagName Resolver
  const jsonDirectory = path.join(process.cwd(), "");
  let json = fs.readFileSync(jsonDirectory + "/tags.json", "utf-8");

  json = await JSON.parse(json);
  let r = json.find((item) => (item.name = tagName));

  const QUERYSTRING = `
  {
    "items": *[
  _type in ["sanity.fileAsset","sanity.imageAsset"] && !(_id in path("drafts.**"))
  && references('${r._id}')] {
  _id,
  altText,
  description,
  metadata {
    lqip,
  'aspectRatio': dimensions.aspectRatio,
      
  },    
  title,
  url
    } | order(_createdAt desc) [0...50],
  }
  `;


  return client
    .fetch(QUERYSTRING)
    .then((data) => {
      return data;
    })
    .then((json) => {
      fs.writeFile(`./${r.name.replace(/\//g, '-')}-gallery.json`, JSON.stringify(json), (err) => {
        if (err) {
          throw new Error("Something went wrong.");
        }

      });
    })
    .then((r) => {
      const options = {
        files: "./featuredGallery.json",
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
}

await findImagesByTag("Feb/2023");


const generateFAQs = `*[_type == 'faq' && !(_id in path("drafts.**"))] {
  _id,
  faq_question,
    faq_answer
}
`;

let FAQ = await client
.fetch(generateFAQs)
.then((data) => {
  return data;
})
.then((json) => {
  fs.writeFile("./faq.json", JSON.stringify(json), (err) => {
    if (err) {
      throw new Error("Something went wrong.");
    }

    console.log("JSON written to file. Contents:");
    console.log(fs.readFileSync("test.json", "utf-8"));
  });
});