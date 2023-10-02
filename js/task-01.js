const items = document.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);
items.forEach((li) => {
  console.log(`Category: ${li.firstElementChild.textContent}`);
  console.log(`Elements: ${li.lastElementChild.children.length}`);
});
