import { useDispatch } from 'react-redux';


import { round28 } from '../../../actions/results';
import { useEffect } from 'react';
import { rankingRound28 } from '../../../actions/ranking';
import Arrays from '../../Arrays';



const Page28 = ( ) => {
    const dispatch = useDispatch();

    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(round28());
        }, []); 
    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(rankingRound28());
        }, []);


        return (
           <Arrays />
            )
        };

export default Page28