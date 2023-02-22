import { useDispatch } from 'react-redux';


import { round5 } from '../../../actions/results';
import { useEffect } from 'react';
import { rankingRound5 } from '../../../actions/ranking';
import Arrays from '../../Arrays';



const Page5 = ( ) => {
    const dispatch = useDispatch();

    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(round5());
        }, []); 
    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(rankingRound5());
        }, []);


        return (
           <Arrays />
            )
        };

export default Page5