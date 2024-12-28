export const depositMoney = (amount) => {
    console.log("DepositMoney");
    return (dispatch) => {
        dispatch({
            type:"deposit",
            amount: amount
        })
    }
}

export const withdrawlMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type:"withdrawl",
            amount: amount
        })
    }
}