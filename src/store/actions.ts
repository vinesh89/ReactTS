export const ADD_PART = "ADD_PART";

export interface AddPart {
    type: string;
    payload?: any;
}

const addPartAction = (payload: any): AddPart => ({
    type: ADD_PART,
    payload
});

export default addPartAction;