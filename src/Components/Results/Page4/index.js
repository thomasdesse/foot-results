import { useDispatch } from 'react-redux';


import { round4 } from '../../../actions/results';
import { useEffect } from 'react';
import { rankingRound4 } from '../../../actions/ranking';
import Arrays from '../../Arrays';



const Page4 = ( ) => {
    const dispatch = useDispatch();

    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(round4());
        }, []); 
    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(rankingRound4());
        }, []);


        return (
           <Arrays />
            )
        };

export default Page4