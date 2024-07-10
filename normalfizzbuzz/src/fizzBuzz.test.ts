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
})