
var myForm = document.getElementById('myForm');
myForm.addEventListener('submit', function(e){
    e.preventDefault();
    var country = document.getElementById('country').value
    // alert(country)
    fetch("https://corona.lmao.ninja/v2/countries/"+country)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    document.getElementById("flag").src = data.countryInfo.flag;
    document.getElementById("Cun").innerHTML = country;
    document.getElementById("Active_Cases").innerHTML = data.active;
    document.getElementById("Total_Cases").innerHTML = data.cases;
    document.getElementById("Critical_Cases").innerHTML = data.critical;
    document.getElementById("Total_Death").innerHTML = data.deaths;
    document.getElementById("Recovered_Cases").innerHTML = data.recovered;
    document.getElementById("Total_Test_Done").innerHTML = data.tests;
  });

})

