import useCountry from "../hooks/useCountry";
import styles from "../styles/DetailCountry.module.css";
import { useNavigate, Link } from "react-router-dom";


const DetailCountry= ()=>{
    const country = useCountry();
    const navigate = useNavigate();
    
    const backToCountries = () =>{
        navigate("/countries")
    }
    const countryActivities = country?.activities?.map( (activity, index) =>{
        return (
            <div className={styles.activities} key={index}>
                <Link className={styles.link} to='/activities'>
                    <p>{activity.name}</p>
                </Link>
            </div>
        )
    })
    
    return (
        <div className={styles.containerOfContainer}>
            <button  onClick={backToCountries} className={styles.button}>Volver</button>
            <div className={styles.container}>
                <section>
                    <h1 className={styles.name}>{country?.name}</h1>
                </section>
                <section className={styles.medium}>
                    <div>
                        <img className={styles.flag} src={country?.flag} alt="flag" />
                        <div className={styles.sub}>
                                <p >Area: {country?.area}</p>
                                <p>Región: {country?.subregion}</p>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <p className={styles.titles}>Capital: {country?.capital}</p>
                        <p className={styles.titles}>Continente: {country?.continent}</p>
                        <p className={styles.titles}>Población: {country?.population} mil habitantes</p>
                    </div>
                </section>
                <section>
                    <div className={styles.activitiesContainer}>
                    <p className={styles.titles}>Actividades asociadas:</p>
                    {countryActivities}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default DetailCountry