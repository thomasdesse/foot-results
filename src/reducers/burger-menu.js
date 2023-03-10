export const initialState ={
    menu: false,
    footer: true,
};

const burgerReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'TOGGLE_MENU':
            return {
            ...state,
            menu: !state.menu,
            footer: !state.footer
        };

        case 'CLOSE_MENU':
            return {
            ...state,
            menu: false,
            footer: true
        };

        default:
            return state;
  }
}

export default burgerReducer;