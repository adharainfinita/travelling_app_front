import {useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanActivityDetail, deleteActivity, getActivityByID } from "../redux/actions";
import {useNavigate, Link} from "react-router-dom";
import styles from "../styles/DetailActivity.module.css";


const DetailActivity = ({id, autor}) =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {activitiesDetail, user} = useSelector(state => state);
    const [aux, setAux] = useState(false);

    useEffect(()=>{
        dispatch(cleanActivityDetail())
    }, [dispatch]);

    const handleDetail =()=>{
        if(!aux && !Object.keys(activitiesDetail).length){
            dispatch(getActivityByID(id));
            setAux(true);
        }
        if(aux && Object.keys(activitiesDetail).length) {
            dispatch(cleanActivityDetail())
            setAux(false)
        }
    }

    const countriesAsociated = activitiesDetail?.countries?.map( (country, index) => {
        return (
            <div className={styles.info} key={index}>
                <Link className={styles.link} to={`/countries/detail/${country.id}`}>
                    <p>{country.name}</p>
                </Link>
            </div>
        )
    })

    const handleEdition =()=>{
        if(user.id === autor){
            navigate(`/activities/edition/${id}`)
        }
        else alert("Esta actividad no es tuya")
    }
    const handleDelete =()=>{
        if(user.id === autor){
            dispatch(deleteActivity(id));
        alert("Actividad borrada☠")
        }
        else alert("Esta actividad no es tuya")
    }

    return (
        <div className={styles.container}>
            <button className={styles.buttonOne} onClick={handleDetail}>
                Paises asociados</button>
            {aux && countriesAsociated}
            <button className={styles.buttonTwo} disabled={!aux && !Object.keys(activitiesDetail).length} onClick={handleEdition}> 
                    Editar Actividad
            </button>
            <button className={styles.buttonThree} disabled={!aux && !Object.keys(activitiesDetail).length} onClick={handleDelete}>
                Borrar Actividad</button>
        </div>
    )

}

export default DetailActivity