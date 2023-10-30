import { useState ,useEffect} from "react";
import LinkList from "./LinksList";
import useFetch from "./useFetch";

const ToolsLinks = ({url, heading}) => {
    
    const {data:links, isPending, error} = useFetch(url);
    return (
        <div>
            {error && <div>{error}</div>}
            {isPending && <div className="toolsLink">Loading....</div>}
            {links && <LinkList links={links} title={heading}/>}   
        </div>
    );
}
 
export default ToolsLinks;