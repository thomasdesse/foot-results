import { useDispatch } from 'react-redux';


import { round20 } from '../../../actions/results';
import { useEffect } from 'react';
import { rankingRound20 } from '../../../actions/ranking';
import Arrays from '../../Arrays';



const Page20 = ( ) => {
    const dispatch = useDispatch();

    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(round20());
        }, []); 
    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(rankingRound20());
        }, []);


        return (
           <Arrays />
            )
        };

export default Page20