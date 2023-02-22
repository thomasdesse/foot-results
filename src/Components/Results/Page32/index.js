import { useDispatch } from 'react-redux';


import { round32 } from '../../../actions/results';
import { useEffect } from 'react';
import { rankingRound32 } from '../../../actions/ranking';
import Arrays from '../../Arrays';



const Page32 = ( ) => {
    const dispatch = useDispatch();

    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(round32());
        }, []); 
    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(rankingRound32());
        }, []);


        return (
           <Arrays />
            )
        };

export default Page32