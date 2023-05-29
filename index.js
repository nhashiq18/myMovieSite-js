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
  else if(op5.checked){
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


  //error handle func

  function errorFunc(id, errorMessage){
    id.innerHTML = errorMessage;
  }

  //validation
  //name
  {
    
  }
  var movieNameRegex = /^[A-Za-z0-9\s\-]+$/;
  if (movieName === "") {
      errorFunc(document.getElementById("movieNameError"), "name field cannot be empty!");
      return;
  }else if(!movieNameRegex.test(movieName)){
      errorFunc(document.getElementById("movieNameError"),"Invalid movie name. Only letters, numbers, spaces, and dashes are allowed.")
    return;
  }else {
    errorFunc(document.getElementById("movieNameError"),"")
  }
 
  //comment
  if (description === "") {
    errorFunc(document.getElementById("detailsError"), "description cannot be empty!");
    return;
  }else {
    errorFunc(document.getElementById("detailsError"), "");
  }

  //date
  if (releaseDate === "") {
    errorFunc(document.getElementById("dateError"), "Please add release date");
    return;
  }else{
    errorFunc(document.getElementById("dateError"), "");
  }

  if (language === "") {
    errorFunc(document.getElementById("radioError"), "Please select language");
  }else{
    errorFunc(document.getElementById("radioError"), "");
  }

  //category-checkbox
  if(checkboxArray.length === 0){
    errorFunc(document.getElementById("checkboxError"), "Please select movie category");
    return;
  }else{
    errorFunc(document.getElementById("checkboxError"), "");
  }

  //director name
  var firstNameRegex = /^[A-Za-z\s]+$/;
  var lastNameRegex = /^[A-Za-z\s]+$/;

  if (directorFirstName.trim() === "") {
    errorFunc(document.getElementById("NameError"), "Please insert first name");
    return;
  }else if(!firstNameRegex.test(directorFirstName)){
    errorFunc(document.getElementById("NameError"), "Please insert first name");
    return;
  }else {
    errorFunc(document.getElementById("NameError"), "");
  }

  if (directorLastName.trim() === "") {
    errorFunc(document.getElementById("NameError"), "Please insert last name");
    return;
  }else if(!lastNameRegex.test(directorLastName)){
    errorFunc(document.getElementById("NameError"), "Please insert last name");
    return;
  }else{
    errorFunc(document.getElementById("NameError"), "");
  }
  

  //email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (directorEmail === "") {
    errorFunc(document.getElementById("emailError"), "Please insert valid email address. e.g: a@gmail.com");
    return;
  }else if (!emailRegex.test(directorEmail)) {
    errorFunc(document.getElementById("emailError"), "Please insert valid email address. e.g: a@gmail.com");
    return;
  }else {
    errorFunc(document.getElementById("emailError"), "");
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
location.reload();

});
 var id = 0;