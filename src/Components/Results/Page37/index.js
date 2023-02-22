import { useDispatch } from 'react-redux';

import { round37 } from '../../../actions/results';
import { useEffect } from 'react';
import { rankingRound37 } from '../../../actions/ranking';
import ArraysP2 from '../../ArraysP2';



const Page37 = ( ) => {
    const dispatch = useDispatch();

    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(round37());
        }, []); 
    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(rankingRound37());
        }, []);


        return (
            <ArraysP2 />
            )
        };

export default Page37