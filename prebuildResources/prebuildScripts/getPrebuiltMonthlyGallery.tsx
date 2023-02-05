import path from "path";
import fs from 'fs/promises'
import date from 'date-and-time';
export default async function getPrebuiltMonthlyGallery() {
    const jsonDirectory = path.join(process.cwd(), '');
    let now = new Date();
    let value = date.format(now, 'MMM/YYYY');
    value = value.replace(/\//, '-');
    const file = await fs.readFile(jsonDirectory + `/${value}-gallery.json`, 'utf8').then(r => {
        return JSON.parse(r);
    });
    return file;
}