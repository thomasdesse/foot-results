import { useDispatch } from 'react-redux';


import { round24 } from '../../../actions/results';
import { useEffect } from 'react';
import { rankingRound24 } from '../../../actions/ranking';
import Arrays from '../../Arrays';



const Page24 = ( ) => {
    const dispatch = useDispatch();

    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(round24());
        }, []); 
    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(rankingRound24());
        }, []);


        return (
           <Arrays />
            )
        };

export default Page24