
function validateMovieName() {
    var movieNameInput = document.getElementById("movieNameInput");
    var validationMessage = document.getElementById("validationMessage");
    var movieNameRegex = /^[A-Za-z0-9\s\-]+$/;
  
    var movieName = movieNameInput.value.trim();
  
    if (movieName === "") {
      validationMessage.textContent = "Movie name cannot be empty.";
    } else if (!movieNameRegex.test(movieName)) {
      validationMessage.textContent = "Invalid movie name. Only letters, numbers, spaces, and dashes are allowed.";
    } else {
      validationMessage.textContent = "Movie name is valid!";
      // Perform further actions or submit the form
    }
  }
  

  if (op1.checked) {
    var language=op1.value;
  }
  else if(op2.checked){
    var language=op2.value;
  }
  else if(op3.checked){
    var language=op3.value;
  }
  else if(op4.checked){
    var language=op4.value;
  }
  else{
    var language=op5.value;
  }

  //languages-radio
  if (!(language[0].checked || language[1].checked || language[2].checked || language[3].checked || language[4].checked)) {
    alert("Please select a language");
    return;
  }