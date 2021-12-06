// imprt data from the data.js file
const tableData = data;

// reference the HTML table using d3
var tbody = d3.select("tbody");

// create the function to build a table including the data imported abpve
function buildTable(data) {

    // first, clear out any existing data
    tbody.html("");

    // loop through each object in the data 
    // & append a row and cells for each value in the row
    data.forEach((dataRow) => {

        // append a row to the table body (tr)
        let row = tbody.append("tr");

        // loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {

            // append a cell to the table row
            let cell = row.append("td");

            // add the data value from the Object 
            // to the cell we just created
            cell.text(val);
        });
    });
};

function handleClick(){
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // Check to see if a date was entered and 
    // filter the data using that date
    if(date){

        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    
    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will just be the original tableData.
    buildTable(filteredData);
    };
};


d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(tableData);

