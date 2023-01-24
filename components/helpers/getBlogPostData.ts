export function getBlogPostData(postPost: any) {
    let { author, blogCategories, blogpostImage, content, tags, title } = postPost;
    return { author, blogCategories, blogpostImage: blogpostImage.blogpostImage, content, tags, title};
}