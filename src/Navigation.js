import {Link} from 'react-router-dom';

const Navigation = () => {
    return ( 
        
        <div className="navigation" >
            
               <ul className='navigationul' >
              
                <Link to = "/"         >Home        </Link>
                <Link to = "/calendar" >Calendar    </Link>
                <Link to = "/toolsdetails">DevTools </Link>
                <Link to = "/Spotify"  >Spotify     </Link>
               </ul>
               
            
        </div>
        
     );
}
 
export default Navigation;