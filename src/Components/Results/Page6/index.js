import { useDispatch } from 'react-redux';


import { round6 } from '../../../actions/results';
import { useEffect } from 'react';
import { rankingRound6 } from '../../../actions/ranking';
import Arrays from '../../Arrays';



const Page6 = ( ) => {
    const dispatch = useDispatch();

    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(round6());
        }, []); 
    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(rankingRound6());
        }, []);


        return (
           <Arrays />
            )
        };

export default Page6