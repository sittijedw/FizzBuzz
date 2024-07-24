import { fizzBuzz } from 'fizzBuzz'

describe('FizzBuzz', () => {
    it('n = 1 should return 1', () => {
        const n: number = 1

        const result: string = fizzBuzz(n)

        expect(result).toEqual('1')
    })
})