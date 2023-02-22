import { useDispatch } from 'react-redux';


import { round26 } from '../../../actions/results';
import { useEffect } from 'react';
import { rankingRound26 } from '../../../actions/ranking';
import Arrays from '../../Arrays';



const Page26 = ( ) => {
    const dispatch = useDispatch();

    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(round26());
        }, []); 
    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(rankingRound26());
        }, []);


        return (
           <Arrays />
            )
        };

export default Page26