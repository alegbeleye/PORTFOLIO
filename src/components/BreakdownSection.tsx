import Style from "../portfolio.module.css"
import { motion } from "framer-motion";
import Video from "./PreviewVideo";
import { ProjectInfo } from "../data/projectsData";
import { useLocation } from "react-router-dom";

type BreakdownSectionProps={
    data:ProjectInfo,
}

const BreakdownSection = (props:BreakdownSectionProps) => {
    const location=useLocation()
    return (
        <section className={Style.breakdownSection}>
        <p className={Style.sectionTitle}><i>Breakdown.</i></p>
        <div className={Style.breakdownBody} dangerouslySetInnerHTML={{__html: props.data.body}}>
        </div>
        </section>
    )
}

export default BreakdownSection;