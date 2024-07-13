import GithubSvg from "@/components/icons/github"
import LinkedinSvg from "@/components/icons/linkedin"
import PinterestSvg from "@/components/icons/pinterest"
import MailSvg from "@/components/icons/mail"
import PhoneSvg from "@/components/icons/phone"
import MediaLink from "@/components/links/media-Link"
import { svgFC } from "@/components/icons/svg-type"

type mediaInfo = {
    svg: svgFC,
    url: string,
    label: string
}

const socials: mediaInfo[] = [
    {svg: GithubSvg, url: "https://github.com/KoruJuriSan", label: "Redirect to my github profile"},
    {svg: LinkedinSvg, url: "https://be.linkedin.com/in/joulian-colle-84405b310", label: "Redirect to my Linkedin page"},
    {svg: PinterestSvg, url: "https://www.pinterest.com/mrcollejoulian", label: "Redirect to my Pinterest profile"},
]

const contacts: mediaInfo[] = [
    {svg: MailSvg, url: "mailto:mr.collejoulian@gmail.com?subject=Why%20are%20you%20contacting%20me%20%3F&body=Firstname%3A%20%0ALastname%3A%20%0A%0AContent%3A%0A", label: "Open your mailing application with my email address as receiver"},
    {svg: PhoneSvg, url: "tel:+32192194816", label: "Add me in your contacts"}
]

export default function Footer() {

    const socialComponents = socials.map(({svg, url, label}, i) => <li key={i}><MediaLink Svg={svg} href={url} label={label} /></li>)
    const contactComponents = contacts.map(({svg, url, label}, i) => <li key={i}><MediaLink Svg={svg} href={url} label={label} /></li>)

    return <footer className="flex justify-center text-tern">
        <div className="flex flex-row justify-between w-full mx-4 px-4 pt-6 pb-16 border-t-2" id="footer-main-container">
            <ul className="flex flex-row gap-3" id="footer-media">{socialComponents}</ul>
            <ul className="flex flex-row gap-3" id="footer-contact">{contactComponents}</ul>
        </div>
    </footer>
}