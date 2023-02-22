import { useDispatch } from 'react-redux';


import { round27 } from '../../../actions/results';
import { useEffect } from 'react';
import { rankingRound27 } from '../../../actions/ranking';
import Arrays from '../../Arrays';



const Page27 = ( ) => {
    const dispatch = useDispatch();

    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(round27());
        }, []); 
    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(rankingRound27());
        }, []);


        return (
           <Arrays />
            )
        };

export default Page27