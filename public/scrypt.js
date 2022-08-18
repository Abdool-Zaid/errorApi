console.log('running')
fetch('')
fetch("https://starlit-chimera-256491.netlify.app/.netlify/functions/api/errors", {
  method: "get",
})
  .then((response) => response.json())
  .then((data) => {
    let errors = [];
    errors = data;

    errors.forEach((error) => {
        document.querySelector("#allErrors").innerHTML += `
    <div class="Item"  onclick='showItem(this.id)' id="${error.staffID}" >
    <h1>${error.name}</h1>
    <img src="${error.image}" alt="${error.image}">
    <button>book me</button>
    </div>
    `;
    });
  });
async function AddError(){
fetch(' ')

}