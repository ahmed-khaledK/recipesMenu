async function getMeal(id="carrot") { 
  var response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${id}`);
  var data = await response.json();
  display(data.recipes);
}
getMeal();

function display(arr) {
  var cartona = '';
  for (var i = 0; i < arr.length; i++) {
      cartona += `
          <div class="col-8 col-sm-6 col-md-4 col-lg-3">
              <div class="card">
                  <img src="${arr[i].image_url}" class="card-img-top" alt="food">
                  <div class="card-body">
                      <p class="card-text">${arr[i].title}</p>
                  </div>
              </div>
          </div>`;
  }
  document.getElementById('row-body').innerHTML = cartona;
}

var btns = document.querySelectorAll('.nav-link');
console.log(btns);
 
for (var btn = 0; btn < btns.length; btn++) { 
  btns[btn].addEventListener('click', function(e) {
 getMeal(e.target.innerHTML);
  });
}

function navBarCollapse() {
  let navBarButton = document.getElementById('hamburger');
  let collapseMenu = document.getElementById('toggleDrop');
  if (navBarCollapse) {
      navBarButton.addEventListener('click', () => {
        collapseMenu.classList.toggle("visually-hidden");
})
};
}
navBarCollapse();


