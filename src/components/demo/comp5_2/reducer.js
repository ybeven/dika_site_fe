import { actionType } from './action';

// 组件默认存在仓库里的数据
const defaultState = {
    num: 100,
    obj: {
        obj1: 100,
        obj2: 100
    }
};

export default function(state = defaultState, action) {
    switch (action.type) {
        case actionType.ADD_NUM:
            return {
                ...state,
                num: state.num + 1
            };

        case actionType.ADD_OBJ1:
            return {
                ...state,
                obj: {
                    ...state.obj,
                    obj1: state.obj.obj1 + action.payload.step
                }
            };
        
        default:
            return state;
    }
}