import Style from "../portfolio.module.css"
import { projects } from "../data/projectsData";
import { AnimatePresence, motion } from "framer-motion";
import { Project, dataProjects } from "../data/dataProjects";
import { useEffect, useState } from "react";

const DataAnalysis = () => {

    const [projectIndex, setProjectIndex] = useState<number>(0)
    const getNextProject = () => {
        dataProjects.length - 1 === projectIndex ? setProjectIndex(0) : setProjectIndex(projectIndex + 1);
    }

    return (
        <section id="dataAnalysis" className={Style.dataSection}>
            <p className={Style.sectionTitle}>Data Analysis / Visualization</p>
            <div className={Style.dataSectionShow}>
            {dataProjects.map((currentProject) => 
            <div key={currentProject.id} className={Style.dataProject}>
                    <h3 className={Style.dataProjectName}>{currentProject.name}</h3>
                    <div 
                    className={Style.dataProjectFoot}>
                        <div className={Style.dataLanguagesSection}>
                            {
                                currentProject.languages.map((val: string, idx: number) => {
                                    return (
                                        <label className={Style.dataLanguageLabel} key={idx}>{val}</label>
                                    )
                                })
                            }
                        </div>
                        <a href={currentProject.link} className={Style.projectLink}>GitHub ↗</a>
                    </div>
                </div>
            )}
                </div>
        </section>
    )
}
export default DataAnalysis;