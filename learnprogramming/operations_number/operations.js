function double(x) {
    return x * 2
}

function triple(x) {
    return x * 3
}

export function run(operation, x) {
    console.log(operation)
    console.log(x)
if (operation === "double"){
    return double(x)
}
if (operation === "triple"){
    return triple(x)
}
}