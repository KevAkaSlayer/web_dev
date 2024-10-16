localStorage.setItem('name', 'John');


const  addTo = () => {
    const id = document.getElementById('storage-id').value;
    const value = document.getElementById('storage-value').value;

    localStorage.setItem(id, value);
    id = '';
    value = '';
}