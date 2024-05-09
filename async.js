// Write an asynchronous function that accepts a message string and a delay time in milliseconds. 
// The function should log the message to the console after the specified delay time.

// const { reject } = require("async");

let money = true
const ourPromise = new Promise((resolve,reject)=>{
   if(money){
    resolve('I bought it')
   }
   else{
    reject('I will get more money')
   }
}
    )

    ourPromise.then(()=>{
        console.log('I will continue looking for it');
    })

.catch(()=>{
    console.log('I will earn more money');
})



async function delayMessage(){
    try{
        console.log ('This is my dream')
        await myPromise;
    }
    catch{
        console.log('I will drive a black benz');
    }
}

delayMessage()
setTimeout(delayMessage,3000)


// You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given a user ID. Write an asynchronous function that 
// fetches and logs the data for each 
// user ID one by one, 
// in sequence.



async function getUserData(id) {
    return new Promise((resolve) => {
    setTimeout(() => {
    resolve(` ID ${id}`);
      }, 3000);
    });
  }
  async function fetchesData(UId) {
    const results = await UId.reduce(async (previousPromise, id) => {
    await previousPromise;
    const userData = await getUserData(id);
    console.log(userData);
    }, )
   
  }

  const userId = [1,2,3,4,5];
  fetchesData(userId)
  



// You have an asynchronous function performTask() 
// that returns a Promise. The Promise resolves if 
// the task is successful and rejects if there's an error. Write a function that calls performTask()
//  and logs a custom success message if the task is successful, and a custom error message if there's an error.


const goRunning = false
const myPromise = new Promise((resolve,reject)=>{
    if (goRunning){
        resolve("I went running");
    }
    else{
        reject("I will go tommorrow")
    }
})
myPromise.then(()=>{
    console.log('I will go running everyday');
})
.catch(()=>{
    console.log('I will try again tomorrow')
})

console.log({goRunning})




// 4.Retry Logic:
// Scenario:
// Write a function unstableTask that:

// 1.Accepts a taskName and failureProbability (a number between 0 and 1).



function unstableTask(taskName,Probability){

}

function unstableTask(taskName, failureProbability) {
    return new Promise((resolve, reject) => {
        const randomValue = Math.random();
        if (randomValue > failureProbability) {
            resolve(`${taskName} succeeded`);
        } else {
            reject(`${taskName} failed`);
        }
    });
}

async function executeWithRetry(taskName, retries, failureProbability) {
    for (let attempt = 3;retries <= i ; i++) {
        try {
       unstableTask(taskName, retries,failureProbability);
        console.log(`Task "${taskName}" succeded`);
        return;
        } catch () {
        console.error(`Error`);
        }
        }
       }

       executeWithRetry("SampleTask", 3, 0.5);

