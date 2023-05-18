export function getMessage(number) {
    if(number<0){
        return "Invalid number"
    }
    if(number===0){
        return "You don't have any items in your shopping list"
    }
    if(number===1){
        return "You have one item in your shopping list"
    }
    if(number>1){
        return "You have more than 1 item in your shopping list"
    }
    console.log(number)
}

