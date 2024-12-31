function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


function downloadAndViewResume(e) {
    e.preventDefault();
    
    // Open for viewing in normal size
    const viewUrl = 'https://drive.google.com/file/d/1oJWLArfsjj5hStd_CvNu2ZoGiTbYfI3o/view';
    window.open(viewUrl, '_blank');
    
    // For direct download in new tab
    const downloadUrl = 'https://drive.google.com/uc?id=1oJWLArfsjj5hStd_CvNu2ZoGiTbYfI3o&export=download&confirm=t';
    const downloadLink = document.createElement('a');
    downloadLink.href = downloadUrl;
    downloadLink.target = '_blank'; // This opens in new tab
    downloadLink.setAttribute('download', 'resume.pdf');
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}


