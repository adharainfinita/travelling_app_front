import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateActivity } from "../redux/actions";
import { useParams, useNavigate} from "react-router-dom";
import validate from "../utils/validate";
import styles from "../styles/Form.module.css";


const Edition = () =>{
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {activitiesDetail, countries} = useSelector(state => state);
    const [newCountry, setNewCountry] = useState('');
    
    const [data, setData] = useState({
        id: id,
        name: activitiesDetail.name,
        difficulty: activitiesDetail.difficulty,
        duration: activitiesDetail.duration,
        season: activitiesDetail.season,
        countries: []
    })
    const [errors, setErrors] = useState({
        name: "",
        difficulty:  "",
        duration: "",
        season: "",
        countries: ""
    })
    
    const handleOnChange = (event) =>{
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
        setErrors(
            validate({
                ...data,
                [event.target.name]: event.target.value
            })
        )
    }
    const addCountry = (event) =>{
        let validateCountry = countries.find(country => country.name === newCountry);
        if(validateCountry){
            setData({
            ...data,
            countries: [...data.countries, validateCountry.id]
            });
            setNewCountry("");
            setErrors(
                validate({
                    ...data,
                countries: data.countries.length  
                })
                
            )
        }
        else{
            setErrors(
                validate({
                    ...data,
                    countries: event.target.value
                })
            )}
    }
    const countriesAsociated = activitiesDetail?.countries?.map((match, index) =>{
        return <option key={index} value={match.name}>{match.name}</option>
    })
    const listCountries = countries.map((country, index) =>{
        return<option key={index} value={country.name}>{country.name}</option> 
    })
    const cancelButton =()=>navigate("/loading");
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        try {
            dispatch(updateActivity(data));
            navigate("/loading");
            alert("Actividad modificada👍")
        } catch (error) {
            alert(error.message);
        }
    }
    return (
        <div>
            <section className={styles.dataPreview}>
                <p>{data.name}</p>
                <p>{data.difficulty}</p>
                <p>{data.duration}</p>
                <p>{data.season}</p>
                <p>{data.countries}</p>
            </section>

            <form className={styles.form} onSubmit={handleSubmit}>
                <button onClick={cancelButton} className={styles.cancel}>X</button>
                <h1 className={styles.principalTitle}>Edición de Actividad</h1>

                <section  className={styles.sections}>
                    <label className={styles.label} htmlFor="name">Nombre:</label>
                    <input type="text" name="name" placeholder="Reescribe el nombre "
                    className={styles.input} 
                    defaultValue={activitiesDetail?.name}
                    onChange={handleOnChange}/>
                    {errors.name && <p className={styles.errors}>{errors.name}</p>}

                    <label className={styles.label} htmlFor="difficulty"> Dificultad:</label>
                    <input type="range" name="difficulty" min="1" max="5"
                    defaultValue={activitiesDetail.difficulty}
                    onChange={handleOnChange}/>
                    {errors.difficulty && <p className={styles.errors}>{errors.difficulty}</p>}

                    <label className={styles.label} htmlFor="duration">Duración:</label>
                    <input type="time" name="duration"
                    defaultValue={activitiesDetail.duration}
                    onChange={handleOnChange}/>
                    {errors.duration && <p className={styles.errors}>{errors.duration}</p>}

                    <label className={styles.label} htmlFor="season" >Estación:</label>
                    <select name="season" defaultValue={activitiesDetail.season} 
                        onChange={handleOnChange}>
                            <option value="Summer">Summer</option>
                            <option value="Autum">Autum</option>
                            <option value="Winter">Winter</option>
                            <option value="Spring">Spring</option>
                    </select>
                    {errors.season && <p className={styles.errors}>{errors.season}</p>}
                </section>

                <section  className={styles.asociatedCountries}>
                    <label className={styles.label} htmlFor="countries">Países asociados</label>
                    <select className={styles.selects} name="countries" defaultValue="chimichangas" onChange={(event) => setNewCountry(event.target.value)}>
                        <option value="chimichangas">Elija el país</option>
                        {countriesAsociated}
                    </select>
                    <button type="button" className={styles.buttons} onClick={addCountry}>
                    Volver a Agregar</button>
                    <select className={styles.selects} name="countries" onChange={(event) => setNewCountry(event.target.value)}>
                        <option value="chimichangas" >Elija el país</option>
                        {listCountries}
                    </select>
                    <button type="button" className={styles.buttons} onClick={addCountry}>
                        Agregar otro país</button>
                    {errors.countries && <p className={styles.errors}>{errors.countries} </p>}
                    <div className={styles.countries}>{data.countries.length} países agregados</div>
                </section>
                <section>
                    <button
                    className={Object.values(errors).every((value) => value === "") ? styles.buttonSubmit : styles.buttons}
                    type="button"
                    onClick={handleSubmit}
                    disabled={
                        !Object.values(errors).every((value) => value === "") 
                        || !data.name || !data.difficulty || !data.duration
                        || !data.season || !data.countries.length
                    }
                    >Finalizar edición</button>
                </section>
            </form>
        </div>
    )
}

export default Edition