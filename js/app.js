// An instance of our SimpleMap, created below when the window loads.
let map;

// Update the map to show markers for the set of observations
function updateMap(observations, map) {
  // Clear the current markers on the map (if any)
  map.clear();

  // TODO: call the Simple Map's addObservation method for every one
  // of the observations in order to add markers to the map.
  for(let i =0 ; i< observations.length;i++){

  map.addObservation(observations[i]);}
}

// Update the table to show markers for the set of observations
function updateTable(observations) {
  // Remove any current data from the table
  clearAllTableRows();

  // Populate the table with all observation data we want to show
  observations.forEach((observation) => {
    // TODO: call the buildRowForObservation function with the current observation
    // and use that to add it to the table with the addRowToTable function.
    for(let i =0 ; i< observations.length;i++){
    let row = buildRowForObservation(observations[i]);
 addRowToTable(row);
  }
  }

);
}

// Show all species on the map and table
function showAll() {
  // Get all the observations from our data.js and format them so we can work with the data
  const observations = getAllObservations();

  // Update the map and table
fourth(observations,'All Species')

}

// Show native species on the map and table
function showOnlyNative() {
  // Get all the observations from our data.js and format them so we can work with the data
  const observations = getAllObservations();
  // Filter out any that aren't native species
  const native = filterOnlyNative(observations);

  // Update the map and table
  fourth(native,'Only Native Species')

}

// Show introduced species on the map and table
function showOnlyIntroduced() {
  // Get all the observations from our data.js and format them so we can work with the data
  const observations = getAllObservations();
  // Filter out any that aren't introduced species
  const introduced = filterOnlyIntroduced(observations);

  // Update the map and table
  fourth(introduced,'Only Introduced Species')

}

function start() {
  // Create our map object for Seneca's Newnham campus
  map = new SimpleMap("map-container", 43.7955, -79.3496);

  // TODO: create click handlers for all three buttons.
  // The "All Species" button should call the showAll function.
  // The "Only Native Species" button should call the showOnlyNative function.
  // The "Only Introduced Species" button should call the showOnlyIntroduced function.
  // In your solution, show both ways of creating click event handlers (i.e.,
  // using the on* property and also addEventListener function).

  // Show all species observations by default when we start.
  showAll();
  document.getElementById('show-all').addEventListener("click", showAll);
  document.getElementById('show-native').onclick=function() {showOnlyNative()};
  document.getElementById('show-introduced').addEventListener("click", showOnlyIntroduced);
}
function fourth(filter,title){
  // Update the map and table
  updateMap(filter, map);
  updateTable(filter);
  updateTableTitle(title+ ` (${filter.length})`);

}

// TODO: replace this console.log with the code necessary to call the start
// function when the page has finished fully loading.
window.onload = (event) => {
  console.log('page is fully loaded');
  start();

};
