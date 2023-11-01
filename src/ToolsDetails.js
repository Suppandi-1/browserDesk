
import { useEffect, useState } from "react";
import useFetch from "./useFetch";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ToolsDetails = ({url,heading}) => {
    
    const {data:links, isPending, error} = useFetch(url);
    ;
    const history = useHistory();
    const [name, setName] = useState('');
    const [link, setLink] = useState(null);
    // const [group, setGroup] = useState(`${heading}`);
    const [IsPending, setIsPending] = useState(true);

    
    const handleDelete = (id) =>{
        fetch( url + id,{
            method:'DELETE'
        }).then(() => {
            
            history.push(`${heading}`);
            window.location.reload(false);
        })
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const shortCut = {linkDiscription:name ,  link  };
        setIsPending(true);

        fetch(url , {
            method :'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(shortCut)
        })
        .then(()=>{
            setIsPending(false)
            history.push(`${heading}`);
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
            <div id="create">
                <h2>Add a New Link</h2>
                <form>
                    <label><h4>ShortCut Name</h4>
                    <input type="text" required value={name} onChange={(e)=> {setName(e.target.value) }}></input></label>

                    <label><h4>ShortCut Link</h4>
                    <input type="text" required value={link} onChange={(e)=> setLink(e.target.value)}></input></label>

                    {/* <label><h4>Added to group </h4>
                    <select value={group} onChange={(e) => setGroup(e.target.value)}>

                        <option value="DevTools">DevTools</option>
                        <option value="Quick-Links">Quick-Links</option>
                        <option value="CodingLinks">CodingLinks</option>
                    </select></label> */}
                    <button onClick={(e) => handleSubmit(e)}>Add ShortCut Link</button>
                </form>
            </div>
        </div>
     );
}
 
export default ToolsDetails;