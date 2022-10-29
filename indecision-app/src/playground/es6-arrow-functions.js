const user = {
    name: 'Seb',
    cities: ['Manila', 'New York', 'Makati'],

    printPlacesLived() {
        return this.cities.map((city) => {
            return city + '!'
        })
    }
};

console.log(user.printPlacesLived())

