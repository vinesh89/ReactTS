export const initialState = {
    data: [],
    loaded: false,
    loading: false,
}

function partsReducer(state = initialState, action: { type: string, payload: any }){
    switch (action.type) {
        case 'ADD_PART': {
            const part = action.payload;
            const data = [...state.data, part];
            return{
                ...state,
                data,
            };
        }
    }

    return state;
}

export default {parts: partsReducer};
