function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (!file) {
        alert('Please select a file.');
        return;
    }

    // Check file extension or MIME type
    const allowedTypes = ['text/csv', 'application/vnd.ms-excel']; // common CSV MIME types
    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (fileExtension !== 'csv' && !allowedTypes.includes(file.type)) {
        alert('Please upload a valid CSV file.');
        return;
    }

    const formData = new FormData();
    formData.append('file', file);

    fetch('http://localhost:8000/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch(err => {
        console.error(err);
        alert("Upload failed");
    });
}
