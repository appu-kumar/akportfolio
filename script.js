function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


function downloadResume(e) {
    e.preventDefault(); // Prevent default navigation

    setTimeout(() => {
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/uc?export=download&id=1oJWLArfsjj5hStd_CvNu2ZoGiTbYfI3o';
        link.download = 'resume.pdf'; // Filename for the downloaded file

        // Append the link to the body, trigger click, and remove it
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, 1000); // Delay of 1 second
}
