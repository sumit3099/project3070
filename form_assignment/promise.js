let mypromise = new Promise((resolve, reject) => {
    setTimeout(() => {


        resolve('Good To go!');
    }, 1000);
});
mypromise.then((res) => {
    console.log(res);
});