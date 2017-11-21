const reduce = (fn = 'reduceRight', ...args) => {
    return async (initialValue) => await args[fn](async (acc, next) => next(await acc), initialValue);
};

const compose = reduce.bind(undefined, 'reduceRight');
const pipe = reduce.bind(undefined, 'reduce');

export { compose, pipe };

