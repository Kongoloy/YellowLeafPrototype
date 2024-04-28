import Logo from "./Logo"
import "./Hero.scss"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import images from "./images"
import BlackDropFilter from "./BlackDropFilter"
export default function Hero() {
    const [pageId, setPageId] = useState(0);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            changeHeroImg();
        }, 3000);

        return () => {
            clearTimeout(timeoutId);
        };
    })

    const changeHeroImg = () => {
        setPageId((prev) => prev >= images.length - 1 ? prev = 0 : prev + 1)
    }

    return (
        <div className="hero-container" id='aboutus'>
            <div className="hero-text-container">
                <BlackDropFilter position='absolute' width='100%' height='100%' />
                <div className="hero-img-carousel">
                    {images.map((i, idx) => (
                        <motion.div load='lazy' key={idx} initial={{ filter: 'blur(8px)' }} transition={{ ease: "easeOut" }} animate={pageId === idx ? { filter: 'blur(0)', opacity: 1 } : {}} className={pageId === idx ? 'hero-img-container' : 'hero-img-container hidden'} style={{ backgroundImage: `url(${i.url})` }} />
                    ))}
                </div>
                <div className="hero-welcome-container">
                    <Logo color={'#fda71c'} />
                    <h1>YellowLeaf</h1>
                    <h2>8:00 - 17:00</h2>
                    <h3>Closed on Wednesdays</h3>
                    <br />
                    <motion.div transition={{ duration: .5, delay: 1 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="hero-quote-container">
                        <blockquote>
                            <h1> " A good cup of Coffee , made for your Everyday "</h1>
                            <br />
                            <motion.footer transition={{ duration: .5, delay: 1.5 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>- YellowLeaf</motion.footer>
                        </blockquote>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}