import { useDispatch } from 'react-redux';

import { round22 } from '../../../actions/results';
import { useEffect } from 'react';
import { rankingRound22 } from '../../../actions/ranking';
import Arrays from '../../Arrays';



const Page22 = ( ) => {
    const dispatch = useDispatch();

    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(round22());
        }, []); 
    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(rankingRound22());
        }, []);


        return (
           <Arrays />
            )
        };

export default Page22