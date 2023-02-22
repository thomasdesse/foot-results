import { useDispatch } from 'react-redux';


import { round8 } from '../../../actions/results';
import { useEffect } from 'react';
import { rankingRound8 } from '../../../actions/ranking';
import Arrays from '../../Arrays';



const Page8 = ( ) => {
    const dispatch = useDispatch();

    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(round8());
        }, []); 
    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(rankingRound8());
        }, []);


        return (
           <Arrays />
            )
        };

export default Page8