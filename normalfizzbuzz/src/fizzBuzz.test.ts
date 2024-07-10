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

    it('n = 10 should return Buzz', () => {
        const n:number = 10

        const result: string = fizzBuzz(n)

        expect(result).toEqual('Buzz')
    })

    it('n = 11 should return 11', () => {
        const n:number = 11

        const result: string = fizzBuzz(n)

        expect(result).toEqual('11')
    })

    it('n = 12 should return Fizz', () => {
        const n:number = 12

        const result: string = fizzBuzz(n)

        expect(result).toEqual('Fizz')
    })

    it('n = 13 should return 13', () => {
        const n: number = 13

        const result: string = fizzBuzz(n)

        expect(result).toEqual('13')
    })

    it('n = 14 should return 14', () => {
        const n:number = 14

        const result: string = fizzBuzz(n)

        expect(result).toEqual('14')
    })
})