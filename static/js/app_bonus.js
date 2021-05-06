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

        // Insert the vlaue into the column.
        var col = row.append('td');
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

// Function to run multiple filter in a single click of button.
function multifilter(){

    // Select the id = datetime for getting the data for filtering the table.
    var date_time = d3.select('#datetime');
    var date_value = date_time.property('value');
    console.log(date_value);
    
    // Select the id = city for getting the data for filtering the table.
    var city_name = d3.select('#city');
    var city_value = city_name.property('value');
    console.log(city_value);

    // Select the id = state for getting the data for filtering the table.
    var state_name = d3.select('#state');
    var state_value = state_name.property('value');
    console.log(state_value);

    // Select the id = country for getting the data for filtering the table.
    var country_name = d3.select('#country');
    var country_value = country_name.property('value');
    console.log(country_value);

    // Select the id = shape for getting the data for filtering the table.
    var shape_name = d3.select('#shape');
    var shape_value = shape_name.property('value');
    console.log(shape_value);

    // filter the data with 5 different filter values form the list dictionary. 
    var filter_data = tableData.filter(({datetime, city, state, country, shape}) => datetime === date_value && city === city_value && state === state_value && country === country_value && shape === shape_value);
    console.log(filter_data);

    // var filter_date = tableData.filter(date => date.datetime === date_value);
    // console.log(filter_date);
    return filter_data;
};

// function to run when the submit button is clicked.
function runEnter(){

    // prevent the HTML page from refreshing when function is run.
    d3.event.preventDefault();

    //console.log(tableData);

    // Clear the table for storing the data with filter value.
    app.html('');

    // Store the function which filter the table with 5 different data thorugh a variable.
    var filterfun = multifilter();

    // Run a forEach loop for the vriable storing the function to filter the 5 different data. 
    filterfun.forEach((filter_table) => {

        // Append the row with the columns and value.
        var row = app.append('tr');

        // Object to insert the vlaues into the columns using a forEach loop to store the vaue into the columns and append the columns with the vlaue filter with 5 different data values.
        Object.values(filter_table).forEach(value => {
            var filter_cell = row.append('td');
            filter_cell.text(value);
        });
    });
};