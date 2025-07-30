<<<<<<< HEAD
//accept and reject
function doTaskCallback(callback) {
    setTimeout(() => {
        if(success) {
            callback(null, "Task completed successfully");
        } else {
            callback(" Task failed", null);
        }
    }, 2000);
}

//usage
doTaskCallback(true, (error, result) => {
    if(error) {
        console.error("Success:", error);
    } else {
        console.log("Error:", result);
    }
});

//Promises version
function doTaskPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(success) {
                resolve("Task completed successfully");
            } else {
                reject("Task failed");
            }
        }, 2000);
    });
}

doTaskPromise(true)
    .then(result => {
        console.log("Success:", result);
    })
    .catch(error => {
        console.error("Error:", error);
    });

//Async/Await version
function doTaskPromise(success){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(success) {
                resolve("Task completed successfully");
            } else {
                reject("Task failed");
            }
        }, 2000);
    });
=======
//accept and reject
function doTaskCallback(callback) {
    setTimeout(() => {
        if(success) {
            callback(null, "Task completed successfully");
        } else {
            callback(" Task failed", null);
        }
    }, 2000);
}

//usage
doTaskCallback(true, (error, result) => {
    if(error) {
        console.error("Success:", error);
    } else {
        console.log("Error:", result);
    }
});

//Promises version
function doTaskPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(success) {
                resolve("Task completed successfully");
            } else {
                reject("Task failed");
            }
        }, 2000);
    });
}

doTaskPromise(true)
    .then(result => {
        console.log("Success:", result);
    })
    .catch(error => {
        console.error("Error:", error);
    });

//Async/Await version
function doTaskPromise(success){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(success) {
                resolve("Task completed successfully");
            } else {
                reject("Task failed");
            }
        }, 2000);
    });
>>>>>>> 5bfcf05 (Initial Commit)
}