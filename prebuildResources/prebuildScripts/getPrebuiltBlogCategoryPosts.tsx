import path from "path";
import fs from 'fs/promises'

export default async function getPrebuiltBlogCategoryPosts(category: string) {
    const jsonDirectory = path.join(process.cwd(), '');
    const file = await fs.readFile(jsonDirectory + '/blogposts.json', 'utf8').then(r => {
        let data = JSON.parse(r).filter((r: any) => r.blogCategories.filter((item: any) => item.blogCategoryName === category).length !== 0);
        return data;
    });
    return file;
}