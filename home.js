document.addEventListener("DOMContentLoaded", function () {
    var normalContainer = document.getElementById("normal-container");
    var hiddenContainer = document.getElementById("hidden-container");
    var toggleCheckbox = document.getElementById("toggle-checkbox");

    // Retrieve checkbox state from localStorage on page load
    var isChecked = JSON.parse(localStorage.getItem("isChecked")) || false;
    toggleCheckbox.checked = isChecked;
    normalContainer.classList.toggle("d-none", isChecked);
    hiddenContainer.classList.toggle("d-none", !isChecked);

    toggleCheckbox.addEventListener("change", function () {
        // Save checkbox state to localStorage
        localStorage.setItem("isChecked", toggleCheckbox.checked);
        normalContainer.classList.toggle("d-none", toggleCheckbox.checked);
        hiddenContainer.classList.toggle("d-none", !toggleCheckbox.checked);
    });
});
