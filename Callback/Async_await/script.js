// Promimse function
//Make Delay
function makeDelay(delay) {
    return new Promise((res, rej) => {
        if (delay < 1000) {
            rej("[ERROR] cannot make delay less than a second");
        } else {
            setTimeout(() => {
                res(`Delay made for ${delay}`);
            }, delay);
        }
    });
}

async function executeSetofOperation() {
    try {
        console.log("Operation1");
        console.log("Operation2");
        let delay = await makeDelay(3000);
        console.log(delay);
        console.log("Operation3");
        delay = await makeDelay(500);
        console.log(delay);
        console.log("Operation4");
    } catch (error) {
        console.log(error);
    }
}

executeSetofOperation();

//fetch in promise -> async promise

async function getAllcountries() {
    fetch("")
}