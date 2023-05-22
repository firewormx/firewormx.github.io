
export function addItem(items, item) {
    items.push(item)
    return items
   }

   export function exportLowerCasedCSV(items) {
   return items.map(function(item){
       return item.toLowerCase()
   }).join(", ")
   }