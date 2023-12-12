import { useState } from "react"
import Style from "../portfolio.module.css"
import { motion } from "framer-motion"

type VideoProps = {
    previewSRC: string,
}

const Video = ({ previewSRC }: VideoProps): JSX.Element => {

    const [isPlay, setIsPlay] = useState(false);

    return (
        <div className={Style.previewVideoContainer}>
            {isPlay ?
                <img src={previewSRC} className={Style.previewVideo} alt="loading preview..." /> :
                <div className={Style.prevPause}>" TELEVISION "</div>
            }
            <button onClick={() => setIsPlay(!isPlay)} className={Style.prevController}>{isPlay ?
                <span className="material-symbols-outlined">pause</span> :
                <span className="material-symbols-outlined">play_arrow</span>}
            </button>
        </div>
    )
}

export default Video;