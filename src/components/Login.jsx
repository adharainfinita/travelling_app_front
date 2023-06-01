import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../styles/login.module.css";

const Login = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user} = useSelector(state => state);

    const [aux, setAux] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [userData, setUserData] = useState({
    email: "",
    password: ""
    });

    const handleOnChange = (event) => { 
    setUserData({
        ...userData,
        [event.target.name]: event.target.value
    })};


const handleOnSubmit = (event) => { 
    // event.preventDefault();
        try {
            if(!aux){ 
                dispatch( login(userData));   
                setAux(true);
            };
            if(aux){
            if(user.email && user.password) navigate("/loading")
            else setAux(false);
            }
            
    } catch (error) {
        alert(error.message);
    }
}


const handleShowPassword = () => { 
    setShowPassword(!showPassword); 
};

const handleDefaultAccount = ()=>{
    alert("Ten en cuenta que no podrás utilizar todas las funcionalidades");
    if(window.confirm("¿Deseas ingresar sin una cuenta?")){
        dispatch(login({
            email: "pureconqueso@gmail.com",
            password: "12345"}));
        navigate("/loading")
    }
}

    return (
    <form className={styles.form}  onSubmit={handleOnSubmit}>
            <h1 className={styles.principalTitle}>Ingresar a la App</h1>
        <section className={styles.sections}>
        <label className={styles.label} htmlFor="email">Email: </label>
            <input
            name="email"
            type="email"
            placeholder="Ingrese su email"
            onChange={handleOnChange}
            className={styles.input}
            />
        </section>
        
        <section className={styles.sections}> 
        <label className={styles.label} htmlFor="password">Password: </label>
        <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Ingrese su password"
            onChange={handleOnChange}
            className={styles.input}
            />
        <button type="button" className={styles.eyeButtons} onClick={handleShowPassword}>
            {showPassword 
            ? <img className={styles.img} src="https://www.pngitem.com/pimgs/m/76-760338_close-eye-svg-closed-eye-icon-hd-png.png" alt="eyeClose" /> 
            : <img className={styles.img} src="https://www.clipartmax.com/png/middle/291-2914907_eye-icon-vector-image-auge-symbol.png" alt="eyeOpen" />}
        </button>
        </section>
        <section className={styles.sections}>
            <p className={styles.label}>¿No tienes una cuenta? <Link className={styles.link} to="/login/register">Creala aquí</Link></p>
        <button
        className={styles.buttonSubmit}
            type="button"
            onClick={handleOnSubmit}
            disabled={
                !userData.email ||
                !userData.password
            }>
            { aux ? "INGRESAR" : "VERIFICAR"}
        </button>
                <button className={styles.cancel} onClick={handleDefaultAccount} >Entrar sin cuenta</button>
        </section>
    </form>
);
}

export default Login;