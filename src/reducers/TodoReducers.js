import type from '../constants/ActionTypes'

const initalState = [{
    text: "Use Redux",
    marked: false,
    id: 0
}]

export default function todo(state = initalState, action) {
    switch (action.type) {
        case type.ADD_TODO: 
            return [{
                id: (state.length === 0) ? 0 : state[0].id +1,
                marked: false,
                text: action.text
            }, ...state];
        case type.DELETE_TODO: 
            return state.filter((todo) => todo.id !== action.id)
        case type.EDIT_TODO:
            return state.map((todo) => todo.id === action.id ? { ...todo, text: action.text } : todo);

        case type.MARK_TODO:
            return state.map((todo) => todo.id === action.id ? { ...todo, marked: !todo.marked } : todo);

        case type.MARK_ALL:
            const areAllMarked = state.every((todo) => todo.marked);
            return state.map((todo) => ({...todo, marked: !areAllMarked}));

        case type.CLEAR_MARKED:
            return state.filter((todo) => todo.marked === false);

        default:
            return state;
    }
}