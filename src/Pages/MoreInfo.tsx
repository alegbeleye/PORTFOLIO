import React from "react";
import Style from "../portfolio.module.css"
import { motion } from "framer-motion";
import TitleSection from "../components/TitleSection";
import { ProjectInfo } from "../data/projectsData";
import { useLocation, useParams } from "react-router-dom";
import Nav from "../components/Nav";
import BreakdownSection from "../components/BreakdownSection";
import Footer from "../components/Footer";
import { projects } from "../data/projectsData";

const MoreInfo = () => { 
    const {id}:any = useParams()
    const project = projects.filter((val:ProjectInfo) => val.id === parseInt(id))[0]
    return (
        <div className={Style.moreInfo}>
            <Nav/>
            <TitleSection data={project}/>
            <BreakdownSection data={project}/>
            <Footer/>
        </div>
    )
}

export default MoreInfo;