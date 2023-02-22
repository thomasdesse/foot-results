export const initialState = {

  teams: [],
  standing: [],
  resultsRound: [],
  rounds: [],
  day: 0,
  media: true
};

const seasonReducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case 'SAVE_TEAMS':
        return {
          ...state,
          teams: action.teams,
        };

    case 'SAVE_ROUNDS':
        return {
          ...state,
          rounds: action.roundId
        };

    case 'SAVE_ROUND1':
        return {
          ...state,
          resultsRound: action.round1,
          day: action.day1
        };
      
    case 'SAVE_RANKINGROUND1':
        return {
          ...state,
          standing: action.standing
        };

    case 'SAVE_ROUND2':
        return {
          ...state,
          resultsRound: action.round2,
          day: action.day2
        };
        
    case 'SAVE_RANKINGROUND2':
        return {
          ...state,
          standing: action.standing
        };   
          
    case 'SAVE_ROUND3':
      return {
        ...state,
        resultsRound: action.round3,
        day: action.day3
      };
      
    case 'SAVE_RANKINGROUND3':
        return {
          ...state,
          standing: action.standing
        };

    case 'SAVE_ROUND4':
        return {
          ...state,
          resultsRound: action.round4,
          day: action.day4
        };
      
    case 'SAVE_RANKINGROUND4':
        return {
          ...state,
          standing: action.standing
        };

    case 'SAVE_ROUND5':
      return {
        ...state,
        resultsRound: action.round5,
        day: action.day5
      };
    
    case 'SAVE_RANKINGROUND5':
      return {
        ...state,
        standing: action.standing
      };

    case 'SAVE_ROUND6':
      return {
        ...state,
        resultsRound: action.round6,
        day: action.day6
      };
    
    case 'SAVE_RANKINGROUND6':
      return {
        ...state,
        standing: action.standing
      };

    case 'SAVE_ROUND7':
      return {
        ...state,
        resultsRound: action.round7,
        day: action.day7
      };
    
    case 'SAVE_RANKINGROUND7':
      return {
        ...state,
        standing: action.standing
      };

    case 'SAVE_ROUND8':
      return {
        ...state,
        resultsRound: action.round8,
        day: action.day8
      };
    
    case 'SAVE_RANKINGROUND8':
      return {
        ...state,
        standing: action.standing
      };

    case 'SAVE_ROUND9':
      return {
        ...state,
        resultsRound: action.round9,
        day: action.day9
      };
    
    case 'SAVE_RANKINGROUND9':
      return {
        ...state,
        standing: action.standing
      };

    case 'SAVE_ROUND10':
      return {
        ...state,
        resultsRound: action.round10,
        day: action.day10
      };
    
    case 'SAVE_RANKINGROUND10':
      return {
        ...state,
        standing: action.standing
      };

    case 'SAVE_ROUND11':
      return {
        ...state,
        resultsRound: action.round11,
        day: action.day11
      };
    
    case 'SAVE_RANKINGROUND11':
      return {
        ...state,
        standing: action.standing
      };

    case 'SAVE_ROUND12':
      return {
        ...state,
        resultsRound: action.round12,
        day: action.day12
      };
    
    case 'SAVE_RANKINGROUND12':
      return {
        ...state,
        standing: action.standing
      };

    case 'SAVE_ROUND13':
      return {
        ...state,
        resultsRound: action.round13,
        day: action.day13
      };
    
    case 'SAVE_RANKINGROUND13':
      return {
        ...state,
        standing: action.standing
      };

    case 'SAVE_ROUND14':
      return {
        ...state,
        resultsRound: action.round14,
        day: action.day14
      };
    
    case 'SAVE_RANKINGROUND14':
      return {
        ...state,
        standing: action.standing
      };

    case 'SAVE_ROUND15':
      return {
        ...state,
        resultsRound: action.round15,
        day: action.day15
      };
    
    case 'SAVE_RANKINGROUND15':
      return {
        ...state,
        standing: action.standing
      };

    case 'SAVE_ROUND16':
      return {
        ...state,
        resultsRound: action.round16,
        day: action.day16
      };
    
    case 'SAVE_RANKINGROUND16':
      return {
        ...state,
        standing: action.standing
      };

    case 'SAVE_ROUND17':
        return {
          ...state,
          resultsRound: action.round17,
          day: action.day17
        };
      
    case 'SAVE_RANKINGROUND17':
      return {
        ...state,
        standing: action.standing
      }; 
      
    case 'SAVE_ROUND18':
      return {
        ...state,
        resultsRound: action.round18,
        day: action.day18
      };
    
    case 'SAVE_RANKINGROUND18':
      return {
        ...state,
        standing: action.standing
      }; 
      
    case 'SAVE_ROUND19':
      return {
        ...state,
        resultsRound: action.round19,
        day: action.day19
      };
    
    case 'SAVE_RANKINGROUND19':
      return {
        ...state,
        standing: action.standing
      }; 
      
    case 'SAVE_ROUND20':
      return {
        ...state,
        resultsRound: action.round20,
        day: action.day20
      };
    
    case 'SAVE_RANKINGROUND20':
      return {
        ...state,
        standing: action.standing
      }; 
      
    case 'SAVE_ROUND21':
      return {
        ...state,
        resultsRound: action.round21,
        day: action.day21
      };
    
    case 'SAVE_RANKINGROUND21':
      return {
        ...state,
        standing: action.standing
      }; 
      
    case 'SAVE_ROUND22':
      return {
        ...state,
        resultsRound: action.round22,
        day: action.day22
      };
    
    case 'SAVE_RANKINGROUND22':
      return {
        ...state,
        standing: action.standing
      }; 
      
    case 'SAVE_ROUND23':
      return {
        ...state,
        resultsRound: action.round23,
        day: action.day23
      };
    
    case 'SAVE_RANKINGROUND23':
      return {
        ...state,
        standing: action.standing
      }; 
      
    case 'SAVE_ROUND24':
      return {
        ...state,
        resultsRound: action.round24,
        day: action.day24
      };
    
    case 'SAVE_RANKINGROUND24':
      return {
        ...state,
        standing: action.standing
      }; 
      
    case 'SAVE_ROUND25':
      return {
        ...state,
        resultsRound: action.round25,
        day: action.day25
      };
    
    case 'SAVE_RANKINGROUND25':
      return {
        ...state,
        standing: action.standing
      }; 
      
    case 'SAVE_ROUND26':
      return {
        ...state,
        resultsRound: action.round26,
        day: action.day26
      };
    
    case 'SAVE_RANKINGROUND26':
      return {
        ...state,
        standing: action.standing
      }; 
      
    case 'SAVE_ROUND27':
      return {
        ...state,
        resultsRound: action.round27,
        day: action.day27
      };
    
    case 'SAVE_RANKINGROUND27':
      return {
        ...state,
        standing: action.standing
      }; 
      
    case 'SAVE_ROUND28':
      return {
        ...state,
        resultsRound: action.round28,
        day: action.day28
      };
    
    case 'SAVE_RANKINGROUND28':
      return {
        ...state,
        standing: action.standing
      }; 
      
    case 'SAVE_ROUND29':
      return {
        ...state,
        resultsRound: action.round29,
        day: action.day29
      };
    
    case 'SAVE_RANKINGROUND29':
      return {
        ...state,
        standing: action.standing
      }; 
      
    case 'SAVE_ROUND30':
      return {
        ...state,
        resultsRound: action.round30,
        day: action.day30
      };
    
    case 'SAVE_RANKINGROUND30':
      return {
        ...state,
        standing: action.standing
      }; 
      
    case 'SAVE_ROUND31':
      return {
        ...state,
        resultsRound: action.round31,
        day: action.day31
      };
    
    case 'SAVE_RANKINGROUND31':
      return {
        ...state,
        standing: action.standing
      }; 
      
    case 'SAVE_ROUND32':
      return {
        ...state,
        resultsRound: action.round32,
        day: action.day32
      };
    
    case 'SAVE_RANKINGROUND32':
      return {
        ...state,
        standing: action.standing
      }; 
      
    case 'SAVE_ROUND33':
      return {
        ...state,
        resultsRound: action.round33,
        day: action.day33
      };
    
    case 'SAVE_RANKINGROUND33':
      return {
        ...state,
        standing: action.standing
      };

    case 'SAVE_ROUND34':
      return {
        ...state,
        resultsRound: action.round34,
        day: action.day34
      };
    
    case 'SAVE_RANKINGROUND34':
      return {
        ...state,
        standing: action.standing
      };

    case 'SAVE_ROUND35':
      return {
        ...state,
        resultsRound: action.round35,
        day: action.day35
      };
    
    case 'SAVE_RANKINGROUND35':
      return {
        ...state,
        standing: action.standing
      };

    case 'SAVE_ROUND36':
      return {
        ...state,
        resultsRound: action.round36,
        day: action.day36
      };
    
    case 'SAVE_RANKINGROUND36':
      return {
        ...state,
        standing: action.standing
      };

    case 'SAVE_ROUND37':
      return {
        ...state,
        resultsRound: action.round37,
        day: action.day37
      };
    
    case 'SAVE_RANKINGROUND37':
      return {
        ...state,
        standing: action.standing
      };

    case 'SAVE_ROUND38':
      return {
        ...state,
        resultsRound: action.round38,
        day: action.day38
      };
    
    case 'SAVE_RANKINGROUND38':
      return {
        ...state,
        standing: action.standing
      };

    case 'MEDIA':
      return {
        ...state,
        media: action.value
      }

    case 'NEW-MEDIA':
      return {
        ...state,
        media: action.value
      }

    default:
      return state;
  }
};

export default seasonReducer;
