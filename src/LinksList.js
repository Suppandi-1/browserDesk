const LinkList = ({links, title }) => {
    
    return ( 
        <div className="toolsLink">
                <h2>{title}</h2>
                <ol type="1">
                    {links.map((info)=> (
                        <li className="link-preview" key={info.id}>
                            <a href={info.link} target="_blank"> {info.linkDiscription}</a>
                           
                        </li>
                    ))}
                </ol>
        </div>
     );
}
 
export default LinkList;