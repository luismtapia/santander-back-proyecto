unction deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (typeof (a) == 'object' && typeof (b) == 'object') {
        for (var x in a) {
            if (deepEqual(a[x], b[x]) == false) {
                return false
            }
        }
        return true;
    }

    return false;
}

var john = {
    firstName: 'John',
    lastName: 'Doe'
}


console.log('E1 Test 1:', deepEqual(1, 1)) // true
console.log('E1 Test 2:', deepEqual(1, '1')) // false
console.log('E1 Test 3:', deepEqual(john, john)) // true
console.log('E1 Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
console.log('E1 Test 5:', deepEqual(john, { firstName: 'John' })) // false
