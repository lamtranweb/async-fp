import { compose, pipe } from './index';

const setNum = async (num) => new Promise(resolve => setTimeout(() => resolve(num), 100));
const plusOne = async (param) => new Promise(resolve => setTimeout(() => resolve(param + 1), 100));
const plusTwo = (param) => (param + 2);

it('works without lib', (done) => {
    setNum(1).then(result => {
        expect(result).toBe(1);

        plusOne(result).then(plused => {
            expect(plused).toBe(2);
            done();
        });
    });
});

it('works with compose', async (done) => {
    const result = await compose(plusOne, setNum)(1);
    expect(result).toBe(2);
    done();
});

it('works with pipe', async (done) => {
    const result = await pipe(setNum, plusOne)(1);
    expect(result).toBe(2);
    done();
});

it('works with async and non async', async (done) => {
    const result = await compose(plusTwo, plusOne, setNum)(1);
    expect(result).toBe(4);
    done();
});

