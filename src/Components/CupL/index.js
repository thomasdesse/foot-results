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

const CupL = () => {
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
          teams: [{ name: 'St.Jhonstone', logo: 'https://cdn.sportmonks.com/images/soccer/teams/30/734.png', score: 3 }, { name: 'Targaryen United', logo: 'https://portugal.postsen.com/content/uploads/2022/09/13/d7c01bb38a.jpg', score: 2 }],
        },
        {
          id: 3,
          date: '25 Avril 2021',
          teams: [{ name: 'St.Mirren', logo: 'https://cdn.sportmonks.com/images/soccer/teams/16/496.png', score: 3 }, { name: 'Simpson Family', logo: 'https://www.webstickersmuraux.com/fr/img/asfs1050-png/folder/products-detalle-png/autocollants-donut-de-homer-simpson.png', score: '0' }],
        },
        {
          id: 4,
          date: '26 Avril 2021',
          teams: [{ name: 'Team Rocket', logo: 'https://png.pngitem.com/pimgs/s/74-744292_team-rocket-r-logo-hd-png-download.png', score: '0' }, { name: 'Livingstone', logo: 'https://cdn.sportmonks.com/images/soccer/teams/2/258.png', score: 1 }],
        },
      ],
    },
    {
      title: 'Demi-Finales',
      seeds: [
        {
          id: 1,
          date: '23 Janvier',
          teams: [{ name: 'St.Jhonstone', logo: 'https://cdn.sportmonks.com/images/soccer/teams/30/734.png', score: 3 }, { name: 'Hibernian', logo: 'https://cdn.sportmonks.com/images/soccer/teams/2/66.png', score: 0 }],
        },
        {
          id: 2,
          date: '24 Janvier',
          teams: [{ name: 'Livingstone', logo: 'https://cdn.sportmonks.com/images/soccer/teams/2/258.png', score: 1 }, { name: 'St.Mirren', logo: 'https://cdn.sportmonks.com/images/soccer/teams/16/496.png', score: 0 }],
        },
      ],
    },
    {
      title: 'Finale',
      seeds: [
        {
          id: 2,
          date: '22 Mai 2021',
          teams: [{ name: 'Livingstone', logo: 'https://cdn.sportmonks.com/images/soccer/teams/2/258.png', score: 0 }, { name: 'St.Jhonstone', logo: 'https://cdn.sportmonks.com/images/soccer/teams/30/734.png', score: 1 }],
        },
      ],
    },
  ];

    return (
        <div className='bracket-pl'>
            <Bracket
                rounds={rounds}
                roundTitleComponent={(title: ReactNode, roundIndex: number) => {
                    return <div style={{ textAlign: 'center', color: 'red', fontSize: 25 }}>{title}</div>;
                }}
                renderSeedComponent={CustomSeed}
            />           
        </div>
    )
};

export default CupL;
