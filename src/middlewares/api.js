import axios from 'axios';
import { 
        RANKING_ROUND1,
        RANKING_ROUND2,
        RANKING_ROUND3,
        RANKING_ROUND4,
        RANKING_ROUND5,
        RANKING_ROUND6,
        RANKING_ROUND7,
        RANKING_ROUND8,
        RANKING_ROUND9,
        RANKING_ROUND10,
        RANKING_ROUND11,
        RANKING_ROUND12,
        RANKING_ROUND13,
        RANKING_ROUND14,
        RANKING_ROUND15,
        RANKING_ROUND16,
        RANKING_ROUND17,
        RANKING_ROUND18,
        RANKING_ROUND19,
        RANKING_ROUND20,
        RANKING_ROUND21,
        RANKING_ROUND22,
        RANKING_ROUND23,
        RANKING_ROUND24,
        RANKING_ROUND25,
        RANKING_ROUND26,
        RANKING_ROUND27,
        RANKING_ROUND28,
        RANKING_ROUND29,
        RANKING_ROUND30,
        RANKING_ROUND31,
        RANKING_ROUND32,
        RANKING_ROUND33,
        RANKING_ROUND34,
        RANKING_ROUND35,
        RANKING_ROUND36,
        RANKING_ROUND37,
        RANKING_ROUND38,
}from '../actions/ranking';
import {
        ROUND_1,
        ROUND_2,
        ROUND_3,
        ROUND_4,
        ROUND_5,
        ROUND_6,
        ROUND_7,
        ROUND_8,
        ROUND_9,
        ROUND_10,
        ROUND_11,
        ROUND_12,
        ROUND_13,
        ROUND_14,
        ROUND_15,
        ROUND_16,
        ROUND_17,
        ROUND_18,
        ROUND_19,
        ROUND_20,
        ROUND_21,
        ROUND_22,
        ROUND_23,
        ROUND_24,
        ROUND_25,
        ROUND_26,
        ROUND_27,
        ROUND_28,
        ROUND_29,
        ROUND_30,
        ROUND_31,
        ROUND_32,
        ROUND_33,
        ROUND_34,
        ROUND_35,
        ROUND_36,
        ROUND_37,
        ROUND_38,
} from '../actions/results';
import { ROUND_ID } from '../actions/rounds';
import { TEAMS } from '../actions/teams';

const token = 'HN9tafzdEG1CsHMnaRHSbRA58orZeRJ3OFBA8yHlrjrZAKMN09Zvpabf2cQS';
//const pageAPI = 2;

const ajax = (store) => (next) => (action) => {
    // attention dans un middleware on ne peut pas utiliser de hooks useEffect, useSelector, useQQCH
    // parce les hooks ne sont utilisables que dans les composants

    if (action.type=== TEAMS) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/teams/season/17141?api_token=${token}`)
      .then((response) => {
        // handle success
        //console.log(response.data.data);
        store.dispatch({
          type:'SAVE_TEAMS',
          teams: response.data.data
        })
        
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== ROUND_ID) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/seasons/17141?api_token=${token}&include=rounds`)
      //https://soccer.sportmonks.com/api/v2.0/seasons/17141?api_token=${token}&include=rounds,fixtures.localTeam,fixtures.visitorTeam,fixtures:limit(6|${pageAPI})`
      //https://soccer.sportmonks.com/api/v2.0/fixtures/16475283?api_token=${token}&include=localTeam,visitorTeam,round,stage
      //https://soccer.sportmonks.com/api/v2.0/rounds/194968?api_token=${token}&include=fixtures
      .then((response) => {
        // handle success
        //console.log(response.data.data.rounds.data);
        store.dispatch({
          type: 'SAVE_ROUNDS',
          //roundId: response.data.data.rounds.data
        })
    
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== ROUND_1) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/rounds/194968?api_token=${token}&include=fixtures.localTeam,fixtures.visitorTeam,fixtures.round`)
  //https://soccer.sportmonks.com/api/v2.0/seasons/17141?api_token=${token}&include=fixtures:limit(6|1)
  //https://soccer.sportmonks.com/api/v2.0/fixtures/between/2020-08-01/2020-08-03?api_token=${token}&include=localTeam,visitorTeam,goals
  //https://soccer.sportmonks.com/api/v2.0/fixtures/194968,194969&api_token=${token}
  //https://soccer.sportmonks.com/api/v2.0/rounds/194968?api_token=${token}&include=fixtures.localTeam,fixtures.visitorTeam
      .then((response) => {
        // handle success
        console.log(response.data.data.fixtures.data);
        store.dispatch({
          type:'SAVE_ROUND1',
          round1: response.data.data.fixtures.data,
          day1: 1
        })
        
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });

    }

    if (action.type=== RANKING_ROUND1) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/standings/season/17141/round/194968?api_token=${token}`)
      //https://soccer.sportmonks.com/api/v2.0/standings/season/17141/round/194968?api_token=${token}
      //https://soccer.sportmonks.com/api/v2.0/standings/season/17141/round/195000?api_token=${token}
      .then((response) => {
        // handle success
        console.log(response.data.data);
        store.dispatch({
          type:'SAVE_RANKINGROUND1',
          standing: response.data.data
        })
        
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== ROUND_2) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/rounds/194969?api_token=${token}&include=fixtures.localTeam,fixtures.visitorTeam,fixtures.round`)
      .then((response) => {
        // handle success
        //console.log(response.data.data);
        store.dispatch({
          type: 'SAVE_ROUND2',
          round2: response.data.data.fixtures.data,
          day2: 2
        })
    
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== RANKING_ROUND2) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/standings/season/17141/round/194969?api_token=${token}`)
      .then((response) => {
        // handle success
        //console.log(response);
        store.dispatch({
          type:'SAVE_RANKINGROUND2',
          standing: response.data.data
        })
        
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== ROUND_3) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/rounds/194970?api_token=${token}&include=fixtures.localTeam,fixtures.visitorTeam,fixtures.round`)
      .then((response) => {
        // handle success
        //console.log(response.data.data);
        store.dispatch({
          type: 'SAVE_ROUND3',
          round3: response.data.data.fixtures.data,
          day3: 3
        })
    
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== RANKING_ROUND3) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/standings/season/17141/round/194970?api_token=${token}`)
      .then((response) => {
        // handle success
        //console.log(response);
        store.dispatch({
          type:'SAVE_RANKINGROUND3',
          standing: response.data.data
        })
        
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== ROUND_4) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/rounds/194971?api_token=${token}&include=fixtures.localTeam,fixtures.visitorTeam,fixtures.round`)
      .then((response) => {
        // handle success
        //console.log(response.data.data);
        store.dispatch({
          type: 'SAVE_ROUND4',
          round4: response.data.data.fixtures.data,
          day4: 4
        })
    
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== RANKING_ROUND4) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/standings/season/17141/round/194971?api_token=${token}`)
      .then((response) => {
        // handle success
        //console.log(response);
        store.dispatch({
          type:'SAVE_RANKINGROUND4',
          standing: response.data.data
        })
        
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== ROUND_5) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/rounds/194972?api_token=${token}&include=fixtures.localTeam,fixtures.visitorTeam,fixtures.round`)
      .then((response) => {
        // handle success
        //console.log(response.data.data);
        store.dispatch({
          type: 'SAVE_ROUND5',
          round5: response.data.data.fixtures.data,
          day5: 5
        })
    
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== RANKING_ROUND5) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/standings/season/17141/round/194972?api_token=${token}`)
      .then((response) => {
        // handle success
        //console.log(response);
        store.dispatch({
          type:'SAVE_RANKINGROUND5',
          standing: response.data.data
        })
        
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== ROUND_6) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/rounds/194973?api_token=${token}&include=fixtures.localTeam,fixtures.visitorTeam,fixtures.round`)
      .then((response) => {
        // handle success
        //console.log(response.data.data);
        store.dispatch({
          type: 'SAVE_ROUND6',
          round6: response.data.data.fixtures.data,
          day6: 6
        })
    
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== RANKING_ROUND6) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/standings/season/17141/round/194973?api_token=${token}`)
      .then((response) => {
        // handle success
        //console.log(response);
        store.dispatch({
          type:'SAVE_RANKINGROUND6',
          standing: response.data.data
        })
        
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== ROUND_7) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/rounds/194974?api_token=${token}&include=fixtures.localTeam,fixtures.visitorTeam,fixtures.round`)
      .then((response) => {
        // handle success
        //console.log(response.data.data);
        store.dispatch({
          type: 'SAVE_ROUND7',
          round7: response.data.data.fixtures.data,
          day7: 7
        })
    
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== RANKING_ROUND7) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/standings/season/17141/round/194974?api_token=${token}`)
      .then((response) => {
        // handle success
        //console.log(response);
        store.dispatch({
          type:'SAVE_RANKINGROUND7',
          standing: response.data.data
        })
        
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== ROUND_8) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/rounds/194975?api_token=${token}&include=fixtures.localTeam,fixtures.visitorTeam,fixtures.round`)
      .then((response) => {
        // handle success
        //console.log(response.data.data);
        store.dispatch({
          type: 'SAVE_ROUND8',
          round8: response.data.data.fixtures.data,
          day8: 8
        })
    
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== RANKING_ROUND8) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/standings/season/17141/round/194975?api_token=${token}`)
      .then((response) => {
        // handle success
        //console.log(response);
        store.dispatch({
          type:'SAVE_RANKINGROUND8',
          standing: response.data.data
        })
        
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== ROUND_9) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/rounds/194976?api_token=${token}&include=fixtures.localTeam,fixtures.visitorTeam,fixtures.round`)
      .then((response) => {
        // handle success
        //console.log(response.data.data);
        store.dispatch({
          type: 'SAVE_ROUND9',
          round9: response.data.data.fixtures.data,
          day9: 9
        })
    
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== RANKING_ROUND9) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/standings/season/17141/round/194976?api_token=${token}`)
      .then((response) => {
        // handle success
        //console.log(response);
        store.dispatch({
          type:'SAVE_RANKINGROUND9',
          standing: response.data.data
        })
        
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== ROUND_10) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/rounds/194977?api_token=${token}&include=fixtures.localTeam,fixtures.visitorTeam,fixtures.round`)
      .then((response) => {
        // handle success
        //console.log(response.data.data);
        store.dispatch({
          type: 'SAVE_ROUND10',
          round10: response.data.data.fixtures.data,
          day10: 10
        })
    
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== RANKING_ROUND10) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/standings/season/17141/round/194977?api_token=${token}`)
      .then((response) => {
        // handle success
        //console.log(response);
        store.dispatch({
          type:'SAVE_RANKINGROUND10',
          standing: response.data.data
        })
        
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== ROUND_11) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/rounds/194978?api_token=${token}&include=fixtures.localTeam,fixtures.visitorTeam,fixtures.round`)
      .then((response) => {
        // handle success
        //console.log(response.data.data);
        store.dispatch({
          type: 'SAVE_ROUND11',
          round11: response.data.data.fixtures.data,
          day11: 11
        })
    
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== RANKING_ROUND11) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/standings/season/17141/round/194978?api_token=${token}`)
      .then((response) => {
        // handle success
        //console.log(response);
        store.dispatch({
          type:'SAVE_RANKINGROUND11',
          standing: response.data.data
        })
        
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== ROUND_12) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/rounds/194979?api_token=${token}&include=fixtures.localTeam,fixtures.visitorTeam,fixtures.round`)
      .then((response) => {
        // handle success
        //console.log(response.data.data);
        store.dispatch({
          type: 'SAVE_ROUND12',
          round12: response.data.data.fixtures.data,
          day12: 12
        })
    
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== RANKING_ROUND12) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/standings/season/17141/round/194979?api_token=${token}`)
      .then((response) => {
        // handle success
        //console.log(response);
        store.dispatch({
          type:'SAVE_RANKINGROUND12',
          standing: response.data.data
        })
        
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== ROUND_13) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/rounds/194980?api_token=${token}&include=fixtures.localTeam,fixtures.visitorTeam,fixtures.round`)
      .then((response) => {
        // handle success
        //console.log(response.data.data);
        store.dispatch({
          type: 'SAVE_ROUND13',
          round13: response.data.data.fixtures.data,
          day13: 13
        })
    
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== RANKING_ROUND13) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/standings/season/17141/round/194980?api_token=${token}`)
      .then((response) => {
        // handle success
        //console.log(response);
        store.dispatch({
          type:'SAVE_RANKINGROUND13',
          standing: response.data.data
        })
        
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== ROUND_14) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/rounds/194981?api_token=${token}&include=fixtures.localTeam,fixtures.visitorTeam,fixtures.round`)
      .then((response) => {
        // handle success
        //console.log(response.data.data);
        store.dispatch({
          type: 'SAVE_ROUND14',
          round14: response.data.data.fixtures.data,
          day14: 14
        })
    
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== RANKING_ROUND14) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/standings/season/17141/round/194981?api_token=${token}`)
      .then((response) => {
        // handle success
        //console.log(response);
        store.dispatch({
          type:'SAVE_RANKINGROUND14',
          standing: response.data.data
        })
        
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== ROUND_15) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/rounds/194982?api_token=${token}&include=fixtures.localTeam,fixtures.visitorTeam,fixtures.round`)
      .then((response) => {
        // handle success
        //console.log(response.data.data);
        store.dispatch({
          type: 'SAVE_ROUND15',
          round15: response.data.data.fixtures.data,
          day15: 15
        })
    
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== RANKING_ROUND15) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/standings/season/17141/round/194982?api_token=${token}`)
      .then((response) => {
        // handle success
        //console.log(response);
        store.dispatch({
          type:'SAVE_RANKINGROUND15',
          standing: response.data.data
        })
        
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== ROUND_16) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/rounds/194983?api_token=${token}&include=fixtures.localTeam,fixtures.visitorTeam,fixtures.round`)
      .then((response) => {
        // handle success
        //console.log(response.data.data);
        store.dispatch({
          type: 'SAVE_ROUND16',
          round16: response.data.data.fixtures.data,
          day16: 16
        })
    
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== RANKING_ROUND16) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/standings/season/17141/round/194983?api_token=${token}`)
      .then((response) => {
        // handle success
        //console.log(response);
        store.dispatch({
          type:'SAVE_RANKINGROUND16',
          standing: response.data.data
        })
        
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== ROUND_17) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/rounds/194984?api_token=${token}&include=fixtures.localTeam,fixtures.visitorTeam,fixtures.round`)
      .then((response) => {
        // handle success
        //console.log(response.data.data);
        store.dispatch({
          type: 'SAVE_ROUND17',
          round17: response.data.data.fixtures.data,
          day17: 17
        })
    
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== RANKING_ROUND17) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/standings/season/17141/round/194984?api_token=${token}`)
      .then((response) => {
        // handle success
        //console.log(response);
        store.dispatch({
          type:'SAVE_RANKINGROUND17',
          standing: response.data.data
        })
        
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== ROUND_18) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/rounds/194985?api_token=${token}&include=fixtures.localTeam,fixtures.visitorTeam,fixtures.round`)
      .then((response) => {
        // handle success
        //console.log(response.data.data);
        store.dispatch({
          type: 'SAVE_ROUND18',
          round18: response.data.data.fixtures.data,
          day18: 18
        })
    
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== RANKING_ROUND18) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/standings/season/17141/round/194985?api_token=${token}`)
      .then((response) => {
        // handle success
        //console.log(response);
        store.dispatch({
          type:'SAVE_RANKINGROUND18',
          standing: response.data.data
        })
        
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== ROUND_19) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/rounds/194986?api_token=${token}&include=fixtures.localTeam,fixtures.visitorTeam,fixtures.round`)
      .then((response) => {
        // handle success
        //console.log(response.data.data);
        store.dispatch({
          type: 'SAVE_ROUND19',
          round19: response.data.data.fixtures.data,
          day19: 19
        })
    
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== RANKING_ROUND19) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/standings/season/17141/round/194986?api_token=${token}`)
      .then((response) => {
        // handle success
        //console.log(response);
        store.dispatch({
          type:'SAVE_RANKINGROUND19',
          standing: response.data.data
        })
        
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== ROUND_20) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/rounds/194987?api_token=${token}&include=fixtures.localTeam,fixtures.visitorTeam,fixtures.round`)
      .then((response) => {
        // handle success
        //console.log(response.data.data);
        store.dispatch({
          type: 'SAVE_ROUND20',
          round20: response.data.data.fixtures.data,
          day20: 20
        })
    
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== RANKING_ROUND20) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/standings/season/17141/round/194987?api_token=${token}`)
      .then((response) => {
        // handle success
        //console.log(response);
        store.dispatch({
          type:'SAVE_RANKINGROUND20',
          standing: response.data.data
        })
        
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== ROUND_21) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/rounds/194988?api_token=${token}&include=fixtures.localTeam,fixtures.visitorTeam,fixtures.round`)
      .then((response) => {
        // handle success
        //console.log(response.data.data);
        store.dispatch({
          type: 'SAVE_ROUND21',
          round21: response.data.data.fixtures.data,
          day21: 21
        })
    
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== RANKING_ROUND21) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/standings/season/17141/round/194988?api_token=${token}`)
      .then((response) => {
        // handle success
        //console.log(response);
        store.dispatch({
          type:'SAVE_RANKINGROUND21',
          standing: response.data.data
        })
        
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== ROUND_22) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/rounds/194989?api_token=${token}&include=fixtures.localTeam,fixtures.visitorTeam,fixtures.round`)
      .then((response) => {
        // handle success
        //console.log(response.data.data);
        store.dispatch({
          type: 'SAVE_ROUND22',
          round22: response.data.data.fixtures.data,
          day22: 22
        })
    
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== RANKING_ROUND22) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/standings/season/17141/round/194989?api_token=${token}`)
      .then((response) => {
        // handle success
        //console.log(response);
        store.dispatch({
          type:'SAVE_RANKINGROUND22',
          standing: response.data.data
        })
        
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== ROUND_23) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/rounds/194990?api_token=${token}&include=fixtures.localTeam,fixtures.visitorTeam,fixtures.round`)
      .then((response) => {
        // handle success
        //console.log(response.data.data);
        store.dispatch({
          type: 'SAVE_ROUND23',
          round23: response.data.data.fixtures.data,
          day23: 23
        })
    
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== RANKING_ROUND23) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/standings/season/17141/round/194990?api_token=${token}`)
      .then((response) => {
        // handle success
        //console.log(response);
        store.dispatch({
          type:'SAVE_RANKINGROUND23',
          standing: response.data.data
        })
        
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== ROUND_24) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/rounds/194991?api_token=${token}&include=fixtures.localTeam,fixtures.visitorTeam,fixtures.round`)
      .then((response) => {
        // handle success
        //console.log(response.data.data);
        store.dispatch({
          type: 'SAVE_ROUND24',
          round24: response.data.data.fixtures.data,
          day24: 24
        })
    
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== RANKING_ROUND24) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/standings/season/17141/round/194991?api_token=${token}`)
      .then((response) => {
        // handle success
        //console.log(response);
        store.dispatch({
          type:'SAVE_RANKINGROUND24',
          standing: response.data.data
        })
        
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== ROUND_25) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/rounds/194992?api_token=${token}&include=fixtures.localTeam,fixtures.visitorTeam,fixtures.round`)
      .then((response) => {
        // handle success
        //console.log(response.data.data);
        store.dispatch({
          type: 'SAVE_ROUND25',
          round25: response.data.data.fixtures.data,
          day25: 25
        })
    
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== RANKING_ROUND25) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/standings/season/17141/round/194992?api_token=${token}`)
      .then((response) => {
        // handle success
        //console.log(response);
        store.dispatch({
          type:'SAVE_RANKINGROUND25',
          standing: response.data.data
        })
        
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== ROUND_26) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/rounds/194993?api_token=${token}&include=fixtures.localTeam,fixtures.visitorTeam,fixtures.round`)
      .then((response) => {
        // handle success
        //console.log(response.data.data);
        store.dispatch({
          type: 'SAVE_ROUND26',
          round26: response.data.data.fixtures.data,
          day26: 26
        })
    
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== RANKING_ROUND26) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/standings/season/17141/round/194993?api_token=${token}`)
      .then((response) => {
        // handle success
        //console.log(response);
        store.dispatch({
          type:'SAVE_RANKINGROUND26',
          standing: response.data.data
        })
        
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== ROUND_27) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/rounds/194994?api_token=${token}&include=fixtures.localTeam,fixtures.visitorTeam,fixtures.round`)
      .then((response) => {
        // handle success
        //console.log(response.data.data);
        store.dispatch({
          type: 'SAVE_ROUND27',
          round27: response.data.data.fixtures.data,
          day27: 27
        })
    
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== RANKING_ROUND27) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/standings/season/17141/round/194994?api_token=${token}`)
      .then((response) => {
        // handle success
        //console.log(response);
        store.dispatch({
          type:'SAVE_RANKINGROUND27',
          standing: response.data.data
        })
        
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== ROUND_28) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/rounds/194995?api_token=${token}&include=fixtures.localTeam,fixtures.visitorTeam,fixtures.round`)
      .then((response) => {
        // handle success
        //console.log(response.data.data);
        store.dispatch({
          type: 'SAVE_ROUND28',
          round28: response.data.data.fixtures.data,
          day28: 28
        })
    
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== RANKING_ROUND28) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/standings/season/17141/round/194995?api_token=${token}`)
      .then((response) => {
        // handle success
        //console.log(response);
        store.dispatch({
          type:'SAVE_RANKINGROUND28',
          standing: response.data.data
        })
        
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== ROUND_29) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/rounds/194996?api_token=${token}&include=fixtures.localTeam,fixtures.visitorTeam,fixtures.round`)
      .then((response) => {
        // handle success
        //console.log(response.data.data);
        store.dispatch({
          type: 'SAVE_ROUND29',
          round29: response.data.data.fixtures.data,
          day29: 29
        })
    
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== RANKING_ROUND29) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/standings/season/17141/round/194996?api_token=${token}`)
      .then((response) => {
        // handle success
        //console.log(response);
        store.dispatch({
          type:'SAVE_RANKINGROUND29',
          standing: response.data.data
        })
        
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== ROUND_30) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/rounds/194997?api_token=${token}&include=fixtures.localTeam,fixtures.visitorTeam,fixtures.round`)
      .then((response) => {
        // handle success
        //console.log(response.data.data);
        store.dispatch({
          type: 'SAVE_ROUND30',
          round30: response.data.data.fixtures.data,
          day30: 30
        })
    
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== RANKING_ROUND30) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/standings/season/17141/round/194997?api_token=${token}`)
      .then((response) => {
        // handle success
        //console.log(response);
        store.dispatch({
          type:'SAVE_RANKINGROUND30',
          standing: response.data.data
        })
        
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== ROUND_31) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/rounds/194998?api_token=${token}&include=fixtures.localTeam,fixtures.visitorTeam,fixtures.round`)
      .then((response) => {
        // handle success
        //console.log(response.data.data);
        store.dispatch({
          type: 'SAVE_ROUND31',
          round31: response.data.data.fixtures.data,
          day31: 31
        })
    
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== RANKING_ROUND31) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/standings/season/17141/round/194998?api_token=${token}`)
      .then((response) => {
        // handle success
        //console.log(response);
        store.dispatch({
          type:'SAVE_RANKINGROUND31',
          standing: response.data.data
        })
        
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== ROUND_32) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/rounds/194999?api_token=${token}&include=fixtures.localTeam,fixtures.visitorTeam,fixtures.round`)
      .then((response) => {
        // handle success
        //console.log(response.data.data);
        store.dispatch({
          type: 'SAVE_ROUND32',
          round32: response.data.data.fixtures.data,
          day32: 32
        })
    
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== RANKING_ROUND32) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/standings/season/17141/round/194999?api_token=${token}`)
      .then((response) => {
        // handle success
        //console.log(response);
        store.dispatch({
          type:'SAVE_RANKINGROUND32',
          standing: response.data.data
        })
        
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== ROUND_33) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/rounds/195000?api_token=${token}&include=fixtures.localTeam,fixtures.visitorTeam,fixtures.round`)
      .then((response) => {
        // handle success
        //console.log(response.data.data);
        store.dispatch({
          type: 'SAVE_ROUND33',
          round33: response.data.data.fixtures.data,
          day33: 33
        })
    
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== RANKING_ROUND33) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/standings/season/17141/round/195000?api_token=${token}`)
      .then((response) => {
        // handle success
        //console.log(response);
        store.dispatch({
          type:'SAVE_RANKINGROUND33',
          standing: response.data.data
        })
        
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== ROUND_34) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/rounds/240674?api_token=${token}&include=fixtures.localTeam,fixtures.visitorTeam,fixtures.round`)
      .then((response) => {
        // handle success
        console.log(response.data.data.fixtures.data);
        store.dispatch({
          type: 'SAVE_ROUND34',
          round34: response.data.data.fixtures.data,
          day34: 34
        })
    
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== RANKING_ROUND34) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/standings/season/17141/round/240674?api_token=${token}`)
      .then((response) => {
        // handle success
        console.log(response);
        store.dispatch({
          type:'SAVE_RANKINGROUND34',
          standing: response.data.data
        })
        
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== ROUND_35) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/rounds/240675?api_token=${token}&include=fixtures.localTeam,fixtures.visitorTeam,fixtures.round`)
      .then((response) => {
        // handle success
        //console.log(response.data.data.fixtures.data);
        store.dispatch({
          type: 'SAVE_ROUND35',
          round35: response.data.data.fixtures.data,
          day35: 35
        })
    
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== RANKING_ROUND35) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/standings/season/17141/round/240675?api_token=${token}`)
      .then((response) => {
        // handle success
        //console.log(response.data.data);
        store.dispatch({
          type:'SAVE_RANKINGROUND35',
          standing: response.data.data
        })
        
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== ROUND_36) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/rounds/240676?api_token=${token}&include=fixtures.localTeam,fixtures.visitorTeam,fixtures.round`)
      .then((response) => {
        // handle success
        //console.log(response.data.data);
        store.dispatch({
          type: 'SAVE_ROUND36',
          round36: response.data.data.fixtures.data,
          day36: 36
        })
    
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== RANKING_ROUND36) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/standings/season/17141/round/240676?api_token=${token}`)
      .then((response) => {
        // handle success
        //console.log(response);
        store.dispatch({
          type:'SAVE_RANKINGROUND36',
          standing: response.data.data
        })
        
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== ROUND_37) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/rounds/240677?api_token=${token}&include=fixtures.localTeam,fixtures.visitorTeam,fixtures.round`)
      .then((response) => {
        // handle success
        //console.log(response.data.data);
        store.dispatch({
          type: 'SAVE_ROUND37',
          round37: response.data.data.fixtures.data,
          day37: 37
        })
    
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== RANKING_ROUND37) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/standings/season/17141/round/240677?api_token=${token}`)
      .then((response) => {
        // handle success
        //console.log(response);
        store.dispatch({
          type:'SAVE_RANKINGROUND37',
          standing: response.data.data
        })
        
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== ROUND_38) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/rounds/240678?api_token=${token}&include=fixtures.localTeam,fixtures.visitorTeam,fixtures.round`)
      .then((response) => {
        // handle success
        console.log(response.data.data.fixtures.data);
        store.dispatch({
          type: 'SAVE_ROUND38',
          round38: response.data.data.fixtures.data,
          day38: 38
        })
    
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    if (action.type=== RANKING_ROUND38) {
      axios.get(`https://soccer.sportmonks.com/api/v2.0/standings/season/17141/round/240678?api_token=${token}`)
      .then((response) => {
        // handle success
        console.log(response);
        store.dispatch({
          type:'SAVE_RANKINGROUND38',
          standing: response.data.data
        })
        
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    }

    next(action); // dans tous les cas je laisse passer l'action
  };
  
  export default ajax;