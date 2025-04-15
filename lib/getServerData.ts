import {micromark} from 'micromark'
import { promises as fs } from 'fs';

export async function getDocumentContent(name: string) {
    const fileContent: string = await fs.readFile(process.cwd() + '/data/' + name + ".md", 'utf8') ;
    //const fileContent: string = await req.text() ;
    const html: string = micromark(fileContent);
    return html;
}