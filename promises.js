// Simple
var ifIFinish = function (resolve, reject) {
    console.log("I am doing something");
    reject("Nope, nevermind");
};
var doSomethingForYou = function (resolution) {
    console.log("Now I am doing something for you");
    console.log("result: " + resolution);
    return new Promise(function (resolve, reject) {
        resolve(resolution + 1);
    });
};
var iWontDoSomething = function (error) {
    console.log(error);
};
// var doAnotherThing = function(resolution) {
//     console.log("Now I do a third thing");
//     console.log("result: " + resolution);
// }
var inAMinute = new Promise(ifIFinish);
inAMinute.then(doSomethingForYou).catch(iWontDoSomething);
