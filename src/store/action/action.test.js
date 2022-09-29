import {describe,test,expect} from '@jest/globals';
import * as action from './action';
import {shallow} from 'enzyme';
describe('Action',()=>{
    test('increment count by 1',()=>{
        expect(action.incrementfunc()).toEqual({
            type:action.INCREMENT
        })
    })
    test('decrement count by 1',()=>{
        expect(action.decrementfunc()).toEqual({
            type:action.DECREMENT
        })
    })
})