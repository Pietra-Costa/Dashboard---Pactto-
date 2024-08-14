
// do / done -- homepage

document.addEventListener('DOMContentLoaded', () => {
    const toggleLinks = document.querySelectorAll('.toggle-link');

    toggleLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); 

            const href = link.getAttribute('href'); 
            const statusLink = link.closest('.dos').querySelector('.do');

            if (statusLink && statusLink.textContent.trim() === 'To do') {
                statusLink.textContent = 'Done';
                statusLink.classList.remove('do');
                statusLink.classList.add('done');
            }

            window.open(href, '_blank');
        });
    });
});


// upload button

document.addEventListener('DOMContentLoaded', (event) => {
    const uploadButton = document.getElementById('uploadButton');
    const fileInput = document.getElementById('fileInput');
    
    uploadButton.addEventListener('click', () => {
        fileInput.click(); 
    });
    
    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log('Selected file:', file);
            
        }
    });
});

