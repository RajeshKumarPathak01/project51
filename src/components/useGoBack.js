import { useNavigate } from "react-router";


export const GobackFunction =()=>{
    const navigate = useNavigate();
       return navigate(-1);
    
}
