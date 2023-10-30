import Calendar from "./Calendar";
import InfoBar from "./InfoBar";

import ToolsLinks from "./ToolsLink";


const Home = () => {
    const image = 'https://i.ibb.co/zHJ4nL7/Hydro74.jpg';
    const devToolsUrl = 'https://databaseofproject.onrender.com/devtoolslinks';
    const quickLinksUrl = 'https://databaseofproject.onrender.com/QuickLinks';
    const codeLinksUrl = 'https://databaseofproject.onrender.com/CodeLinks';
    // const devToolsUrl = 'http://localhost:8000/devtoolslinks';
    // const quickLinksUrl = 'http://localhost:8000/QuickLinks';
    // const codeLinksUrl = 'http://localhost:8000/CodeLinks';
   
    return ( 
        <div className="home">
            <InfoBar image_link={image}/>
            <Calendar/>
            <div className="linkBars">
                <ToolsLinks url={devToolsUrl}  heading="DevTools"/>
                <ToolsLinks url={quickLinksUrl} heading="QucikLinks"/>
                <ToolsLinks url={codeLinksUrl} heading="CodeLinks"/>
                
            </div>
        </div>
     );
}
 
export default Home;