type cursus = {
    name: string,
    description: string,
    date: string,
    current?: boolean
}

const education: cursus[] = [
    {
        name: "CQ6 - Computer technician",
        description: "Aumoniers du travail de Charleroi",
        date: "2021-2023"
    },
    {
        name: "Computer science Bachelor",
        description: "Haute École en Hainaut",
        date: "2023-2026",
        current: true
    }
]

export default function Education() {

    const EductionCPs = education.map(({name, description, date, current}) => {

        const currentSpan = current ? <span className="text-xs">(current)</span> : ""

        return <li key={name} className="flex flex-col items-center italic intermediate-md:items-start">
            <h2 className="inline">{name}</h2>
            <p className="text-sm">{description}</p>
            <div className="flex gap-2 items-center">
                <span className="text-sm">{date}</span>
                {currentSpan}
            </div>
        </li>
    })

    return <section id="education" className="flex flex-col items-center intermediate-md:items-start intermediate-md:ml-8">
        <h2 className="font-bold text-2xl mb-6">Education</h2>
        <ul className="flex flex-col gap-6">
            {EductionCPs}
        </ul>
    </section>
}