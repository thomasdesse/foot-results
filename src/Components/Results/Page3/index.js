import { useDispatch } from 'react-redux';


import { round3 } from '../../../actions/results';
import { useEffect } from 'react';
import { rankingRound3 } from '../../../actions/ranking';
import Arrays from '../../Arrays';



const Page3 = ( ) => {
    const dispatch = useDispatch();

    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(round3());
        }, []); 
    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(rankingRound3());
        }, []);


        return (
           <Arrays />
            )
        };

export default Page3