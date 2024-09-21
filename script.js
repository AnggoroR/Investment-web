// Berikut adalah coding dari javascript yang memiliki fungsi pada dropdown yang terletak di navbar. Jika pengguna mengklik sesuatu di luar menu dropdown maka otomatis menu dropdownnya akan tertutup.

function myFunction() {
    document
        .getElementById("myDropdown")
        .classList
        .toggle("show");
}

//Tutup menu dropdown jika pengguna mengklik di luar menunya
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i=0; i<dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown
                    .classList
                    .remove('show');
            }
        }
    }
}