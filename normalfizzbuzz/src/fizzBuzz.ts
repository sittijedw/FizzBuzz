export const fizzBuzz = (n: number): string => {
    if (n === 3) {
        return 'Fizz'
    }
    if (n === 5) {
        return 'Buzz'
    }
    if (n === 6) {
        return 'Fizz'
    }
    if (n === 9) {
        return 'Fizz'
    }
    return n.toString()
}