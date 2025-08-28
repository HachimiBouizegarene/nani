
import { Image } from "@heroui/react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const images = [
    'https://images.squarespace-cdn.com/content/v1/5a88864349fc2b8e071336f8/1741914254873-B8S1H8PU7QQJPU91JR2G/2025_portfolio_short1.jpg?format=1500w',
    'https://cdn.discordapp.com/attachments/762066841920995378/1410722391314661478/Illustration92.png?ex=68b20d1c&is=68b0bb9c&hm=7fc9260fac702820e7ba3365817343de2596c5fc1c5d1680adb95e5c95496e1a&'
    ,'https://images.squarespace-cdn.com/content/v1/5a88864349fc2b8e071336f8/1734388131810-MLJQJFSP0SQ3H09E6YPC/portfolio_update_2024_vox_1.jpg?format=1500w'
    ,'https://images.squarespace-cdn.com/content/v1/5a88864349fc2b8e071336f8/1730330060423-RU7GH5U7NK71ERNUAOBT/2023portfolio_bb_1.jpg?format=1500w',]

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
