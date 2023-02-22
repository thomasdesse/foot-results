import { Table, Image } from 'semantic-ui-react'

import './styles.scss';

//import PropTypes from 'prop-types';



const Ranking = ({ position, teamName, teamLogo, points, round }) => {
    let colorRanking = false;
    if (position < 7) {
    colorRanking = true;
    }
    
    return (
        <Table.Body>
            <Table.Row className={`row ${colorRanking ? "rowTop" : "rowBottom"}`}>
                <Table.Cell textAlign='center'>{position}</Table.Cell>
                <Table.Cell ><Image src={teamLogo} rounded size='mini'/>{teamName}</Table.Cell>
                <Table.Cell textAlign='center'>{points}</Table.Cell>
                <Table.Cell textAlign='center'>{round}</Table.Cell>
            </Table.Row>          
        </Table.Body>
        ) 
    };



export default Ranking;