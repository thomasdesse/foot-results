import { useDispatch } from 'react-redux';


import { round33 } from '../../../actions/results';
import { useEffect } from 'react';
import { rankingRound33 } from '../../../actions/ranking';
import Arrays from '../../Arrays';



const Page33 = ( ) => {
    const dispatch = useDispatch();

    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(round33());
        }, []); 
    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(rankingRound33());
        }, []);


        return (
           <Arrays />
            )
        };

export default Page33