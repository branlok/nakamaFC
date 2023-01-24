import path from "path";
import fs from 'fs/promises'

export default async function getPrebuiltBlogPosts() {
    //for now is okay, our blogsize is not that big.
    const jsonDirectory = path.join(process.cwd(), '');
    const file = await fs.readFile(jsonDirectory + '/blogposts.json', 'utf8').then(r => {
        return JSON.parse(r);
    });
    return file;
}