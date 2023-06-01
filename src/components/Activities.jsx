import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import { getAllActivities, getAllUsers } from "../redux/actions";
import Activity from "./Activity.jsx";
import styles from "../styles/Activities.module.css";

const Activities = () => {
    const dispatch = useDispatch();
    const {activities} = useSelector(state => state);

    useEffect(()=>{
        dispatch(getAllActivities());
        dispatch(getAllUsers());
    }, [dispatch])
    
    return(
        <div>
            <div className={styles.titles} >
                <p className={styles.title}> Autor</p>
                <p className={styles.title} >Nombre</p>
                <p className={styles.title} >Dificultad</p>
                <p className={styles.title} >Duración</p>
                <p className={styles.title} >Estación</p>
                <p className={styles.title} >Opciones</p>
            </div>
            <div className={styles.activities}> 
                {activities.map(activity => {
                    return (
                        <Activity 
                        key={activity?.id}
                        id={activity?.id}
                        autor={activity?.userId}
                        name={activity?.name}
                        difficulty={activity?.difficulty}
                        duration={activity?.duration}
                        season={activity?.season}
                        />
                    )
                })}
            </div>
            <div>
                <p>Si deseas crear una nueva actividad,
                    presiona el siguiente botón:</p>
                <button className={styles.button}>
                    <Link className={styles.link} to="/activities/form">CREAR NUEVA ACTIVIDAD</Link>
                </button>
            </div>
        </div>
    )
}

export default Activities