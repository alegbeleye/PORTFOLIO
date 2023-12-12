import Style from "../portfolio.module.css"
import { motion } from "framer-motion";
const Contacts = () => {
    return (
        <section id="contacts" className={Style.contactSection}>
            <p className={Style.sectionTitle}>CONTACTS</p>
            <div className={Style.displayContactsInfo}>
                <div className={Style.contacts}>
                <a href="https://github.com/alegbeleye">GitHub</a>
                <a href="https://www.linkedin.com/in/michael-alegbeleye-b66001262">Linkedn</a>
                <a href="https://twitter.com/Lanre__________">Twitter</a>
                </div>
            </div>
        </section>
    )
}

export default Contacts;