import { useDispatch } from 'react-redux';


import { round23 } from '../../../actions/results';
import { useEffect } from 'react';
import { rankingRound23 } from '../../../actions/ranking';
import Arrays from '../../Arrays';



const Page23 = ( ) => {
    const dispatch = useDispatch();

    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(round23());
        }, []); 
    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(rankingRound23());
        }, []);


        return (
           <Arrays />
            )
        };

export default Page23