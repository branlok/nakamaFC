import path from "path";
import fs from 'fs/promises'

export default async function getPrebuiltSpecificPost(slug: string) {
    const jsonDirectory = path.join(process.cwd(), '');
    const file = await fs.readFile(jsonDirectory + '/blogposts.json', 'utf8').then(r => {
        let data = JSON.parse(r).filter((r: any) => r.slug === slug);
        console.log(data,'123')
        return data[0];
    });
    return file;
}