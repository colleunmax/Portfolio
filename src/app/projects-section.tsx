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
    },
    {
        title: "sub.MASK",
        description: "Notre équipe est composée de Joulian, Brendan et Romain. Ce projet a été réalisé dans le cadre de notre projet de fin d’études et le concept de celui-ci nous a été proposé par notre professeur de réseau Patrick Hainaut.",
        imgPath: "/submask.png",
        alt: "Deux grands titres respectivement 'Adresse Ipv4' et 'Masque de sous reseau', en dessous de chaque titre il y a 4 entrée pour écrire un nombre qui est séparé par un point, seul le masque de sous-réseau a un autre champ pour un seul nombre."
    },
    {
        title: "Placeholder",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imgPath: "/submask.png",
        alt: "Lorem Ipsum"
    },
]

export default function Projects() {
    const ProjectsCPs = projects.map((({title, description, imgPath, alt}) => {
        return <li key={title} className="flex flex-col gap-3 intermediate-md:flex-row">
            <Image src={imgPath} alt={alt} width={256} height={256} className="rounded-md intermediate-md:w-56" />
            <div className="flex flex-col gap-3">
                <h3 className=" font-bold">{title}</h3>
                <p className=" font-thin">{description}</p>
            </div>
        </li>
    }))

    return <section className="flex flex-col gap-6 row-span-2 intermediate-md:bg-secondary-background intermediate-md:p-6 intermediate-md:rounded-md intermediate-md:text-ternary intermediate-md:h-full intermediate-md:overflow-auto" id="projects">
        <h2 className="font-bold text-2xl">Projects</h2>
        <ul className="w-64 flex flex-col gap-8 intermediate-md:w-full overflow-x-scroll scroll-smooth">
            {ProjectsCPs}
        </ul>
    </section>
}