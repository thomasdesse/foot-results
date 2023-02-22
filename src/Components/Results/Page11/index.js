import { useDispatch } from 'react-redux';


import { round11 } from '../../../actions/results';
import { useEffect } from 'react';
import { rankingRound11 } from '../../../actions/ranking';
import Arrays from '../../Arrays';



const Page11 = ( ) => {
    const dispatch = useDispatch();

    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(round11());
        }, []); 
    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(rankingRound11());
        }, []);


        return (
           <Arrays />
            )
        };

export default Page11