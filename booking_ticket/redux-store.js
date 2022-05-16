//Actions Creators

//Person who is submitting the form
const newBooking = (name, amount) => {
   return {
       type: 'NEW_BOOKING',
       payload: { name, amount }
   }
}

const cancelBooking = (name, refundAmount) => {
    return {
        type: 'CANCEL_BOOKING',
        payload: { name, refundAmount }
    }
}

//Reducers

const reservationHistory = (oldReservationList = [], action) => {
    if (action.type === "NEW_BOOKING") {
        return [
            ...oldReservationList,
            action.payload
        ]
    }else if(action.type === "CANCEL_BOOKING"){
        return oldReservationList.filter(record => {
            return record.name !== action.payload.name
        })
    }

    return oldReservationList;
}

const cancallationHistory = (oldCancallationList = [], action) => {
    if(action.type === "CANCEL_BOOKING"){
        return [...oldCancallationList, action.payload]
    }

    return oldCancallationList;
}

const accounting = (totalMoney = 0, action) => {
    if (action.type === "NEW_BOOKING") {
        return totalMoney + action.payload.amount
    }else if(action.type === "CANCEL_BOOKING"){
        return totalMoney - action.payload.refundAmount
    }

    return totalMoney;
}


//Redux store
console.log(Redux)
const { createStore, combineReducers } = Redux;

const railwayCentralStore = combineReducers({
    accounting: accounting,
    reservationHistory: reservationHistory,
    cancallationHistory: cancallationHistory,
})

const store = createStore(railwayCentralStore)



store.dispatch(newBooking("Zamzam", 20));
store.dispatch(newBooking("Alex", 10));
store.dispatch(cancelBooking("Zamzam", 10));




console.log(store.getState())