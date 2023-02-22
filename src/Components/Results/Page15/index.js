import { useDispatch } from 'react-redux';


import { round15 } from '../../../actions/results';
import { useEffect } from 'react';
import { rankingRound15 } from '../../../actions/ranking';
import Arrays from '../../Arrays';



const Page15 = ( ) => {
    const dispatch = useDispatch();

    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(round15());
        }, []); 
    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(rankingRound15());
        }, []);


        return (
           <Arrays />
            )
        };

export default Page15