import { useDispatch } from 'react-redux';


import { round10 } from '../../../actions/results';
import { useEffect } from 'react';
import { rankingRound10 } from '../../../actions/ranking';
import Arrays from '../../Arrays';



const Page10 = ( ) => {
    const dispatch = useDispatch();

    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(round10());
        }, []); 
    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(rankingRound10());
        }, []);


        return (
           <Arrays />
            )
        };

export default Page10