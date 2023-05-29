var getMovieData = JSON.parse(localStorage.getItem("movieData"));
var tBody = document.getElementById("tbody");

for (var i = 0; i < getMovieData.length; i++) {
  var movie = getMovieData[i];
  var tr = document.createElement("tr");

  for (var key in movie) {
    if (movie.hasOwnProperty(key)) {
      var td = document.createElement("td");
      td.innerHTML = movie[key];
      tr.appendChild(td);
    }
    var updateButtonCell = document.createElement("td");
    var updateButton = document.createElement("button");
    var deleteButton = document.createElement("button");
    
    
    updateButton.textContent = "Update";
    deleteButton.textContent = "Delete";
  }
  updateButtonCell.appendChild(updateButton);
 
  updateButtonCell.appendChild(document.createElement("br"))
  updateButtonCell.appendChild(deleteButton);
  tr.appendChild(updateButtonCell);
  tBody.appendChild(tr);
}
