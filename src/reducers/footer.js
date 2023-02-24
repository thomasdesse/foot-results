export const initialState ={
    footer: false,
};

const footerReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'TOGGLE_MENU':
            return {
            ...state,
            footer: !state.menu
        };

        case 'CLOSE_MENU':
            return {
            ...state,
            footer: false
        };

        default:
            return state;
  }
}

export default footerReducer;