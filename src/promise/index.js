const somethingWillHappen = () => new Promise((resolve, reject) => {
    if (false) {
        resolve('Hey!')
    } else {
        reject('Whooops!')
    }
})

somethingWillHappen()
.then(response => console.log(response))
.catch(err => console.log(err))