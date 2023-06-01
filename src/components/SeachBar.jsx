import { useState } from "react";
import styles from "../styles/SearchBar.module.css";
import { useDispatch } from "react-redux";
import { getCountryByName, getCountries } from "../redux/actions";

const SearchBar = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const handleChange =(event)=>setName(event.target.value);

    const onSearch = ()=>{
        dispatch(getCountryByName(name))
    }
    const reset = ()=>{
        dispatch(getCountries())
    }

    return(
        <div >
            <input className={styles.search} type="search" placeholder="Busca un país" onChange={handleChange} value={name}></input>
            <button className={styles.buttons} onClick={()=> {
                onSearch(name);
                setName("");
            }}>BUSCAR</button>
            <button className={styles.buttons} onClick={reset}>REINICIAR</button>
        </div>
    )
}

export default SearchBar