//import Footer from "../Footer/index.js";
//import HeaderPage from "../Header/index.js";
//import Results from "../Results/index.js";
import Home from "../Home/index.js";
import HeaderPage from "../Header/index.js";
import Footer from "../Footer/index.js";
import NavHeader from "../Nav/NavHeader";
import Stage1 from "../Stage1/index.js";
import Stage2 from "../Stage2/index.js";
import CupE from "../CupE/index.js";
import CupL from "../CupL/index.js";

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { roundsId } from "../../actions/rounds.js";
import { teams } from "../../actions/teams.js";
import { Route, Routes } from 'react-router';
import './styles.scss';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    //utilisation action creator qui est une fonction qui retourne l objet action
    dispatch(teams());
  }, []);

  useEffect(() => {
    //utilisation action creator qui est une fonction qui retourne l objet action
    dispatch(roundsId());
  }, []);

  const hideContent = useSelector ((state) => state.burger.menu);
  
  return (
    <div className="App">
        <HeaderPage
          title = "Scottish Premier ship Results"
        />
        <NavHeader className="navHeader" />
          <div className={`App-content ${hideContent ? "hiden-content" : "show-content"}`}>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/1erphase/*" element={<Stage1 />} />
                  <Route path="/2emephase/*" element={<Stage2 />} />
                  <Route path="/coupe-ecosse" element={<CupE />} />
                  <Route path="/coupe-ligue" element={<CupL />} />
                  <Route path="google" element={() => {
                     window.location.href = 'https://google.com';
                     return null;
                  }} />
              </Routes>            
          </div>                             
        <Footer contacts = 'contacts'/>        
    </div>
  );
}

export default App;
