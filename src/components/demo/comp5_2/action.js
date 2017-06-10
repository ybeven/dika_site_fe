export const actionType = {
    ADD_NUM: 'ADD_NUM',
    ADD_OBJ1: 'ADD_OBJ1'
}

export function addNum() {
    return {
        type: actionType.ADD_NUM
    };
}

export function addObj1(step) {
    return {
        type: actionType.ADD_OBJ1,
        payload: {
            step
        }
    };
}