
import { Image } from "@heroui/react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const images = [
    'https://cdn.discordapp.com/attachments/762066841920995378/1412804866753167421/image.png?ex=68b9a090&is=68b84f10&hm=5ae384da629d7feccf72aef8224c37f1eadac35fd24fb3aaa541d825db137e79&',
    'https://cdn.discordapp.com/attachments/762066841920995378/1412804923439186083/image.png?ex=68b9a09e&is=68b84f1e&hm=f73787eadce164267cd7d6f699b875f4b33c6b44a3f3d7bfd3f344aa1ad4a192&', 
    'https://cdn.discordapp.com/attachments/762066841920995378/1412804979520966686/image.png?ex=68b9a0ab&is=68b84f2b&hm=2100bf429f80f479a54dc1fa832585c038995ce329d4490e03bac755d64b1b3e&', 
    'https://cdn.discordapp.com/attachments/762066841920995378/1412805113436704848/image.png?ex=68b9a0cb&is=68b84f4b&hm=a0bcd73b3ecb5c6f424e8a562686c02656d70f82b6ed75932d4adec279e805bc&',
]

function Home() {

    return (
        <>
            <Navbar />
            <div className="w-full flex gap-10 flex-col items-center pt-10 justify-center">
                {images.map(src => (
                    <Image src={src} radius="none" width={1200} isBlurred isZoomed />
                ))}

            </div>

            <Footer />

        </>
    )
}

export default Home
