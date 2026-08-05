const tabs = document.querySelectorAll(".tab");


tabs.forEach(tab=>{

tab.onclick=function(){

tabs.forEach(t=>t.classList.remove("active"));

this.classList.add("active");

}

});

const fromField = document.getElementById("fromField");
const toField = document.getElementById("toField");

if (fromField) {
    fromField.addEventListener("click", function () {
        // Open the From popup
    });
}

if (toField) {
    toField.addEventListener("click", function () {
        // Open the To popup
    });
}

const mailBtn = document.getElementById("mailBtn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");

if (mailBtn && popup && closeBtn) {
    mailBtn.addEventListener("click", function () {
        popup.classList.toggle("active");
    });

    closeBtn.addEventListener("click", function () {
        popup.classList.remove("active");
    });
}