const axiosRequest = require('axios')

// let response = axiosRequest.get('https://boredapi.com/api/activity')
// console.log(`You could ${response.data.activity}`)

// .get above returns a promise that is not yet fulfilled when console.log runs, so it returns an error.

/* 
axiosRequest
    .get('https://boredapi.com/api/activity')
    .then(response => {
        console.log(`You could ${response.data.activity}`)
    })
    .catch(error => {
        console.log(`ERROR! ${error}`)
    })
*/

// Use https://httpstat.us/404 to test 404 error message (or other error codes).
// The code above can rapidly become hard to read. Let's see what we can do with await...

// async function getActivity() {
//     try {
//         let response = await axiosRequest.get('https://boredapi.com/api/activity')
//         // console.log(`You could ${response.data.activity.toLowerCase()}.`)
//         return response.data.activity
//     } catch (error) {
//         console.log(`${error}`)
//     }
// }

// getActivity()

// The code above returns Promise { <pending> } rather than the content of response.data.activity.

// This is how to return the content :

async function suggestion() {
    let response = await fetch("https://boredapi.com/api/activity")
    .then((response) => response.json())
    .then((data) => {
        return data.activity;
  })};

let bucketList = []

async function getRetrievedData(){
    let data = await suggestion()
    return data
}

bucketList.push(await getRetrievedData())

console.log(bucketList)