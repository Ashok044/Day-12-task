////Higher order functions
//function with returns another functions
function higherOderFunc(fn) {
    return fn;
}
function returnFunc() {
    console.log("I'm returned by another function");
}
const returns = higherOderFunc(returnFunc);
console.log(returns);
returns();

//////CallBacks///////
//Guvi Enrollment

//Course Selection
//Student Enrollment
//Payment
//Batch Allocation
//Course Access

function courseSelection(cb) {
    //cb = ()=>{}
    console.log("Selection of course done {p1}");
    cb();
}
function studentEnrollment(cb) {
    setTimeout( () => {
        console.log("student enrolled sucessfully {p2}");
        cb();
    }, 2000);
}
function paymentProcess(cb) {
    setTimeout( ()=> {
        console.log("Payment completed sucessfully {p3}");
        cb();
    }, 1000);
}
function accessToCourse(){
    console.log("Course access granted {p4}");
}

function guviEnrollment(){
    courseSelection(() => {
        studentEnrollment(() => {
            paymentProcess(() => {
                accessToCourse();
            });
        });
    });
}

//guviEnrollment();

var a = 15;
console.log