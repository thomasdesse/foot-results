import { useDispatch } from 'react-redux';


import { round31 } from '../../../actions/results';
import { useEffect } from 'react';
import { rankingRound31 } from '../../../actions/ranking';
import Arrays from '../../Arrays';



const Page31 = ( ) => {
    const dispatch = useDispatch();

    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(round31());
        }, []); 
    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(rankingRound31());
        }, []);


        return (
           <Arrays />
            )
        };

export default Page31