
function funcOne(callback){
    setTimeout(function(){
        console.log('line1');
        callback();
    }, 2000);
}

function funcTwo(){
    console.log('line2');
}

funcOne(funcTwo);


const myPromise = new Promise(function(resolve){
    setTimeout(function(){
        resolve('inside funcOne setTimeout line 1')
    }, 2000);

    
});

myPromise.then(function(res){
    console.log(res)
    console.log('line 2');
});