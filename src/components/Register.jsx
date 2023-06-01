import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate} from "react-router-dom";
import userValidate from "../utils/userValidate";
import { createUser } from "../redux/actions";
import styles from "../styles/login.module.css";

const Register = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user} = useSelector(state => state);

    const [showPassword, setShowPassword] = useState(false);
    const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: ""
    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleOnChange = (event) => { 
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(
            userValidate({
                ...userData,
                [event.target.name]: event.target.value
            })
        )
    };
    const handleOnSubmit = (event) => { 
        event.preventDefault();
        try {
            dispatch(createUser(userData));
            alert("Cuenta creada con éxito👌")
            navigate("/");
        } catch (error) {
            alert(error.message);
        }
    }
    const handleShowPassword = () => { 
        setShowPassword(!showPassword); 
    };

    const cancelForm = () =>navigate("/login");

console.log(errors);
    return(
    <form className={styles.form}  onSubmit={handleOnSubmit}>
        <button className={styles.cancel} onClick={cancelForm} >X</button>
        <h1 className={styles.principalTitle}>CREAR USUARIO</h1>
        <section className={styles.sections}>
        <label className={styles.label} htmlFor="name">Nombre de Usuario: </label>
            <input
            className={styles.input}
            name="name"
            type="text"
            placeholder="Elija un nombre con el cual identificarse"
            onChange={handleOnChange}
            />
            <p className={styles.comment}>No es necesario este requisito</p>
        <label className={styles.label} htmlFor="email">Email: </label>
            <input
            className={styles.input}
            name="email"
            type="email"
            placeholder="Ingrese su email"
            onChange={handleOnChange}
            />
            {errors.email && <p className={styles.errors}>{errors.email}</p>}
        </section>
        
        <section className={styles.sections}>
        <label className={styles.label} htmlFor="password">Password: </label>
        <input
            className={styles.input}
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Ingrese su password"
            // value={userData.password}
            onChange={handleOnChange}
            />
            {errors.password && <p className={styles.errors}>{errors.password}</p>}
        <button type="button" className={styles.eyeButtons} onClick={handleShowPassword}>
            {showPassword 
            ? <img className={styles.img} src="https://www.pngitem.com/pimgs/m/76-760338_close-eye-svg-closed-eye-icon-hd-png.png" alt="eyeClose" /> 
            : <img className={styles.img} src="https://www.clipartmax.com/png/middle/291-2914907_eye-icon-vector-image-auge-symbol.png" alt="eyeOpen" />}
        </button>
        </section>
        <section className={styles.sections}>

        <button
            className={styles.buttonSubmit}
            type="button"
            onClick={handleOnSubmit}
            disabled={ 
                !Object.values(errors).every(value => value === "") ||
            !userData.email ||
            !userData.password
            }>
            CREAR
        </button>
        </section>
        
    </form>
    
);
}

export default Register;