function getJoke(){
    var category = document.querySelector('#category').value;

    axios.get(`https://sv443.net/jokeapi/category/${category}`)
        .then(response => {
            showJokes(response.data);
    
        })
        .catch(err => console.log(err));
}
function showJokes(joke){
    const results = document.querySelector('#results');
    results.innerHTML = '';
    if(joke.type==='single'){
        results.innerHTML = `
          ${joke.joke} `
    }
    else{
        results.innerHTML = `
          ${joke.setup}
          <br>
         ${joke.delivery}
          `

    }
}
