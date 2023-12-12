import { motion } from "framer-motion";
import Style from "../portfolio.module.css";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    const handleScrollTo = (id:string) => {
        const element = document.getElementById(id)
        element ? element.scrollIntoView({behavior: "smooth"}) : navigate('/');
    }

    return (
        <section className={Style.headerSection}>
            <motion.h1 initial={{opacity:0}} animate={{ opacity:1}} transition={{duration: .5}} className={Style.header}>
                <motion.div className={Style.headActive}>
                        <motion.p className={Style.headArrow}>{'->'}</motion.p>
                        {'Michael Alegbeleye'}
                </motion.div>
                <motion.div initial={{x:-50, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration: .5, delay:.5}} className={Style.occupationContainer}>
                    <div className={Style.occupation}>
                        <p className={Style.job}>Simon Fraser University,</p>
                        <p className={Style.job}>SIAT (Bsc) Interactive Systems - 2025/2026.</p>
                    </div>
                </motion.div>
            </motion.h1>
        </section>
    )
}

export default Header;