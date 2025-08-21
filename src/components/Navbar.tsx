import { Link, useLocation } from "react-router-dom"
import logo from "../assets/logo.png"
const sections = [
    { name: 'Chara Desing', path: '/' },
    { name: 'Illustrations', path: '/illustrations' },
    { name: 'About Me', path: '/aboutMe' }
]

export default function () {
    const location = useLocation()
    return <nav className="w-full min-h-24 z-50  backdrop-blur-xs flex items-center justify-between px-20 ">
        <div className="flex gap-4 items-center">
            <p className="text-6xl font-logo tracking-widest text-zinc-100 font-bold">Koyot</p>
            <img src={logo} className="size-16 object-contain" />
        </div>

        <div className="flex items-center gap-10">
            {sections.map(section => <Link
                key={section.path}
                to={section.path}
                className={`font-bold tracking-wider transition-all   ${location.pathname === section.path ? 'text-yellow-300 text-5xl ' :
                    'text-zinc-300  text-lg hover:text-3xl '
                    }`}>
                {section.name}
            </Link>)}
        </div>
    </nav>
}