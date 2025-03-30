import { cutiveMono } from "@/fonts/cutiveMono"

export default function Intro() {
    return <section id="introduction" className="flex flex-col items-start intermediate-md:ml-8">
        <h1 className="font-bold intermediate-md:text-xl">Hey, I am-</h1>
        <div className="inline-block">
            <h1 className="text-3xl font-bold intermediate-md:text-5xl">Joulian Colle</h1>
            <div className="flex intermediate-md:static">
                <p className={`${cutiveMono.className} flex-grow w-0 intermediate-md:w-full intermediate-md:text-xl`}>I am a student in IT, future web developper</p>
            </div>
        </div>
    </section>
}