

const Navigation = () => {

    return ( 
        
        <div className="navigation">
            
               <ul>
                <a to = "/"         >Home</a>
                <a to = "/Calendar" >Calendar</a>
                <a to = "/Tools"    >DevTools</a>
                <a to = "/QuickLinks">QuicLinks</a>
                <a to = "/Spotify"  >Spotify</a>
               </ul>
            
        </div>
        
     );
}
 
export default Navigation;