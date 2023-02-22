export const initialState ={
    menu: false,
};

const burgerReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'TOGGLE_MENU':
            return {
            ...state,
            menu: !state.menu
        };

        case 'CLOSE_MENU':
            return {
            ...state,
            menu: false
        };

        default:
            return state;
  }
}

export default burgerReducer;