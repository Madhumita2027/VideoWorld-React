export const Api_key = 'AIzaSyDEvn8wLRteEAk3wNGJmJt-Sals5j8QhyU'


export const value_converter = (value) => {
    if(value >= 1000000) {
        return Math.floor(value/1000000) + 'M'
    }
    else if(value >= 1000) {
        return Math.floor(value/1000) + 'K'
    }
    else {
        return value
    }
}