import { useDispatch } from 'react-redux';

import { round7 } from '../../../actions/results';
import { useEffect } from 'react';
import { rankingRound7 } from '../../../actions/ranking';
import Arrays from '../../Arrays';



const Page7 = ( ) => {
    const dispatch = useDispatch();

    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(round7());
        }, []); 
    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(rankingRound7());
        }, []);


        return (
           <Arrays />
            )
        };

export default Page7