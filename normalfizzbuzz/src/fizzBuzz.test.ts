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
})