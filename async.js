// Write an asynchronous function that accepts a message string and a delay time in milliseconds. 
// The function should log the message to the console after the specified delay time.

function delayMessage(){
    console.log("I drive a black mercedes")
}


setTimeout(delayMessage,2000)


// You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given a user ID. Write an asynchronous function that 
// fetches and logs the data for each 
// user ID one by one, 
// in sequence.

async function getUserData(){

}


// async function logUserDataInSequence(userIds) {
//     for (const id of userIds) {
//       const userData = await getUserData(id); // wait for the promise to resolve
//       console.log(userData);
//     }
//   }
  
  
  
  
  
//   10:55
//   const userIds = [1, 2, 3, 4, 5];
//   logUserDataInSequence(userIds);



// const userIds = [1, 2, 3, 4, 5];
// logUserDataInSequence(userIds);














// You have an asynchronous function performTask() 
// that returns a Promise. The Promise resolves if 
// the task is successful and rejects if there's an error. Write a function that calls performTask()
//  and logs a custom success message if the task is successful, and a custom error message if there's an error.