import { useDispatch } from 'react-redux';


import { round25 } from '../../../actions/results';
import { useEffect } from 'react';
import { rankingRound25 } from '../../../actions/ranking';
import Arrays from '../../Arrays';



const Page25 = ( ) => {
    const dispatch = useDispatch();

    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(round25());
        }, []); 
    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(rankingRound25());
        }, []);


        return (
           <Arrays />
            )
        };

export default Page25