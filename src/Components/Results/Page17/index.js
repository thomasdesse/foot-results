import { useDispatch } from 'react-redux';


import { round17 } from '../../../actions/results';
import { useEffect } from 'react';
import { rankingRound17 } from '../../../actions/ranking';
import Arrays from '../../Arrays';



const Page17 = ( ) => {
    const dispatch = useDispatch();

    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(round17());
        }, []); 
    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(rankingRound17());
        }, []);


        return (
           <Arrays />
            )
        };

export default Page17