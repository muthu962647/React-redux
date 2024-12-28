const reducer = (state = 0, action) => {
    switch (action.type) {
        case "deposit": 
        console.log("Hello");
            return state + action.amount;
        case "withdrawl":
            return state - action.amount;
        default:
            return state;
    }
}

export default reducer;