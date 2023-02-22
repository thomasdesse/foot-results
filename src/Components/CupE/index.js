//import PropTypes from 'prop-types';
import './styles.scss';
import { Bracket, RoundProps, Seed, SeedItem, SeedTeam, RenderSeedProps } from 'react-brackets';
//import React from 'react';



  const CustomSeed = ({seed, breakpoint }: RenderSeedProps) => {
    // breakpoint passed to Bracket component
    // to check if mobile view is triggered or not
  
    // mobileBreakpoint is required to be passed down to a seed
    return (
      <Seed mobileBreakpoint={breakpoint} style={{ fontSize: 12 }}>
        <SeedItem className='seedBox'>
          <div className='seedBoxTeam'>
            <SeedTeam><img className='imgLogo' src= {seed.teams[0].logo} alt=""/>{seed.teams[0]?.name || 'NO TEAM '}</SeedTeam>
            <SeedTeam><img className='imgLogo' src= {seed.teams[1].logo} alt=""/>{seed.teams[1]?.name || 'NO TEAM '}</SeedTeam>
          </div>
          <div className='seedBoxScore'>
            <SeedTeam className='seedBoxScoreItem'>{seed.teams[0].score}</SeedTeam>
            <SeedTeam className='seedBoxScoreItem'>{seed.teams[1].score}</SeedTeam>
            
          </div>
        </SeedItem>
      </Seed>
    );
  };

const CupE = () => {
  //const logo = useSelector((state) => state.season.teams);
  //console.log(logo);
  const rounds: RoundProps[] = [
    {
      title: 'Quarts de Finale',
      seeds: [
        {
          id: 1,
          date: '24 Avril 2021',
          teams: [{ name: 'Hibernian', logo: 'https://cdn.sportmonks.com/images/soccer/teams/2/66.png', score: '2(tab 4)' }, { name: 'Motherwell', logo: 'https://cdn.sportmonks.com/images/soccer/teams/21/309.png', score: '2(tab2)' }],
        },
        {
          id: 2,
          date: '25 Avril 2021',
          teams: [{ name: 'Aberdeen', logo: 'https://cdn.sportmonks.com/images/soccer/teams/17/273.png', score: 0 }, { name: 'Dundee United', logo: 'https://cdn.sportmonks.com/images/soccer/teams/26/282.png', score: 3 }],
        },
        {
          id: 3,
          date: '25 Avril 2021',
          teams: [{ name: 'Rangers', logo: 'https://cdn.sportmonks.com/images/soccer/teams/30/62.png', score: '1(2tab)' }, { name: 'St.Jhonstone', logo: 'https://cdn.sportmonks.com/images/soccer/teams/30/734.png', score: '1(4tab)' }],
        },
        {
          id: 4,
          date: '26 Avril 2021',
          teams: [{ name: 'Kilmarnock', logo: 'https://cdn.sportmonks.com/images/soccer/teams/20/180.png', score: '3(4tab)' }, { name: 'St.Mirren', logo: 'https://cdn.sportmonks.com/images/soccer/teams/16/496.png', score: '3(5tab)' }],
        },
      ],
    },
    {
      title: 'Demi-Finales',
      seeds: [
        {
          id: 4,
          date: '8 Mai 2021',
          teams: [{ name: 'Dundee United', logo: 'https://cdn.sportmonks.com/images/soccer/teams/26/282.png', score: 0 }, { name: 'Hibernian', logo: 'https://cdn.sportmonks.com/images/soccer/teams/2/66.png', score: 2 }],
        },
        {
          id: 5,
          date: '9 Mai 2021',
          teams: [{ name: 'St.Mirren', logo: 'https://cdn.sportmonks.com/images/soccer/teams/16/496.png', score: 1 }, { name: 'St.Jhonstone', logo: 'https://cdn.sportmonks.com/images/soccer/teams/30/734.png', score: 2 }],
        },
      ],
    },
    {
      title: 'Finale',
      seeds: [
        {
          id: 5,
          date: '22 Mai 2021',
          teams: [{ name: 'St.Jhonstone', logo: 'https://cdn.sportmonks.com/images/soccer/teams/30/734.png', score: 1 }, { name: 'Hibernian', logo: 'https://cdn.sportmonks.com/images/soccer/teams/2/66.png', score: 0 }],
        },
      ],
    },
  ];

    return (
        <div className='bracket'>
            <Bracket className='bracket-content'
                rounds={rounds}
                roundTitleComponent={(title: ReactNode, roundIndex: number) => {
                    return <div style={{ textAlign: 'center', color: 'red', fontSize: 25 }}>{title}</div>;
                }}
                renderSeedComponent={CustomSeed}
            />
            
        </div>
    )
};

export default CupE;
