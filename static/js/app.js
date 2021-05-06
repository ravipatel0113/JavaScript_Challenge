// from data.js
var tableData = data;

// YOUR CODE HERE!
// select the button
var button = d3.select('#filter-btn');

// Select the tbody to insert the data into the table form.
var app = d3.select('tbody');

// Clear the table before rendering the data and insert a clear result of the filter data.
app.html("");

// forEach loop to increase the row count and the columns count after enter the first data from the data.js file dictionary list.
tableData.forEach((country_data) => 
{
    // Create the row and append the data into the row.
    var row = app.append('tr');

    // Using object inser the values of table into the columns.
    Object.values(country_data).forEach(value => {

        // Append the columns of the row.
        var col = row.append('td');

        // Insert the vlaue into the column.
        col.text(value);
        //col.attr('class');
        //console.log(row);
    });
});

// Select the form using d3.select...
var form = d3.select('.form-group');

// Select the button tag which submit the data to filter the table. 
button.on('click', runEnter);
form.on('submit', runEnter);


// function to run when the submit button is clicked. 
function runEnter(){

    // prevent the HTML page from refreshing when function is run.
    d3.event.preventDefault();

    // Select the id = datetime for getting the data to filter the table. 
    var date_time = d3.select('#datetime');
    
    // Get the property form the input of datetime.
    var date_value = date_time.property('value');
    console.log(date_value);
    console.log(tableData);

    // Filter the data table to get the data filtering the date. 
    var filter_date = tableData.filter(date => date.datetime === date_value);
    console.log(filter_date);

    // Clear the table for storing the data with filter value.
    app.html('');
    
    // Run forEach loop to go through the table and print the data matching the the filter date into the tbody of the table...
    filter_date.forEach((filter_table) => {
        var row = app.append('tr');

        Object.values(filter_table).forEach(value => {
            var filter_cell = row.append('td');
            filter_cell.text(value);
        });
    });
};