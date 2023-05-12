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

let gradesForm = document.querySelector("#grades-form");
let yourGrade = document.querySelector("#your-grade");

let grades = [14, 9, 13, 15, 18];

function render(grades) {
    let stats = new Stats(grades);
    console.log("Grades: " + grades.join(', '));
    let tbody = document.querySelector("#stats-table tbody");
    tbody.innerHTML = `<tr>
    <td>${stats.getNumberOfGrades()}</td>
    <td>${stats.getFirstGrade()}</td>
    <td>${stats.getLastGrade()}</td>
    </tr>`;

    let tbody2 = document.querySelector("#stats-table2 tbody");
    tbody2.innerHTML = `<tr>
    <td>${stats.getSumOfGrades()}</td>
    <td>${stats.getAverageGrade()}</td>
    <td>${stats.exportCsv()}</td>
    </tr>`;
}

gradesForm.addEventListener("submit", event => {
    event.preventDefault();
    let newGrade = Number.parseInt(yourGrade.value, 10);
    grades.push(newGrade);
    yourGrade.value = "";
    render(grades);
})

render(grades);