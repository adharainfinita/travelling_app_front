import styles from "../styles/SideBar.module.css"
import {useDispatch} from "react-redux";
import { orderCountries,filterCountries} from "../redux/actions";
import SearchBar from "./SeachBar";
import { useState } from "react";

const SideBar = () => {
    const dispatch = useDispatch();
    const [region, setRegion] = useState("");


const handleOrder =(event)=>{
        dispatch(orderCountries(event.target.value));
    }   

const handleFilter =(event) =>{
    if(event.target.name === "continente") setRegion(event.target.value);
    if(event.target.value === "All") setRegion("");
    dispatch(filterCountries(event.target.value));
}
    return(
        <main className={styles.menu}>
            <section className={styles.sections}>
                <h4 className={styles.titles} >BUSCAR</h4>
                <SearchBar/>
            </section>
            <hr className={styles.separator}/>
            <section className={styles.sections}>
                <h4 className={styles.titles}>ORDENAR</h4>
                    <label className={styles.options} htmlFor="NOMBRE">Nombre: </label>
                    <select name="NOMBRE" className={styles.selects} onChange={handleOrder}>
                        <option value="A">Ascendente</option>
                        <option value="D">Descendente</option>
                    </select>
                    <label className={styles.options} htmlFor="Población">Población: </label>
                    <select name="Población" className={styles.selects} onChange={handleOrder}>
                        <option value="MAX">Ascendente</option>
                        <option value="MIN">Descendente</option>
                    </select>
            </section>
            <hr className={styles.separator}/>
            <section className={styles.sections}>
                <h4 className={styles.titles}>FILTRAR</h4>
                <label className={styles.options} htmlFor="Continent">Continente: </label>
                <select name="continente" className={styles.selects} onChange={handleFilter}>
                    <option value="All">Todos</option>
                    <option value="/Africa">Africa</option>
                    <option value="/Asia">Asia</option>
                    <option value="/North America">America(Norte)</option>
                    <option value="/South America">America(Sur)</option>
                    <option value="/Europe">Europa</option>
                    <option value="/Oceania">Oceanía</option>
                    <option value="/Antarctica">Antartida</option>
                </select>
                <label className={styles.options} htmlFor="subregion">Región: </label>
                <select name="subregion" className={styles.selects} onChange={handleFilter}>
                    <option value="All">Todos</option>
                    <option value="*Southern Europe" disabled={region !== "/Europe"}>Europa del Sur</option>
                    <option value="*Central Europe"  disabled={region !== "/Europe"}>Europa Central</option>
                    <option value="*Northern Europe" disabled={region !== "/Europe"}>Europa del Norte</option>
                    <option value="*Eastern Europe"  disabled={region !== "/Europe"}>Europa Oriental</option>
                    <option value="*Western Europe"  disabled={region !== "/Europe"}>Europa Occidental</option> 
                    <option value="*Southern Africa" disabled={region !== "/Africa"}>Africa del Sur</option>
                    <option value="*Northern Africa" disabled={region !== "/Africa"}>Africa del Norte</option>
                    <option value="*Middle Africa" disabled={region !== "/Africa"}>Africa Media</option>
                    <option value="*Eastern Africa"disabled={region !== "/Africa"}>Africa Oriental</option>
                    <option value="*Western Africa"disabled={region !== "/Africa"}>Africa Occidental</option>
                    <option value="*South-Eastern Asia" disabled={region !== "/Asia"}>Sureste Asiatico</option>
                    <option value="*Eastern Asia" disabled={region !== "/Asia"}>Asia Oriental</option>
                    <option value="*Central Asia" disabled={region !== "/Asia"}>Asia central</option>
                    <option value="*Western Asia" disabled={region !== "/Asia"}>Asia Occidental</option>
                    <option value="*Southern Asia"disabled={region !== "/Asia"}>Asia del Sur</option>
                    <option value="*North America" disabled={region !== "/North America"}>Norteamerica</option>
                    <option value="*Caribbean" disabled={region !== "/North America"}>Caribe</option>
                    <option value="*Central America" disabled={region !== "/North America"}>America Central</option>
                    <option value="*South America" disabled={region !== "/South America"}>Sudamerica</option>
                    <option value="*Australia and New Zealand" disabled={region !== "/Oceania"}>Australia && Nueva Zelanda</option>
                    <option value="*Polynesia" disabled={region !== "/Oceania"}>Polinesia</option>
                    <option value="*Micronesia" disabled={region !== "/Oceania"}>Micronesia</option>
                    <option value="*Melanesia" disabled={region !== "/Oceania"}>Melanesia</option>
                </select>
                <label className={styles.options} htmlFor="activities">Países con actividades turísticas</label>
                <select name="activities" className={styles.selects} onChange={handleFilter}>
                    <option value="All">Default</option>
                    <option value="ACT">Todas las ctividades</option>
                </select>
            </section>
        </main>
    )
}

export default SideBar