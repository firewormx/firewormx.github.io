/** @param {number[]} grades */
export const getNumberOfGrades = grades => {
return grades.length;
}

/** @param {number[]} grades */
export const getSumGrades = grades => {
let sum = 0;
grades.forEach(grade=>{
    sum = sum + grade;
})
return sum;
}

/** @param {number[]} grades */
export const getAverageValue = grades => {
return getSumGrades(grades)/grades.length;
}

/** @param {number[]} grades */
export const getPassingGrades = grades => {
    // return all passing grades (10 and above)
return grades.filter(grade=>grade>=10);
}

/** @param {number[]} grades */
export const getFailingGrades = grades => {
    // return all failing grades (9 and below)
return grades.filter(grade=>grade< 9);
}

/** @param {number[]} grades */
export const getRaisedGrades = grades => {
    // return all the grades raised by 1 (grades should not exceed 20)
return grades.map(grade=>{
   if(grade +1 >20){
        return 20;
    }
        return grade+1;
})
}
