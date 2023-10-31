import {Link} from 'react-router-dom';

const Navigation = () => {
    return ( 
        
        <div className="navigation" >
            
               <ul className='navigationul' >
              
                <Link to = "/"         >Home        </Link>
                <Link to = "/calendar" >Calendar    </Link>
                <Link to = "/DevTools">DevTools     </Link>
                <Link to = "/Quick-Links">Q-Links</Link>
                <Link to = "/CodingLinks">Codings     </Link>
                <Link to = "/Spotify"  >Spotify     </Link>
               </ul>
               
            
        </div>
        
     );
}
 
export default Navigation;