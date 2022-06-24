function addXX(a, b, c) {
    if (c) {
        return a + c;
    }
    if (typeof a === 'string') {
        return `a is ${a}, b is ${b}`;
    }
    else {
        return a + b;
    }
}
addXX(1, 2);
addXX('a', 'b');
addXX(1, 2, 3);
export {};
//# sourceMappingURL=Example.js.map