
import { Image } from "@heroui/react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const images = [
    '1.png', '2.png', '3.png', '4.png', '5.png', '6.png',
]

function Home() {

    return (
        <>
            <Navbar />
            <div className="w-full flex gap-10 flex-col items-center pt-10 justify-center">
                {images.map(src => (
                    <div className=" overflow-hidden">
                        <Image src={import.meta.env.BASE_URL + '/assets/portfolio/' + src} className="-translate-y-[14px] "  radius="none" width={1550} />
                    </div>

                ))}

            </div>

            <Footer />

        </>
    )
}

export default Home
