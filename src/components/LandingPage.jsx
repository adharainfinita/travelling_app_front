import styles from "../styles/LandingPage.module.css";
import { useNavigate} from "react-router-dom";

import { useSelector } from "react-redux";

const LandingPage= () =>{
    const navigate = useNavigate();
    const {user} = useSelector(state => state);

    const startCountries = ()=>{
        if(user.email && user.password) navigate("/loading");
        else navigate("/login")
    }
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.shapeL} ></div>   
                <h1 className={styles.title}>Traveling Countries</h1>
            </div>
        <button className={styles.button} onClick={startCountries}>
                    INGRESAR
                </button>
        </div>
    )
}

export default LandingPage
