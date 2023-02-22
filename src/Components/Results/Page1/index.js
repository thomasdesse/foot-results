import { useDispatch } from 'react-redux';
import { round1 } from '../../../actions/results';
import { useEffect } from 'react';
import { rankingRound1 } from '../../../actions/ranking';
import Arrays from '../../Arrays';



const Page1 = ( ) => {
    const dispatch = useDispatch();

    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(round1());
        }, []); 
    useEffect(() => {
        //utilisation action creator qui est une fonction qui retourne l objet action
            dispatch(rankingRound1());
        }, []);


        return (
            <div>
                <Arrays />
            </div>
            )
        };

export default Page1