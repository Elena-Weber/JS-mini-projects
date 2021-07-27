const photos = document.querySelectorAll('.room');
photos.forEach(photo => {
    photo.addEventListener('mouseover', () => {
        removeFocus();
        photo.classList.add('hovered');
    })
    removeFocus = () => {
        photos.forEach(photo => {
            photo.classList.remove('hovered');
        })
    }
})