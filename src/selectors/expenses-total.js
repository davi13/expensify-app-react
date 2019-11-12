
export default (expenses) => {

    return expenses
        .map(e => e.amount)
        .reduce((sum, value) => sum + value, 0)

}