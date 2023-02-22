import { useDispatch } from 'react-redux';


import { round34 } from '../../../actions/results';
import { useEffect } from 'react';
import { rankingRound34 } from '../../../actions/ranking';
import ArraysP2 from '../../ArraysP2';



const Page34 = ( ) => {
    const dispatch = useDispatch();

    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(round34());
        }, []); 
    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(rankingRound34());
        }, []);


        return (
           <ArraysP2 />
            )
        };

export default Page34