function validateForm() {
    var x = document.forms["formulario"]["name"].value;
    if (x == "([A-Z])\w+") {
        alert("Registre nombre");
        return false;
    }
}

validateForm();