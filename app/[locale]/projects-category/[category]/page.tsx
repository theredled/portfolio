import Projects from "@/app/[locale]/projects/page";

export default async function ProjectCategory({params}: {params: any}) {
    return (
        <Projects category={params.category}></Projects>
    );
}