import DetailActivity from "./DetailActivity";
import styles from "../styles/Activity.module.css";
import { useSelector } from "react-redux";

const Activity = ({ autor, id, name,difficulty, duration, season}) => {
    const {users} = useSelector(state => state)
    const foundAutor= users.filter(user => user.id === autor)
    

    return (
        <div className={styles.container}>
            <section className={styles.activity}>
                <h2 className={styles.name}>{foundAutor[0]?.name || foundAutor[0]?.email || "system"}</h2>
                <h2 className={styles.name} >{name}</h2>
                <h3 className={styles.value} >{difficulty}</h3>
                <h3 className={styles.value} >{duration}</h3>
                <h3 className={styles.value} >{season}</h3>
            </section>
            <section>
                <DetailActivity 
                id={id} 
                key={id} 
                autor={foundAutor[0]?.id}/>
            </section>
        </div>
        
    )
}

export default Activity