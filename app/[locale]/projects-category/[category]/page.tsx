import {default as Projects, generateMetadata as redirectedGenerateMetadata} from "@/app/[locale]/projects/page";
import {Metadata} from "next";

export async function generateMetadata(): Promise<Metadata> {
   return redirectedGenerateMetadata();
}
export default async function ProjectCategory({params}: {params: any}) {
    return (
        <Projects category={params.category}></Projects>
    );
}