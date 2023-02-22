import { useDispatch } from 'react-redux';

import { round36 } from '../../../actions/results';
import { useEffect } from 'react';
import { rankingRound36 } from '../../../actions/ranking';
import ArraysP2 from '../../ArraysP2';



const Page36 = ( ) => {
    const dispatch = useDispatch();

    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(round36());
        }, []); 
    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(rankingRound36());
        }, []);


        return (
           <ArraysP2 />
            )
        };

export default Page36