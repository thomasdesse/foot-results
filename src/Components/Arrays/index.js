import { useSelector } from 'react-redux';
import { Table } from 'semantic-ui-react'
import ArrayResults from './ArrayResults';
import Ranking from './ArrayRanking';
import PopupInfo from '../Popup';

import './styles.scss';


const Arrays = () => {
    
        const results = useSelector((state) => state.season.resultsRound);
        const standing = useSelector((state) => state.season.standing);
        const round = useSelector((state) => state.season.day);

        return (
            <div>
                <PopupInfo />
                <div className= "results">
                    <div className="results-round"><div className="results-title">Résultats</div>
                        <Table celled fixed singleLine>
                            <Table.Header>
                            <Table.Row>
                            <Table.HeaderCell colSpan='3'>journée {round}</Table.HeaderCell>
                            </Table.Row>
                            </Table.Header>

                            {results.map((currentResults) => (
                            <ArrayResults
                            key={currentResults.id}
                            round={currentResults.round.data.name}
                            localTeam={currentResults.localTeam.data.name}
                            visitorTeam={currentResults.visitorTeam.data.name}
                            result={currentResults.scores.ft_score}
                            teamLocalLogo={currentResults.localTeam.data.logo_path}
                            teamVisitorLogo={currentResults.visitorTeam.data.logo_path}
                            />
                            ))}  
                        </Table>
                    </div>

                <div className="results-ranking"><div className="results-title">Classement</div>
                <Table celled fixed singleLine unstackable className="tableRank">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>position</Table.HeaderCell>
                            <Table.HeaderCell>Equipe</Table.HeaderCell>
                            <Table.HeaderCell>Points</Table.HeaderCell>
                            <Table.HeaderCell>journée</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>
        
                    {standing.map((currentStanding) => (
                        <Ranking
                        key={currentStanding.team_id}
                        position={currentStanding.position}
                        teamName={currentStanding.team_name}
                        teamLogo={currentStanding.team_logo}
                        points={currentStanding.points}
                        round={round}
                        />
                    ))
                    
                    /*standing.map((currentStanding) => (
                        <Ranking
                        key={currentStanding.team_id}
                        position={currentStanding.position}
                        teamName={currentStanding.team_name}
                        teamLogo={currentStanding.team_logo}
                        points={currentStanding.points}
                        round={round}
                        />
                    ))*/} 
                </Table>          
                </div>
            </div>
            </div>
            
            )
        };

        export default Arrays