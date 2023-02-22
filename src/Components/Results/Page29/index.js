import { useDispatch } from 'react-redux';


import { round29 } from '../../../actions/results';
import { useEffect } from 'react';
import { rankingRound29 } from '../../../actions/ranking';
import Arrays from '../../Arrays';



const Page29 = ( ) => {
    const dispatch = useDispatch();

    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(round29());
        }, []); 
    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(rankingRound29());
        }, []);


        return (
           <Arrays />
            )
        };

export default Page29