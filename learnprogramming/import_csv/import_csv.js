export default class Tasks {
    constructor() {
        this.tasks = [];
    }

    /** @param {string} csvString */
    importCsv(csvString) {
   this.tasks=csvString.split(", ");
    }
    getCount(){  
        return this.tasks.length;
    }
getFirst(){
return this.tasks[0];
}
getLast(){
return this.tasks[this.tasks.length -1];
}
getUnformattedTasks(){
return this.tasks.map(function(task){
return task.toLowerCase()
}).join(", ");

}
}