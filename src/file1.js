import {noop} from 'lodash/noop';
export const fn1 = () => {
    console.log('fn1');
    console.log(noop);
}
export const fn2 = () => {
    console.log('fn2');
    console.log(noop);
}