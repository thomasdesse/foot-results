import { useDispatch } from 'react-redux';


import { round2 } from '../../../actions/results';
import { useEffect } from 'react';
import { rankingRound2 } from '../../../actions/ranking';
import Arrays from '../../Arrays';



const Page2 = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(round2());
        }, []); 
    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(rankingRound2());
        }, []);


        return (
            <Arrays />
            )
        };


export default Page2