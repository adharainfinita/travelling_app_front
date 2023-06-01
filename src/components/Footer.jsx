import styles from "../styles/Footer.module.css";
import {Link} from "react-router-dom";

const Footer = ()=>{
    return (
        <div className={styles.footer}>
            
            <h3 className={styles.title}>Travelling Countries</h3>
            <div>
                <Link to="https://www.instagram.com/ardescorpio" target="_blank">
            <img className={styles.icons} src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png" alt="instagram" />
                </Link>
                <Link to="https://www.linkedin.com/in/adhara-redruello-81a704262/" target="_blank">
            <img className={styles.icons} src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" alt="linkedin" />
                </Link>
                <Link to="https://github.com/adharainfinita" target="_blank">
            <img className={styles.icons} src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png" alt="github" />
                </Link>
            </div>
                <div className={styles.contact}>
                <img className={styles.icons} src="https://cdn-icons-png.flaticon.com/512/60/60543.png" alt="gmail" />
                <h4 className={styles.title}>adharanosalevich@gmail.com</h4>
            </div>
        </div>
    )
}

export default Footer