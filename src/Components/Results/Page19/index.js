import { useDispatch } from 'react-redux';


import { round19 } from '../../../actions/results';
import { useEffect } from 'react';
import { rankingRound19 } from '../../../actions/ranking';
import Arrays from '../../Arrays';



const Page19 = ( ) => {
    const dispatch = useDispatch();

    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(round19());
        }, []); 
    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(rankingRound19());
        }, []);


        return (
           <Arrays />
            )
        };

export default Page19