function checkPromise(input) {
    return new Promise((resolve, reject)=>{
        if(input) {
            resolve({message:"resolved successfully"});
        } else {
            reject({message:"rejected message"});
        }
    });
}

/*
checkPromise(true).then((successOut)=> { console.log (successOut)}, (failureOut)=> {console.log(failureOut)});
checkPromise(false).then((successOut)=> { console.log (successOut)}, (failureOut)=> {console.log(failureOut)});
checkPromise(false).then((successOut)=> { console.log (successOut)}).catch((failureOut)=> {console.log(failureOut)});
checkPromise(true).then((successOut)=> { console.log (successOut)}).catch((failureOut)=> {console.log(failureOut)});
*/

//chaining to promises
/*
checkPromise(true)
 .then( (message)=> {
     console.log("first success");
     return checkPromise(true);
 }, (failure)=> {
    console.log("first failed");
    return checkPromise(true);
}).then ( (smsg)=> { console.log("second success")}, (fmsg)=> { console.log("second failed")} );
*/

/*
console.log("-- failed - case --");
checkPromise(false)
 .then( (message)=> {
     console.log("first success");
     return checkPromise(true);
 }, (failure)=> {
    console.log("first failed");
    return checkPromise(true);
}).then ( (smsg)=> { console.log("second success")}, (fmsg)=> { console.log("second failed")} );
 */


console.log("-- carry of error to second - case --");

checkPromise(false)
 .then( (message)=> {
     console.log("first success");
     return checkPromise(true);
 }).then ( (smsg)=> { console.log("second success")}, (fmsg)=> { console.log("second failed")} )
 .catch( (gmsg) => {console.log("global error handling")});



 