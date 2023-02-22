import { useDispatch } from 'react-redux';


import { round35 } from '../../../actions/results';
import { useEffect } from 'react';
import { rankingRound35 } from '../../../actions/ranking';
import ArraysP2 from '../../ArraysP2';



const Page35 = ( ) => {
    const dispatch = useDispatch();

    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(round35());
        }, []); 
    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(rankingRound35());
        }, []);


        return (
            <ArraysP2 />
            )
        };

export default Page35