const IS_ABSENT = 0;
/**
 * checkRandom employee is absent or present 
 */
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == IS_ABSENT) {
    console.log("UC1 : Employee is Absent");
    return;
} else {
    console.log("UC1 : Employee is Present");
}

/**
 * calculating employee wage
 */
 const IS_PART_TIME = 1;
 const IS_FULL_TIME = 2;
 const PART_TIME_HRS = 4;
 const FULL_TIME_HRS = 8;
 const WAGE_PER_HR = 20;
 const NUM_OF_WORKING_DAYS = 20;

let empHrs = 0;
empWageCheck = Math.floor(Math.random() * 10) % 3;
switch (empWageCheck) {
    case IS_PART_TIME :
        empHrs = PART_TIME_HRS ;
        break;
    case IS_FULL_TIME :
        empHrs = IS_FULL_TIME ;
        break;
    default :
        empHrs = 0;
}

let empWage = empHrs * WAGE_PER_HR;
console.log("UC2 :Employee Wage :- " + empWage);

/**
 * refactored the calculating empWage in function
 */
 function getWorkingHrs(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME :
            return PART_TIME_HRS;
        case IS_FULL_TIME :
            return FULL_TIME_HRS;
        default :
            return 0;
    }
}
//let empCheck = Math.floor(Math.random() * 10) % 3;
empHrs = getWorkingHrs(empCheck);
empWage = empHrs * WAGE_PER_HR;
console.log("UC3 :[Refactored]Employee Wage :- " + empWage);

/**
 * calculating monthly wage
 */
 let empHours = 0;
 for (let day =0; day < NUM_OF_WORKING_DAYS; day++) {
     //let empCheck = Math.floor(Math.random() * 10) % 3;
     empHours = empHours + getWorkingHrs(empCheck);
 }
 
 let employeeWage = empHours * WAGE_PER_HR ;
 console.log("UC4: Total Hours :- " + empHours + "\nEmployee Wage: " + employeeWage);

 /**
  * Calculating Wages till Number of Working days.
  */

  const MAX_HRS_IN_MONTH = 160;
  //const NUM_OF_WORKING_DAYS = 10;

  let totalEmpHrs = 0;
  let totalWorkingDays = 0;
  
  while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
      totalWorkingDays++;
      let empCheckRandom = Math.floor(Math.random() * 10) % 3;
      totalEmpHrs += getWorkingHrs(empCheckRandom);
  }
  let empSalary = totalEmpHrs * WAGE_PER_HR;
  console.log("UC5 : Total Days:- " + totalWorkingDays + "\nTotal Hours: " + totalEmpHrs + "\nEmployee Wage: " + empSalary);


/**
 * Store Daily Wage in a Array
 */
function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HR;
}

let empDailyWageArray = new Array();

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays <= NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    empHrs = getWorkingHrs(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArray.push(calcDailyWage(empHrs));
}

 employeeWage = calcDailyWage(totalEmpHrs);
console.log("UC6: Total Days :- " + totalWorkingDays + "\nTotal Hours :- " + totalEmpHrs 
+ "\nEmployee Wage :- " + employeeWage );


/**
 * UC7 : Array Helper Functions
 */
let totEmpWage = 0;
function sum(dailyWage) {
    totEmpWage = totEmpWage + dailyWage;
}

//Calculating total wage using array forEach

empDailyWageArray.forEach(sum);
console.log("UC7(a) : Total Days :- " + totalWorkingDays + 
"\n Total Hours:- " + totalEmpHrs + "\nEmployee Wage :- " + totEmpWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage ;
}
console.log("UC7(a) : Employee Wage with reduce :- " +
empDailyWageArray.reduce(totalWages, 0));

// Show the day along with Daily Wage using Array Map Helper Function

let dailyCount = 0;
function mapDailyWithWage(dailyWage) {
    dailyCount++;
    return dailyCount + " = " + dailyWage;
}
let mapDailyWithWageArray = empDailyWageArray.map(mapDailyWithWage);
console.log("UC7(b) : Daily Wage Map: " + mapDailyWithWageArray);

//Display Days when Full time Wage of 160 were earned
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}

let fullDayWageArray = mapDailyWithWageArray.filter(fullTimeWage);
console.log("UC7(c) : Daily Wage Filter when Fulltime Wage Earned : " + fullDayWageArray);

//find first occurrence when fullTimeWage was earned using find func

function findFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7(d) : First time Fulltime Wgae earned on Day: " 
+ mapDailyWithWageArray.find(findFullTimeWage));

//check if Each Element of Fulltime Wage is Truely holding Full time wage

function isAllFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7(e) : Check all element have full Time Wage : " 
+ fullDayWageArray.every(isAllFulltimeWage));

// Check if there is any Part Time Wage
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes(80);
}
console.log("UC7(f) : Check if Any PartTime Wage : " 
+ mapDailyWithWageArray.some(isAnyPartTimeWage));

// Find the number of days the Employee Worked

function totalDaysWorked(numOfDays, dailyWage) {
    if(dailyWage > 0) 
        return numOfDays+1;

    return numOfDays;
}

console.log("UC7(g) : Number of Days Employee Worked : " 
+ empDailyWageArray.reduce(totalDaysWorked, 0));

//Storing Daily Wage in a Map

empDailyWageArray = new Array();
let empDailyWageMap = new Map();

function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HR;
}

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getWorkingHrs(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArray.push(calcDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
}

console.log(empDailyWageMap);
function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}

console.log("UC8 : Employee Wage Map Total Hours : " 
+ Array.from(empDailyWageMap.values()).reduce(totalWages, 0));