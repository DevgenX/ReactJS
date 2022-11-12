import moment from 'moment'

// get visible expenses based on filters
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true 
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            // if a is less than b, we return the most recent
            return a.createdAt < b.createdAt ? 1 : -1
        }else if (sortBy === 'amount') {
            // if a amount is less than b the truthy will return b first
            return a.amount < b.amount ? 1 : -1
        }
    });
}
