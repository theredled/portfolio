import Image from "next/image";
import {tData} from "@/lib/getServerData";

export default function ProjectsList({projects} :{projects: any[]}) {
    return (
        <ul className="projects-list">
            {projects.map((project: Record<any, any>, index: number) => (
                <li key={index} className="project-item">
                    <a href={"/projects/" + project.id} className="block-link">
                        <div className="image-container">
                            <Image src={'/images/' + (project.image || 'no-image.jpg')}
                                   alt="" quality={75} className="project-image"
                                   width={500}
                                   height={300}/>
                            <Image src={'/images/' + (project.image || 'no-image.jpg')}
                                   alt="" quality={75} className="pixel-image"
                                   width={40}
                                   height={26}/>

                        </div>
                        <h2 className="title">
                            <span>{tData(project.titre)}</span>
                            {project.date &&
                                <time className="side-infos"> ({ project.date })</time>
                            }
                        </h2>
                        {project.description &&
                            <p className="description">{tData(project.description)}</p>
                        }
                        {project.tech &&
                            <section className="tech">
                                <ul>
                                    {project.tech.slice(0, 6).map((name: string) => <li>{tData(name)}</li>)}
                                    {project.tech.length > 6 &&
                                        <li className="etc">...</li>
                                    }
                                </ul>
                            </section>
                        }
                    </a>
                </li>
            ))}
        </ul>
    )
}