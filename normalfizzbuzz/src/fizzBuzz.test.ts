import { fizzBuzz } from 'fizzBuzz'

describe('FizzBuzz', () => {
    it('n = 1 should return 1', () => {
        const n: number = 1

        const result: string = fizzBuzz(n)

        expect(result).toEqual('1')
    })

    it('n = 2 should return 2', () => {
        const n: number = 2

        const result: string = fizzBuzz(n)

        expect(result).toEqual('2')
    })

    it('n = 3 should return Fizz', () => {
        const n:number = 3

        const result: string = fizzBuzz(n)

        expect(result).toEqual('Fizz')
    })

    it('n = 4 should return 4', () => {
        const n:number = 4

        const result: string = fizzBuzz(n)

        expect(result).toEqual('4')
    })

    it('n = 5 should return Buzz', () => {
        const n:number = 5

        const result: string = fizzBuzz(n)

        expect(result).toEqual('Buzz')
    })

    it('n = 6 should return Fizz', () => {
        const n:number = 6

        const result: string = fizzBuzz(n)

        expect(result).toEqual('Fizz')
    })

    it('n = 7 should return 7', () => {
        const n: number = 7

        const result: string = fizzBuzz(n)

        expect(result).toEqual('7')
    })

    it('n = 8 should return 8', () => {
        const n:number = 8

        const result: string = fizzBuzz(n)

        expect(result).toEqual('8')
    })

    it('n = 9 should return Fizz', () => {
        const n:number = 9

        const result: string = fizzBuzz(n)

        expect(result).toEqual('Fizz')
    })
})