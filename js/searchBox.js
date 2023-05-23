const searchBoxContainer = document.createElement('div');
searchBoxContainer.classList.add('searchbox-container');
document.body.appendChild(searchBoxContainer);

const searchBox = document.createElement('input');
searchBox.classList.add('searchbox-input');
searchBoxContainer.appendChild(searchBox);
searchBox.placeholder = 'Search book...';