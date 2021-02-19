new Promise(resolve => {
    console.log("starting");
    resolve("promise result");
}).then(result => console.log(result+" in callback"));

console.log("started");
