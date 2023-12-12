import Style from "../portfolio.module.css"
import { motion } from "framer-motion";
import logo from "../Assets/logo.svg"
const Footer = () => {
    return (
        <section className={Style.footerSection}>
            <img className={Style.logo} src={logo} alt="logo" />
            <p className={Style.copyright}>Copyright<span>&copy;</span> Michael Alegbeleye - [2023]</p>
        </section>
    )
}

export default Footer;