import { PiXLogoBold } from "react-icons/pi";
import { IoLogoInstagram } from "react-icons/io5";
import { FaArtstation } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "@heroui/react";
const socialNetworks = [
    {
        icon: <PiXLogoBold className="!text-zinc-950" size={25} />,
        link: ''
    },
    {
        icon: <IoLogoInstagram className="!text-zinc-950" size={25} />,
        link: ''
    },
    {
        icon: <FaArtstation className="!text-zinc-950" size={25} />,
        link: ''
    }
]

export default function () {

    return <div className="min-h-30 opacity-80 items-center justify-between  z-50  backdrop-blur-xs px-20 flex">
        <div className="flex items-center gap-4 justify-around">
            {socialNetworks.map(e => <Button onPress={()=>window.open('https://www.google.fr', '_blank')} isIconOnly variant="light">{e.icon}</Button>)}
        </div>
        <p className="text-lg  rounded-2xl p-2 px-10 text-zinc-950 font-bold tracking-wider ">nina.mohammedi@outlook.fr</p>
        <div className="flex gap-2">
            <Link className="text-zinc-950 font-medium text-md" to={'/about'} >Contact</Link>
            <span className="text-rose-900"> | </span>
            <Link className="text-zinc-950 font-medium text-md" to={'/about'} >About</Link>
        </div>
    </div>
}