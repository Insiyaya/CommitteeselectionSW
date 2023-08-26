const nameSelect = document.getElementById('name-select');
const selectedNamesInput = document.getElementById('selected-names');
const nameDropdownButton = document.getElementById('name-dropdown');

nameSelect.addEventListener('change', () => {
  const selectedOptions = Array.from(nameSelect.selectedOptions).map(option => option.text);
  selectedNamesInput.value = selectedOptions.join(', ');
});

nameDropdownButton.addEventListener('click', () => {
  const dropdownMenu = nameDropdownButton.nextElementSibling;
  dropdownMenu.classList.toggle('show');
});

