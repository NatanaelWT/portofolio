const home = document.getElementById("home");
const cv = document.getElementById("cv");
const contact = document.getElementById("contact");
const btnHome = document.getElementById("btnHome");
const btnId = document.getElementById("btnId");
const btnContact = document.getElementById("btnContact");
function cvBtn() {
    btnId.classList = "active";
    btnHome.classList = "";
    btnContact.classList = "";
    home.style.display = "none";
    cv.style.display = "inline";
    contact.style.display = "none";
}
function homeBtn() {
    btnId.classList = "";
    btnHome.classList = "active";
    btnContact.classList = "";
    home.style.display = "inline";
    cv.style.display = "none";
    contact.style.display = "none";
}
function contactBtn() {
    btnId.classList = "";
    btnHome.classList = "";
    btnContact.classList = "active";
    home.style.display = "none";
    cv.style.display = "none";
    contact.style.display = "inline";
}