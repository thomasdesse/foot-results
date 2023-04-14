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
          teams: [{ name: 'St.Jhonstone', logo: 'https://cdn.sportmonks.com/images/soccer/teams/30/734.png', score: 3 }, { name: 'Targaryen United', logo: 'data:image/jpeg;base64,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', score: 2 }],
        },
        {
          id: 3,
          date: '25 Avril 2021',
          teams: [{ name: 'St.Mirren', logo: 'https://cdn.sportmonks.com/images/soccer/teams/16/496.png', score: 3 }, { name: 'Simpson Family', logo: 'https://www.webstickersmuraux.com/fr/img/asfs1050-png/folder/products-detalle-png/autocollants-donut-de-homer-simpson.png', score: '0' }],
        },
        {
          id: 4,
          date: '26 Avril 2021',
          teams: [{ name: 'Team Rocket', logo: 'data:image/jpeg;base64,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', score: '0' }, { name: 'Livingstone', logo: 'https://cdn.sportmonks.com/images/soccer/teams/2/258.png', score: 1 }],
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