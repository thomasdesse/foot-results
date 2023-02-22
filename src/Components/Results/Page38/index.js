import { useDispatch } from 'react-redux';

import { round38 } from '../../../actions/results';
import { useEffect } from 'react';
import { rankingRound38 } from '../../../actions/ranking';
import ArraysP2 from '../../ArraysP2';


const Page38 = ( ) => {
    const dispatch = useDispatch();

    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(round38());
        }, []); 
    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(rankingRound38());
        }, []);


        return (
            <ArraysP2 />
            )
        };

export default Page38