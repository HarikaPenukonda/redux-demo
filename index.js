const redux = require('redux')
const createStore = redux.createStore

const CAKE_ORDERED = 'CAKE_ORDERED'

// an action is an object with a type property
// an action creator is a function that returns an object


function orderCake(){
    return{
    
            type : CAKE_ORDERED,
            quantity : 1
    }
}

const initialState = {
    numberOfCakes : 10,
    anotherProperty : 0
}
//(previousState,action) => newState
const reducer = (state = initialState, action) =>{
    switch(action.type){
        case CAKE_ORDERED :
            return{
                ...state,
                numberOfCakes : state.numberOfCakes - 1,
            }
        default :
            return state
    }

}
// Holds application state
const store = createStore(reducer)
// Allows access to state via getState()
console.log("Initial State", store.getState())
// Register listeners via subscribe(listeners)
const unsubscribe = store.subscribe(()=>console.log("Updated state",store.getState()))
// Allows state to be updated via dispatch(action)
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
// Handles unregistering of listeners via a function returned by subscribe(listener)
unsubscribe()