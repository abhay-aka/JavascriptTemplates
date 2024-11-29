let counter = 0;
const fun = (name, age) => {
    console.log("Hello", name, "age is ", age, counter++);
}

const throttle = (func, delay) => {
    let callFunc = true;
    return function () {
        if (callFunc) {
            let context = this, args = arguments;
            callFunc = false;
            func.apply(context, args);
            setTimeout(()=> {
                callFunc = true;
            }, delay)
        }

    }
}

const logUser = throttle(fun, 2000);
