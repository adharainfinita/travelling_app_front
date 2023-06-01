import { useParams} from "react-router-dom";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryDetail, cleanCountryDetail } from "./../redux/actions";

const useCountry = ()=>{
    const {id} = useParams();
    const dispatch = useDispatch();
    const country = useSelector(state => state.detail);

    useEffect(() => {
        dispatch(getCountryDetail(id));
        return ()=>{
            dispatch(cleanCountryDetail())
        }
    }, [dispatch, id]);
    return country
};

export default useCountry