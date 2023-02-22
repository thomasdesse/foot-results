
//import './style.scss';

import { Route, Routes, useLocation } from 'react-router-dom';
import NavStage1 from "../Nav/NavStage1";
import Page1 from "../Results/Page1";
import Page2 from "../Results/Page2";
import Page3 from "../Results/Page3";
import Page4 from "../Results/Page4";
import Page5 from "../Results/Page5";
import Page6 from "../Results/Page6";
import Page7 from "../Results/Page7";
import Page8 from "../Results/Page8";
import Page9 from "../Results/Page9";
import Page10 from "../Results/Page10";
import Page11 from "../Results/Page11";
import Page12 from "../Results/Page12";
import Page13 from "../Results/Page13";
import Page14 from "../Results/Page14";
import Page15 from "../Results/Page15";
import Page16 from "../Results/Page16";
import Page17 from "../Results/Page17";
import Page18 from "../Results/Page18";
import Page19 from "../Results/Page19";
import Page20 from "../Results/Page20";
import Page21 from "../Results/Page21";
import Page22 from "../Results/Page22";
import Page23 from "../Results/Page23";
import Page24 from "../Results/Page24";
import Page25 from "../Results/Page25";
import Page26 from "../Results/Page26";
import Page27 from "../Results/Page27";
import Page28 from "../Results/Page28";
import Page29 from "../Results/Page29";
import Page30 from "../Results/Page30";
import Page31 from "../Results/Page31";
import Page32 from "../Results/Page32";
import Page33 from "../Results/Page33";

import './styles.scss';


const Stage1 = () => {
    const location = useLocation();
    //console.log(location);
    if (location.pathname==='/1erphase') {
       return(
           <div>
                <NavStage1 />
                <Page1 />
           </div>
            
       ) 
    }
    return (
        
        <div>
            <NavStage1 />
                    <Routes>                
                        <Route path="journee1" element={<Page1 />} />
                        <Route path="journee2" element={<Page2 />} />
                        <Route path="journee3" element={<Page3 />} />
                        <Route path="journee4" element={<Page4 />} />
                        <Route path="journee5" element={<Page5 />} />
                        <Route path="journee6" element={<Page6 />} />
                        <Route path="journee7" element={<Page7 />} />
                        <Route path="journee8" element={<Page8 />} />
                        <Route path="journee9" element={<Page9 />} />
                        <Route path="journee10" element={<Page10 />} />
                        <Route path="journee11" element={<Page11 />} />
                        <Route path="journee12" element={<Page12 />} />
                        <Route path="journee13" element={<Page13 />} />
                        <Route path="journee14" element={<Page14 />} />
                        <Route path="journee15" element={<Page15 />} />
                        <Route path="journee16" element={<Page16 />} />
                        <Route path="journee17" element={<Page17 />} />
                        <Route path="journee18" element={<Page18 />} />
                        <Route path="journee19" element={<Page19 />} />
                        <Route path="journee20" element={<Page20 />} />
                        <Route path="journee21" element={<Page21 />} />
                        <Route path="journee22" element={<Page22 />} />
                        <Route path="journee23" element={<Page23 />} />
                        <Route path="journee24" element={<Page24 />} />
                        <Route path="journee25" element={<Page25 />} />
                        <Route path="journee26" element={<Page26 />} />
                        <Route path="journee27" element={<Page27 />} />
                        <Route path="journee28" element={<Page28 />} />
                        <Route path="journee29" element={<Page29 />} />
                        <Route path="journee30" element={<Page30 />} />
                        <Route path="journee31" element={<Page31 />} />
                        <Route path="journee32" element={<Page32 />} />
                        <Route path="journee33" element={<Page33 />} />
                    </Routes>
        </div>
    )
};



export default Stage1;
