function toggleCustomDropdown() {
    var dropdown = document.querySelector('.custom-dropdown');
    dropdown.classList.toggle('show');
}

window.onclick = function(event) {
    if (!event.target.matches('.custom-dropdown-btn')) {
        var dropdowns = document.getElementsByClassName("custom-dropdown");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
