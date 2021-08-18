var i=0
function hidden_button() {
    if (!i) {
        document.getElementById("hidden_img_3").style.display = "flex"
        i=1
    }
    else {
        document.getElementById("hidden_img_3").style.display = "none"
        i=0
    }

}