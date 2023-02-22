import { useDispatch } from 'react-redux';


import { round12 } from '../../../actions/results';
import { useEffect } from 'react';
import { rankingRound12 } from '../../../actions/ranking';
import Arrays from '../../Arrays';



const Page12 = ( ) => {
    const dispatch = useDispatch();

    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(round12());
        }, []); 
    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(rankingRound12());
        }, []);


        return (
           <Arrays />
            )
        };

export default Page12