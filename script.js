function zoomImage(image) {
    if (image.classList.contains('zoomed')) {
        image.classList.remove('zoomed');
    } else {
        image.classList.add('zoomed');
    }
}
