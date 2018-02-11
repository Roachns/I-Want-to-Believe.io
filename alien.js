var $tbody = document.querySelector("tbody");

var filteredUFO = dataSet;

function renderTable(data) {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredUFO.length; i++) {
    // Get get the current address object and its fields
    var ufo = filteredUFO[i];
    var fields = Object.keys(ufo);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = ufo[field];
    }
  }
}

renderTable();

function queryParams() {
    return {
        type: 'owner',
        sort: 'updated',
        direction: 'desc',
        per_page: 100,
        page: 1
    };
}

function filterTable(event) {
    var filter = event.target.value.toUpperCase();
    var rows = document.querySelector("#myTable tbody").rows;

    for (var i = 0; i < rows.length; i++) {
        var firstCol = rows[i].cells[0].textContent.toUpperCase();
        var secondCol = rows[i].cells[1].textContent.toUpperCase();
        var fourthCol = rows[i].cells[3].textContent.toUpperCase();
        var fifthCol = rows[i].cells[4].textContent.toUpperCase();
        var sixthCol = rows[i].cells[5].textContent.toUpperCase();
        if (firstCol.indexOf(filter) > -1 || secondCol.indexOf(filter) > -1 || fourthCol.indexOf(filter) > -1 || fifthCol.indexOf(filter) > -1 || sixthCol.indexOf(filter) > -1) {
            rows[i].style.display = "";
            var newdataSet = rows[i].style.display;
        } else {
            rows[i].style.display = "none";
        }
    }
}

// filter bar for the city because only abbreviations were used

function filterTable2(event) {
  var filter = event.target.value.toUpperCase();
  var rows = document.querySelector("#myTable tbody").rows;
  console.log(rows)

  for (var i = 0; i < rows.length; i++) {
    var thirdCol = rows[i].cells[2].textContent.toUpperCase();
    if (thirdCol.indexOf(filter) > -1) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }

}


document.querySelector('#myInput').addEventListener('keyup', filterTable, false);
document.querySelector('#myInput2').addEventListener('keyup', filterTable2, false);