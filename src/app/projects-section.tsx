import Image from "next/image"

type project = {
    title: string,
    description: string,
    imgPath: string,
    alt: string
}

const projects: project[] = [
    {
        title: "Ching Chong Store",
        description: "This website was created as part of my first-year web development course in a Bachelor's degree in Computer Science, with a focus on Telecommunications and Networks, at the Haute École en Hainaut.",
        imgPath: "/ching-chong-store.png",
        alt: "Website with 'Le meilleur du made in China' written as the main title, showcasing various products, followed by the beginning of the presentation of a collection named Bing-Chilling."
    }
]

export default function Projects() {
    const ProjectsCPs = projects.map((({title, description, imgPath, alt}) => {
        return <li key={title} className="flex flex-col gap-3">
            <Image src={imgPath} alt={alt} width={300} height={300} className=" rounded-md" />
            <h3 className=" font-bold">{title}</h3>
            <p className=" font-thin">{description}</p>
        </li>
    }))

    return <section className="flex flex-col gap-6" id="projects">
        <h2 className="font-bold text-2xl">Projects</h2>
        <ul className="w-64 flex flex-col gap-8">
            {ProjectsCPs}
        </ul>
    </section>
}