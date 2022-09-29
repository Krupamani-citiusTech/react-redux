import counterReducer,{counterIntialState} from './reducer';
import * as action from '../action/action';
import {describe,test,expect} from '@jest/globals';

describe('reducer',()=>{
    test('counter counterIntialState',()=>{
        expect(counterReducer(undefined,{})).toEqual(counterIntialState)
    })
    test('counter incrementReducer',()=>{
        expect(counterReducer(undefined,action.incrementfunc())).toEqual({
            count:1,
            data:'null'
        })
    })
    test('counter decrementReducer',()=>{
        expect(counterReducer(undefined,action.decrementfunc())).toEqual({
            count:-1,
            data:'null'
        })
    })
})