export default class Store {
    private state: { [key: string]: any };
    private reducers: { [key: string]: Function };
    private subscribers: Function[];

    constructor(reducers = {}, initialState = {}){
        this.reducers = reducers;
        this.state = this.reduce(initialState, {});
        this.subscribers = [];
    }

    get value() {
        return this.state;
    }

    subscribe(fn: Function){
        this.subscribers = [...this.subscribers, fn];
        fn(this.value);
        return () => {
            this.subscribers = this.subscribers.filter(sub => sub !== fn);
        }
    }

    dispatch(action: any) {
        this.state = this.reduce(this.state, action);
        this.subscribers.forEach(fn => fn(this.value));
    }

    private reduce(state: any, action: any) {
        const newState = {};
        for(const prop in this.reducers) {
            newState[prop] = this.reducers[prop](state(prop), action);
        }
        return newState;
    }
}