import { useDispatch } from 'react-redux';


import { round14 } from '../../../actions/results';
import { useEffect } from 'react';
import { rankingRound14 } from '../../../actions/ranking';
import Arrays from '../../Arrays';



const Page14 = ( ) => {
    const dispatch = useDispatch();

    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(round14());
        }, []); 
    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(rankingRound14());
        }, []);


        return (
           <Arrays />
            )
        };

export default Page14