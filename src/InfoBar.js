const InfoBar = ({image_link}) => {
    return ( 
        
        <div className="infobar">
            
            <img src={image_link} alt="" width="50px"/>
            <h1>Hello Suppandi</h1>
        </div>
     );
}
 
export default InfoBar;