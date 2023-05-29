document.addEventListener("submit", function (event) {
  event.preventDefault();

  //gettinginput from form
  var movieName = document.getElementById("moviename").value;
  var directorFirstName = document.getElementById("firstname").value;
  var directorLastName = document.getElementById("lastname").value;
  var directorEmail = document.getElementById("directoremail").value;
  var releaseDate = document.getElementById("releasedate").value;
  var language = document.getElementsByName("inlineRadioOptions");
  var categoryCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');

  var form = this.getElementById("myForm");

  var op1 = document.getElementById("inlineRadio1")
  var op2 = document.getElementById("inlineRadio2")
  var op3 = document.getElementById("inlineRadio3")
  var op4 = document.getElementById("inlineRadio4")
  var op5 = document.getElementById("inlineRadio5")

  var language = "";
  if (op1.checked) {
    language=op1.value;
  }
  else if(op2.checked){
    language=op2.value;
  }
  else if(op3.checked){
    language=op3.value;
  }
  else if(op4.checked){
    language=op4.value;
  }
  else{
    language=op5.value;
  }

  // Create an array to store the selected values
  var checkboxArray = [];

  // Iterate over the selected checkboxes and add their values to the array
  categoryCheckbox.forEach((checkbox) => {
    checkboxArray.push(checkbox.value);
  });

  var runtime = document.getElementById("runtimedropdown").value;
  var description = document.getElementById("description").value;
  id++;


  //validation
  //name
  var movieNameRegex = /^[A-Za-z0-9\s\-]+$/;
  if (movieName.trim() === "") {
      alert("Movie name cannot be empty!")
      return;
  }else if(!movieNameRegex.test(movieName)){
    alert("Invalid movie name. Only letters, numbers, spaces, and dashes are allowed.");
    return;
  }
 
  //comment
  if (description === "") {
    alert("Please write movie description");
    return;
  }

  //date
  if (releaseDate.trim() === "") {
    alert("Please add release date");
    return;
  }

  

  //category-checkbox
  if(checkboxArray.length === 0){
    alert("Please select movie category");
    return;
  }

  //director name
  var firstNameRegex = /^[A-Za-z\s]+$/;
  var lastNameRegex = /^[A-Za-z\s]+$/;

  if (directorFirstName.trim() === "") {
    alert("Director first-name cannot be empty!");
    return;
  }else if(!firstNameRegex.test(directorFirstName)){
    alert("Invalid first-name. Only letters and spaces are allowed.")
    return;
  }
  if (directorLastName.trim() === "") {
    alert("Director last-name cannot be empty!");
    return;
  }else if(!lastNameRegex.test(directorLastName)){
    alert("Invalid last-name. Only letters and spaces are allowed.")
    return;
  }
  

  //email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (directorEmail === "") {
    alert("Email cannot be empty!");
    return;
  }else if (!emailRegex.test(directorEmail)) {
    alert("Invalid email address.")
    return;
  }

  //runtime dropdown
  if (runtime.value === "") {
    alert("Please select movie runtime")
    return;
  }

  //creating movie obj
  var movie = {
    movieName: movieName,
    firstName: directorFirstName,
    lastName: directorLastName,
    directorEmail: directorEmail,
    releaseDate:releaseDate,
    language: language,
    checkboxArray: checkboxArray,
    runtime: runtime,
    description: description,
};
form.reset();

//saving to local storage
var movieData = localStorage.getItem("movieData");
if (!movieData) {
    movieData = [];
} else {
    movieData = JSON.parse(movieData);
}

//json
function saveMovieData(movie) {
    movieData.push(movie);
    var movieDataToString = JSON.stringify(movieData)
    localStorage.setItem("movieData", movieDataToString);
}
saveMovieData(movie);
alert("Movie Form Data Submitted!");

});
 var id = 0;