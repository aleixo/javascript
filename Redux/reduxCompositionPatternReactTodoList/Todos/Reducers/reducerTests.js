const testAddTodo = () => {
    const stateBefore = [];
    const action = {
        type: 'ADD_TODO',
        id: 0,
        text: 'My todo'
    }

    const stateAfter = [
        {
            id: 0,
            text: 'My todo',
            completed: false
        }
    ]

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        todosReducer.todos(stateBefore, action)
    ).toEqual(stateAfter);
}

const testToggleTodo = () => {
    const stateBefore = [
        {
            id: 0,
            text: 'My todo',
            completed: false
        },{
            id: 1,
            text: 'My toggled todo',
            completed: false
        }
    ]

    const action = {
        type: 'TOGGLE_TODO',
        id: 1,
        text: 'My toggled todo'
    }

    const stateAfter = [
        {
            id: 0,
            text: 'My todo',
            completed: false
        },{
            id: 1,
            text: 'My toggled todo',
            completed: true
        }
    ]

    deepFreeze(stateBefore);
    deepFreeze(stateAfter);

    expect(
        todosReducer.todos(stateBefore, action)
    ).toEqual(stateAfter);
}