import { Route, Routes, useLocation } from 'react-router-dom';
import NavStage2 from '../Nav/NavStage2';
import Page34 from "../Results/Page34";
import Page35 from "../Results/Page35";
import Page36 from "../Results/Page36";
import Page37 from "../Results/Page37";
import Page38 from "../Results/Page38";



const Stage2 = () => {
    const location = useLocation();
    //console.log(location);
    if (location.pathname==='/2emephase') {
       return(
           <div>
                <NavStage2 />
                <Page34 />
           </div>
            
       ) 
    }
    return (
        
        <div>
            <NavStage2 />
                <Routes>
                    <Route path="journee34" element={<Page34 />} />
                    <Route path="journee35" element={<Page35 />} />
                    <Route path="journee36" element={<Page36 />} />
                    <Route path="journee37" element={<Page37 />} />
                    <Route path="journee38" element={<Page38 />} />
                </Routes>
        </div>
    )
};



export default Stage2;
