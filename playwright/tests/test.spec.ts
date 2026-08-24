import { test, expect } from '@playwright/test';
import a from '../type/bai16/data.json'
const data = a

test.describe('test case bai 14', () => {
  for (const [index, value] of data.entries()){
    test(`test ${index + 1} a ` , async ({}) => {
        console.log(value)
    });
}

});
