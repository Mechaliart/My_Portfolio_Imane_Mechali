document.querySelector('.edit__video').addEventListener('click', function() {
    if (this.paused) {
        this.play();
       
    } else {
        this.pause();
    }
});
document.querySelector('.export__video').addEventListener('click', function() {
    if (this.paused) {
        this.play();
    } else {
        this.pause();
    }
});