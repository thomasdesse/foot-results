import { useDispatch } from 'react-redux';

import { round9 } from '../../../actions/results';
import { useEffect } from 'react';
import { rankingRound9 } from '../../../actions/ranking';
import Arrays from '../../Arrays';



const Page9 = ( ) => {
    const dispatch = useDispatch();

    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(round9());
        }, []); 
    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(rankingRound9());
        }, []);


        return (
           <Arrays />
            )
        };

export default Page9