import {Link} from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from  "../styles/Nav.module.css"
import { deployTheSideBar, logout } from "../redux/actions.js";

const Nav = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const {interruptor} = useSelector(state => state)

    const handleSideBar = ()=>{
        dispatch(deployTheSideBar());
    }
    const logOut =()=>{
        dispatch(logout())
    }

    return(
        <div className={styles.Nav}>
            <button onClick={handleSideBar} className={ interruptor ? styles.optionsEnable : styles.options}>
                <img className={styles.image}
                src="https://cdn.icon-icons.com/icons2/1673/PNG/512/options2outline_110906.png"
                alt="" />
            </button>
            
            <h1 className={styles.title} >Traveling Countries</h1>
            <div>
                    <button className={ location.pathname === "/activities" 
                    ? styles.btnHere : styles.btn}>
                        <Link className={styles.link} to="/activities">
                            <img className={styles.image}
                            src="https://cdn-icons-png.flaticon.com/512/5029/5029158.png" 
                            alt="map" />
                            Activities
                        </Link>
                    </button>
                    <button className={ location.pathname === "/countries"? styles.btnHere : styles.btn}>
                        <Link className={styles.link} to="/countries" >
                        <img className={styles.image}
                            src="https://cdn-icons-png.flaticon.com/512/6618/6618280.png"
                            alt="gps" />
                        Countries</Link>
                    </button>
            <button className={styles.btn} onClick={logOut}><Link className={styles.link} to="/">
                <img className={styles.image}
                        src="https://cdn-icons-png.flaticon.com/512/1666/1666297.png"
                        alt="" />
                    Log out</Link></button> 
            </div>
        </div>
    )
}

export default Nav