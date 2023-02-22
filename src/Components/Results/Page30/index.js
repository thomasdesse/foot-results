import { useDispatch } from 'react-redux';


import { round30 } from '../../../actions/results';
import { useEffect } from 'react';
import { rankingRound30 } from '../../../actions/ranking';
import Arrays from '../../Arrays';



const Page30 = ( ) => {
    const dispatch = useDispatch();

    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(round30());
        }, []); 
    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(rankingRound30());
        }, []);


        return (
           <Arrays />
            )
        };

export default Page30