function square(a) {
    return new Promise((resolve, reject)=> {

       setTimeout(()=>{
           if(typeof a=== 'number') {
               resolve(a*a);
           } else {
               reject("an error occour");
           }
       }, 1000);

    });
}

async function test(){
    let a= await square(2);
    console.log(a);
    return a;
}

console.log("test--"+test());

square(2).then
    ( 
        (out1)=> {
            console.log(out1);
           return square(out1);
        }
    ).then (
        (out2) => {
            console.log(out2);
            return square(out2);
        }
    ).then (
        (out3) => {
            console.log(out3);
        }
    ).catch((error)=>{ console.log(error)});
