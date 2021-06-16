function receivesAFunction (callback) {
   return callback();
}

function returnsANamedFunction () {
    function anotherFunction() {
    }
    return anotherFunction;
}

function returnsAnAnonymousFunction () {
   return function() {
   }
}

