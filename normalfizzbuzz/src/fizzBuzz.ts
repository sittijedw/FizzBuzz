export const fizzBuzz = (n: number): string => {
    if (n%3 === 0) {
        return 'Fizz'
    }
    if (n === 5) {
        return 'Buzz'
    }
    return n.toString()
}