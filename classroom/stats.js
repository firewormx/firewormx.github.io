export default class Stats {
    
constructor(grades){
this.grades = grades;
}
getNumberOfGrades()
{
    return this.grades.length;
}

getFirstGrade()
{return this.grades[0];

}
getLastGrade(){
return this.grades[this.grades.length -1];
}
getSumOfGrades(){
let sum = 0
this.grades.forEach(function(grade){
    sum = sum + grade;
})
return sum;
}
getAverageGrade(){
    let sum = 0;
    this.grades.forEach(function(grade){
        sum = sum + grade;
    })
    return sum/this.grades.length;
}
exportCsv()
{return this.grades.join(", " );

}}