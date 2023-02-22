import { useDispatch } from 'react-redux';


import { round21 } from '../../../actions/results';
import { useEffect } from 'react';
import { rankingRound21 } from '../../../actions/ranking';
import Arrays from '../../Arrays';



const Page21 = ( ) => {
    const dispatch = useDispatch();

    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(round21());
        }, []); 
    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(rankingRound21());
        }, []);


        return (
           <Arrays />
            )
        };

export default Page21