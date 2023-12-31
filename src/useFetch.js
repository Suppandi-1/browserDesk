import { useState,useEffect } from "react";
const useFetch = (url) => {
    const [data , setdata] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
      
        useEffect(() =>{ 
            setTimeout(() => {
               fetch(url)
               .then(res => {
                   if(!res.ok){throw Error('could not fetch the data for that resource');}
                   return res.json();
               })
               .then( data=> {
                   setdata(data);
                   setIsPending(false);
                   setError(null);
               })
               .catch((err)=>{
                   setError(err.message);
                   setIsPending(false);
               })
            }, 1);
       },[url]); 
       return{
        data, isPending, error
       }
    
}
 
export default useFetch;