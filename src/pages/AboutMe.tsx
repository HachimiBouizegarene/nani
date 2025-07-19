import bg from "../assets/aboutMeBg.png"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export default function () {
    return (
        <div className="w-full h-screen flex flex-col">
            <Navbar />
            <div className="flex-1 flex items-center justify-around overflow-hidden">
                <div className="h-full w-full relative">
                    <div className="absolute opacity-100 max-w-96 left-1/3 top-0 w-full z-50 h-full">
                        <img className=" min-w-[120%]  z-20 object-cover" src={bg} />
                    </div>
                    <div className="w-full justify-end items-end flex mix-blend-difference flex-col absolute left-10 z-50 top-15">
                        <p className="text-white text-[190px] font-bold z-50  whitespace-nowrap tracking-widest">
                            ABOUT-ME
                        </p>
                        <p className="text-white w-1/3 text-lg ">Here is a little something about me, so you might get a feeling for who I am.
                            I was born in 1984, went to a graphic design school for three years after my Abitur, so I am now allowed to call myself a „staatlich geprüfter Grafik Designer“.
                            I have a master‘s degree in communication ­design and have been working as a freelance Graphic ­Designer and Illustrator since 2010.
                            I have made some children books, comics, ­animated music videos, wine bottles and editorial illustrations as well as life 6-minute portraits at various events. So you might say I am a jack-of-all-trades.</p>
                    </div>

                </div>

                <div className="w-1/3 flex flex-col h-full">
                </div>
            </div>
            <Footer />
        </div>
    )
}
