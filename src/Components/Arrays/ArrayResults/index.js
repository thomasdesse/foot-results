
import { Table, Image } from 'semantic-ui-react'

import './styles.scss';



const ArrayResults = ( { localTeam, visitorTeam, result,round, teamLocalLogo, teamVisitorLogo } ) => {
    return (
        <Table.Body>
            <Table.Row >       
                <Table.Cell><Image src={teamLocalLogo} rounded size='mini'/>{localTeam}<br /></Table.Cell>            
                <Table.Cell className="table-cellResult" textAlign='center'>{result}</Table.Cell>
                <Table.Cell textAlign= 'left'><Image src={teamVisitorLogo} rounded size='mini'/>{visitorTeam}</Table.Cell>
            </Table.Row>
        </Table.Body>
    );      
}
    


export default ArrayResults;