let id = 0;

console.log(document.getElementById('add').className)

document.getElementById('add').addEventListener('click', (evt) => {
    let table = document.getElementById('tableStyle');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('first-name').value;
    row.insertCell(1).innerHTML = document.getElementById('last-name').value;
    row.insertCell(2).innerHTML = document.getElementById('idea').value;
    document.getElementById('first-name').value ='';
    document.getElementById('last-name').value ='';
    document.getElementById('idea').value ='';
})