import { useDispatch } from 'react-redux';


import { round13 } from '../../../actions/results';
import { useEffect } from 'react';
import { rankingRound13 } from '../../../actions/ranking';
import Arrays from '../../Arrays';



const Page13 = ( ) => {
    const dispatch = useDispatch();

    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(round13());
        }, []); 
    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(rankingRound13());
        }, []);


        return (
           <Arrays />
            )
        };

export default Page13