import path from "path";
import fs from 'fs/promises'

export default async function getPrebuiltMemberDetails() {
    const jsonDirectory = path.join(process.cwd(), '');
    const file = await fs.readFile(jsonDirectory + '/members.json', 'utf8').then(r => {
        return JSON.parse(r);
    });
    return file;
}