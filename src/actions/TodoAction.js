import type from '../constants/ActionTypes'

export function addTodo(text) {
    return {
        type: type.ADD_TODO,
        text
    }
}

export function deleteTodo(id) {
    return {
        type: type.DELETE_TODO,
        id
    }
}

export function editTodo(id, text) {
    return {
        type: type.EDIT_TODO,
        id,
        text
    };
}

export function markTodo(id) {
    return {
        type: type.MARK_TODO,
        id
    };
}

export function markAll() {
    return {
        type: type.MARK_ALL
    };
}

export function clearMarked() {
    return {
        type: type.CLEAR_MARKED
    };
}
