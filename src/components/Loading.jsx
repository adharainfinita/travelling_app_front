import { useNavigate } from "react-router-dom"
import styles from "../styles/Loading.module.css"
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getCountries } from '../redux/actions';

const Loading =()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        dispatch(getCountries(getCountries()));
    }, [dispatch])
    setTimeout(()=> navigate("/countries"), 2500)

    return (
        <div className={styles.container}>
            <h4>Loading</h4>
            <p>. . .</p>
            <img className={styles.image}
                src="https://cdn-icons-png.flaticon.com/512/4792/4792250.png" alt="van" />
        </div>
    )
}

export default Loading