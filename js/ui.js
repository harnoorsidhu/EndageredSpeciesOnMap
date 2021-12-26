
function updateTableTitle(title) {

  let s = document.getElementById("table-title");

  s.getElementsByTagName('span')[0].textContent=title;
console.log(s);

}



function addRowToTable(row) {


    let s = document.getElementById("rows");

    s.appendChild(row);


}


// Remove all content from the table body element with id=rows
function clearAllTableRows() {

  let s = document.getElementById("rows");
  s.textContent="";
}


function createTableRow(id) {

  var r =document.createElement('tr');
  r.id= id;
  document.getElementById("rows").appendChild(r);
  return r;
}


function createTableCell(child) {

  var r =document.createElement('td');

  r.appendChild(child);
  return r;
}


function addContentToRow(child, row) {


  let k= createTableCell(child);

  row.appendChild(k);
}


function createImg(src, alt) {

    var r =document.createElement('img');
    r.setAttribute('src', src);
      r.setAttribute('alt', alt);

    return r;
}


function createText(text) {

  var TextNode = document.createTextNode(text);
  return TextNode;

}


function createAnchor(href, innerContent) {

    var r =document.createElement('a');
    r.href=href;
    r.appendChild(innerContent);
  return r;
}


function createTime(formatted) {

  var r =document.createElement('time');
  r.datetime=formatted;
  r.textContent=formatted;
  return r;
}


function toYesNo(value) {

  if(value){
    return 'yes';
  }
  else{
    return 'no';
  }
}


function buildRowForObservation(observation) {

  const row = createTableRow(observation.id);

  let photo = createImg(observation.photoUrl,observation.name);
  const observationLink = createAnchor(observation.uri, photo);


  addContentToRow(observationLink, row);


  const time = createTime(observation.date.toLocaleDateString());
  addContentToRow(time, row);


  const name = createText(observation.name);
  const wikipediaLink = createAnchor(observation.wikipediaUrl, name);
  addContentToRow(wikipediaLink, row);


  ["isEndangered", "isNative", "isThreatened", "isIntroduced"].forEach(
    (characteristic) => {
      const yesNoText = toYesNo(observation[characteristic]);
      const yesNoNode = createText(yesNoText);
      addContentToRow(yesNoNode, row);
    }
  );

  
return row;
}
