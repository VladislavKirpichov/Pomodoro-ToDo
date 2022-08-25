const defaultState = [
    {
        id: 1,
        header: "Hello world",
        description: "This is test task"
    }
]

export const taskReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return {...state.push(action.task)};
        default:
            return state;
    }
}