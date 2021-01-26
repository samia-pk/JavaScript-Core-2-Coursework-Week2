function listOfColours(colours) {
  // Write your code here...

let content = document.getElementById('content');
  let BoxSelect = document.createElement('select');
  let paragraph = document.createElement('p');

  for (let color of colours) {
    let dropColor = document.createElement('option');
    dropColor.textContent = color;

    BoxSelect.appendChild(dropColor);
  }

  BoxSelect.add ('change', function () {
    paragraph.textContent = `You have selected ${BoxSelect.value}!`;
    paragraph.style.color = `${BoxSelect.value}`;
  });

  content.appendChild(paragraph);
  content.appendChild(BoxSelect);
  
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
