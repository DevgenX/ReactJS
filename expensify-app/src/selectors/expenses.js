
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
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
