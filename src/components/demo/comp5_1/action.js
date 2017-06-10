export const actionType = {
    ADD_A: 'ADD_A',
    ADD_B1: 'ADD_B1'
}

export function addA() {
    return {
        type: actionType.ADD_A
    };
}

export function addB1(step) {
    return {
        type: actionType.ADD_B1,
        payload: {
            step
        }
    };
}