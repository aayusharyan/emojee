const searchEmoji = e => {
  e.preventDefault();
  const value = document.getElementById("search_field").value;
  displaySearchResults(value);
  return false;
}

const autoSearch = e => {
  const value = e.target.value;
  displaySearchResults(value);
}

const displaySearchResults = (searchQuery = "") => {

}

document.getElementById('search_form').addEventListener('submit', searchEmoji);
document.getElementById("search_field").addEventListener('keyup', autoSearch);

window.onload = _ => displaySearchResults();

console.log(emojiList);