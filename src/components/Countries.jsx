import { useSelector } from "react-redux";
import { Pagination } from "./Pagination";
import Country from "./Country.jsx";
import styles from "../styles/Countries.module.css";

const Countries = () => {
    const {countries, interruptor} = useSelector(state => state);
    const pageNow = useSelector(state => state.page);
    const from = (pageNow - 1) * 10;
    const to = pageNow * 10;
    let pagesStack = Math.floor(countries?.length / 5) / 2;
    let countriesForPage = countries?.slice(from, to)
    
    const verifyCountries = countriesForPage?.map(country => {
        return (
            <Country 
            key={country?.id}
            id={country?.id}
            name={country?.name}
            flag={country?.flag}
            continent={country?.continent}
            />
        )     
        })

    return (
        <div>
            <div className={ interruptor ? styles.containerSide : styles.container}>
                {verifyCountries}
            </div>
            <Pagination pagesStack={pagesStack} />
        </div>
    )
}

export default Countries