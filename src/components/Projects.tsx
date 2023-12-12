import Style from "../portfolio.module.css"
import { ProjectInfo, projects } from "../data/projectsData";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const checkAnimate = () => {
    if(window.innerWidth < 1000){
        return 0
    }
    return -20
}

const Projects = () => {

    return (
        <section id="projects" className={Style.projectSection}>
            <div className={Style.tutorialContainer}>
                <p className={Style.sectionTitle}>PROJECTS</p>
                <div className={Style.tutorialTextContainer}>
                <p className={Style.tutorialText}><b>{`Scroll Right to See Projects...`}</b></p>
                </div>
                <div></div>
            </div>
            <div className={Style.projectDisplaySection}>
                {projects.map((val:ProjectInfo, idx) => {
                    return (
                        <motion.div
                         initial={{x:100, opacity:0}}
                         whileInView={{x:0, opacity:1}}
                         whileHover={{y:checkAnimate()}}
                         viewport={{once:true}}
                         transition={{duration:.5}}
                         style={{backgroundImage: `url(${val.imgURL})`}}
                         className={Style.project}
                         key={val.id}
                         >
                            <div className={Style.projectBorders} />
                            <p className={Style.projectDate}>{`[${val.completedYear}]`}</p>
                            <div
                            className={Style.projectDescriptionContainer}>
                                <div className={Style.descriptionSection}>
                                    <h1 className={Style.projectHeader}>{`[${val.name}]`}</h1>
                                    <p className={Style.projectLanguages}>{`${val.languages}`}</p>
                                </div>
                                <div className={Style.buttonSection}>
                                    <Link to={{ pathname: `/more-info/${val.id}` }} state={val}>
                                        <motion.button whileHover={{translateX:10}} className={Style.projectBtn}>{"Explore"}</motion.button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}
export default Projects;