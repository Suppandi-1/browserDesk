
import useFetch from "./useFetch";
import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";

const ToolsDetails = ({url,heading}) => {
    const {data:links, isPending, error} = useFetch(url);
    ;
    const history = useHistory();
    
    const handleDelete = (id) =>{
        fetch( url + id,{
            method:'DELETE'
        }).then(() => {
            
            history.push('/toolsdetails')
            window.location.reload(false);
        })
    }
    
    return ( 
        <div className="toolsdtails">
            {error && <div>{error}</div>}
            {isPending && <div className=""><h2>Loading....</h2></div>}
            {links &&  <div className="">
                <h2>{heading}</h2>
                <ol type="1">
                    {links.map((info)=> (
                        <li className="link-preview" key={info.id}>
                            <a href={info.link} target="_blank"> {info.linkDiscription}</a>
                            <button type="button" onClick={() => {handleDelete(info.id)}}>delete</button>
                        </li>
                        
                    ))}
                </ol>
            </div>
            }
        </div>
     );
}
 
export default ToolsDetails;