import styles from"../styles/Country.module.css";
import { Link } from "react-router-dom";

const Country = ({id, name, flag, continent}) => {
    return (
        <div className={styles.card}>
            <Link to={`/countries/detail/${id}`} className={styles.link}>
                <h1 className={styles.name}>{name}</h1>
                <img src={flag} alt="flagImg" className={styles.flag}/>
                <h3 className={styles.continent}>{continent}</h3>
            </Link>
        </div>
    )
}

export default Country;