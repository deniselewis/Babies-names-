let names = ['Michele', ' Felipe', 'Aubrie', 'Denise', 'Elaina', 'Morely', 'Paris', 'Sophe', 'Carol', 'John'];

function generator(event) {
    console.log(event.target.dataset.gender)
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ab6f93ac7cmsh11eb2c08270b401p1b3eb3jsnc42cb37d7c1e',
            'X-RapidAPI-Host': 'baby-names-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch('https://baby-names-by-api-ninjas.p.rapidapi.com/v1/babynames?gender='+event.target.dataset.gender, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

//document.getElementById(Girl).innerHTML = 
      // girl[Math.floor(Math.random()* girl.length)] + ", " + 
       // names[Math.floor(Math.random()* names.length)] + ", " +
       // names[Math.floor(Math.random()* names.length)] + ", " +
       // names[Math.floor(Math.random()* names.length)] + '.';
   }

   const genderEl = document.getElementsByClassName("genders")
   for(let i = 0; i<genderEl.length; i++) {
    genderEl[i].addEventListener('click',generator)
   }
   
    
    

