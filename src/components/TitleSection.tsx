import Style from "../portfolio.module.css"
import { motion } from "framer-motion";
import Video from "./PreviewVideo";
import { ProjectInfo } from "../data/projectsData";
import { useLocation } from "react-router-dom";

type TitleSectionProps={
    data:ProjectInfo,
}

const TitleSection = (props:TitleSectionProps) => {
    return (
        <section className={Style.titleSection}>
            <Video previewSRC={props.data.gifURL}/>
            <div className={Style.titleInfo}>
                <h2>{props.data.name}</h2>
                <a href={props.data.link}>Github Link</a>
                <div className={Style.infoDescriptionSection}>
                    <h3><i>Description</i></h3>
                    <p className={Style.infoDescription}>{props.data.description}</p>
                </div>
            </div>
        </section>
    )
}

export default TitleSection;