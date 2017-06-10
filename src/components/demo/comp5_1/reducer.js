import { actionType } from './action';

// 组件默认存在仓库里的数据
const defaultState = {
    a: 1,
    b: {
        b1: 1,
        b2: 1
    }
};

export default function(state = defaultState, action) {
    switch (action.type) {
        case actionType.ADD_A:
            return {
                ...state,
                a: state.a + 1
            };

        case actionType.ADD_B1:
            return {
                ...state,
                b: {
                    ...state.b,
                    b1: state.b.b1 + action.payload.step
                }
            };
        
        default:
            return state;
    }
}