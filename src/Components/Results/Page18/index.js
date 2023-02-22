import { useDispatch } from 'react-redux';


import { round18 } from '../../../actions/results';
import { useEffect } from 'react';
import { rankingRound18 } from '../../../actions/ranking';
import Arrays from '../../Arrays';



const Page18 = ( ) => {
    const dispatch = useDispatch();

    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(round18());
        }, []); 
    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(rankingRound18());
        }, []);


        return (
           <Arrays />
            )
        };

export default Page18