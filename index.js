const CAKE_ORDERED = 'CAKE_ORDERED'

// an action is an object with a type property
// an action creator is a function that returns an object


function orderCake(){
    return{
    
            type : CAKE_ORDERED,
            quantity : 1
    }
}
