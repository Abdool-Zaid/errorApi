fetch('')
fetch("https://starlit-chimera-256491.netlify.app/.netlify/functions/api/errors", {
  method: "get",
})
.then((response) => response.json())
.then((data) => {
  let errors = [];
  errors = data;
  
  errors.forEach((error) => {
      console.log('running')
        document.querySelector("#allErrors").innerHTML += `
        <div class="errorcard">
        <marquee behavior="scroll" direction="right">
            <h2>status: ${error.status} </h2>
        </marquee>
        <h3 dir="rtl">${error.name}:name </h3>
        <p>${error.description}</p>
    </div>
    `;
    });
  });
async function AddError(){
fetch("https://starlit-chimera-256491.netlify.app/.netlify/functions/api/errors", {
method:post,
})}
