var getMovieData = JSON.parse(localStorage.getItem("movieData"));
var tBody = document.getElementById("tbody");

var rowPerPage = 3;
var currentPage = 1;

function displayPaginationPerPage(pageNumber, data){
  const start = (pageNumber - 1) * rowPerPage;
  const end = start + rowPerPage;
  const rowsToDisplay = data.slice(start, end);

  tBody.innerHTML = "";

  for (var i = 0; i < rowsToDisplay.length; i++) {
    var movieRow = rowsToDisplay[i];
    var tr = document.createElement("tr");

    for (var key in movieRow) {
      if (movieRow.hasOwnProperty(key)) {
        var td = document.createElement("td");
        td.textContent = movieRow[key];
        tr.appendChild(td);
      }
      var updateButtonCell = document.createElement("td");
      var updateButton = document.createElement("button");
      var deleteButton = document.createElement("button");

      updateButton.textContent = "Update";
      updateButton.style.borderRadius = "5px"
      updateButton.style.color ="white"
      updateButton.style.backgroundColor = "blue"
      updateButton.style.width ="80px"

      deleteButton.textContent = "Delete";
      deleteButton.style.borderRadius = "5px"
      deleteButton.style.color ="white"
      deleteButton.style.backgroundColor = "red"
      deleteButton.style.width ="80px"
    }

    updateButtonCell.appendChild(updateButton);
    updateButtonCell.appendChild(document.createElement("br"));
    updateButtonCell.appendChild(deleteButton);
    tr.appendChild(updateButtonCell);
    tBody.appendChild(tr);
  }
};

function paginationButtonGenerate(data) {
  var totalPage = Math.ceil(data.length / rowPerPage);
  var paginationId = document.getElementById("pagination");
  paginationId.innerHTML = "";

  for (var i = 1; i <= totalPage; i++) {
    var buttonCreate = document.createElement("button");
    buttonCreate.classList.add("btn", "btn-success");
    buttonCreate.innerHTML = i;

    buttonCreate.addEventListener("click", function (e) {
      var pageNumber = parseInt(e.target.innerHTML);
      currentPage = pageNumber;
      displayPaginationPerPage(currentPage, data);
    });
    paginationId.appendChild(buttonCreate);
  }
}
paginationButtonGenerate(getMovieData);
displayPaginationPerPage(currentPage, getMovieData);
