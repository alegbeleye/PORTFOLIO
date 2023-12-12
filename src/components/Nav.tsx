import { useNavigate } from "react-router-dom"
import Style from "../portfolio.module.css"
import { motion } from "framer-motion"
import logonav from "../Assets/logoNav.svg"
const Nav = () => {

    const navigate = useNavigate();

    const handleScrollTo = (id:string) => {
        const element = document.getElementById(id)
        element ? element.scrollIntoView({behavior: "smooth"}) : navigate('/');
    }

    return(
        <div className={Style.navigation}>
            <img src={logonav} onClick={() => navigate('/')} alt="logo"/>
            <div className={Style.navContent}>
            <a onClick={() => handleScrollTo("projects")}>[ Projects ]</a>
            <a onClick={() => handleScrollTo("contacts")}>[ Contact ]</a>
            </div>
        </div>
    )
}

export default Nav