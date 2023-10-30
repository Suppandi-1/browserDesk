import { useState ,useEffect} from "react";
import LinkList from "./LinksList";

const ToolsLinks = ({url, heading}) => {
    const [devtoolslinks , setDevToolLinks] = useState(null);
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
                setDevToolLinks(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err)=>{
                setError(err.message);
                setIsPending(false);
            })
         }, 1);
    },[url]); 
    return (
        <div>
            {error && <div>{error}</div>}
            {isPending && <div className="toolsLink">Loading....</div>}
            {devtoolslinks && <LinkList devtoolslinks={devtoolslinks} title={heading}/>}   
        </div>
    );
}
 
export default ToolsLinks;