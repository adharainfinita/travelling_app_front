import useCountry from "../hooks/useCountry";


const Detail= ()=>{
    const country = useCountry();

    return (
        <div>
            <h1>{country?.name}</h1>
            <h3>{country?.capital}</h3>
            <h3>{country?.continent}</h3>
            <h3>{country?.population}</h3>
            <section>
            <img src={country?.flag} alt="flag" />
            <p>{country?.area}</p>
            <p>{country?.subregion}</p>
            </section>
            <section>
                <div>
                <p>Actividades asociadas:</p>
                {country?.activities}
                </div>
            </section>
        </div>
    )
}

export default Detail