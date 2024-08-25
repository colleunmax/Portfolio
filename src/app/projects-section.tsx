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
        description: "This website was created as part of my first-year web development course for a Bachelor's degree in Computer Science. The project is a satiric website about China. The only constraint about this project was to only use HTML and CSS, no framwork is allowed.",
        imgPath: "/ching-chong-store.png",
        alt: "Website with 'Historique Chinois' written as the main title, in the background an image of The Forbidden City, there is a description under the title: 'ous voulez connaître l’histoire de notre grande Chine, garantie 100% épique et époustouflant, voulez-vous apprendre de nouvelles choses à montrer à tous vos copains ?'"
    },
    {
        title: "sub.MASK",
        description: "I created a website during my last year of high school for my teachers, with the objective of developing a fully functional basic network address calculator. Made with: React",
        imgPath: "/submask.png",
        alt: "Two main headings, IPv4 Address' and 'Subnet Mask,' each with four input fields below to enter a number separated by a dot. Only the subnet mask has an additional field for a single number."
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

    return <section className="
    flex flex-col gap-6 row-span-2 
    intermediate-md:bg-secondary-background intermediate-md:text-ternary
    intermediate-md:p-8
    intermediate-md:mr-8
    intermediate-md:rounded-md
    intermediate-md:h-full
    intermediate-md:overflow-y-auto" id="projects">
        <h2 className="font-bold text-2xl">Projects</h2>
        <ul tabIndex={0} className="w-64 flex flex-col gap-8 intermediate-md:w-full intermediate-md:overflow-y-scroll scroll-smooth
        focus:outline-none focus:outline-2 focus:outline-dashed focus:outline-primary focus:outline-offset-8 intermediate-md:pr-2">
            {ProjectsCPs}
        </ul>
    </section>
}