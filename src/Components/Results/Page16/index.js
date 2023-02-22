import { useDispatch } from 'react-redux';


import { round16 } from '../../../actions/results';
import { useEffect } from 'react';
import { rankingRound16 } from '../../../actions/ranking';
import Arrays from '../../Arrays';



const Page16 = ( ) => {
    const dispatch = useDispatch();

    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(round16());
        }, []); 
    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(rankingRound16());
        }, []);


        return (
           <Arrays />
            )
        };

export default Page16