import path from "path";
import fs from 'fs/promises'

export default async function getPrebuiltJSON(fileName: string) {
    const jsonDirectory = path.join(process.cwd(), '');
    const file = await fs.readFile(jsonDirectory + `/${fileName}.json`, 'utf8').then(r => {
        return JSON.parse(r);
    });
    return file;
}