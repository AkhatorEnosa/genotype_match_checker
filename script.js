var ul = document.querySelector("#man");
var manValue = "";

function getButton(e) {
  if(e.target && !e.target.classList.contains("selected")){
    e.target.classList.add("selected");
    manValue = e.target.value;
    var notSelected = document.querySelectorAll("button.man:not(.selected)");
    notSelected.forEach(x => {
      x.style.cssText = "opacity: 0.5; transform: scale(0.5)";
      x.disabled = true;
    });

    console.log(manValue);
	}else{
		e.target.classList.remove("selected");
    manValue = "";
    var notSelected = document.querySelectorAll("button.man");
    notSelected.forEach(x => {
      x.style.cssText = "opacity: 1; transform: scale(1)";
      x.disabled = false;
    });
    console.log(manValue)
	}
}

ul.addEventListener('click', getButton)
