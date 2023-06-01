import { useDispatch, useSelector } from "react-redux"
import styles from "../styles/Pagination.module.css"
import { nextPage, prevPage } from "../redux/actions";

export const Pagination = ({pagesStack}) =>{
    const numPage = useSelector((state) => state.page);
    const dispatch = useDispatch();
    
    const next =()=> dispatch(nextPage());
    const prev=()=> dispatch(prevPage());



    return (
        <div className={styles.container}>
        {numPage > 1 
            ?<button className={styles.buttons} onClick={prev}>ANTERIOR</button>
            :null}
            <p className={styles.text}>Página {numPage} de {Math.ceil(pagesStack)}</p>
            {numPage < pagesStack 
            ?<button className={styles.buttons} onClick={next}>SIGUIENTE</button>
            :null}
        
        </div>
    )
}