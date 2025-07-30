<<<<<<< HEAD
//fetch the data from server and log the result using callback
function fetchData(callback) {
    setTimeout(() => {
        const data = "Data fetched from server using callback";
        callback(data);
    }, 2000);
}

fetchData((result) => {
    console.log(result);
});

//using promises to fetch data
function fetchDataPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = "Data fetched from server using promises";
            resolve(data);
        }, 2000);
    });
}

fetchDataPromise()
    .then((result) => {
        console.log(result);
    });

//Using async/await to fetch data
function fetchDataAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = "Data fetched from server using async/await";
            resolve(data);
        }, 2000);
    });
}

async function fetchDataWithAwait() {
    const result = await fetchDataAsync();
    console.log(result);
=======
//fetch the data from server and log the result using callback
function fetchData(callback) {
    setTimeout(() => {
        const data = "Data fetched from server using callback";
        callback(data);
    }, 2000);
}

fetchData((result) => {
    console.log(result);
});

//using promises to fetch data
function fetchDataPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = "Data fetched from server using promises";
            resolve(data);
        }, 2000);
    });
}

fetchDataPromise()
    .then((result) => {
        console.log(result);
    });

//Using async/await to fetch data
function fetchDataAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = "Data fetched from server using async/await";
            resolve(data);
        }, 2000);
    });
}

async function fetchDataWithAwait() {
    const result = await fetchDataAsync();
    console.log(result);
>>>>>>> 5bfcf05 (Initial Commit)
}