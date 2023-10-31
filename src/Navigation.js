import {Link} from 'react-router-dom';

const Navigation = () => {
    return ( 
        
        <div className="navigation" >
            
               <ul className='navigationul' >
              
                <Link to = "/"         >Home        </Link>
                <Link to = "/calendar" >Calendar    </Link>
                <Link to = "/devtools">DevTools     </Link>
                <Link to = "/quicklinks">Q-Links</Link>
                <Link to = "/codelinks">Codings     </Link>
                <Link to = "/Spotify"  >Spotify     </Link>
               </ul>
               
            
        </div>
        
     );
}
 
export default Navigation;