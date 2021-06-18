var manOption = document.querySelector(".man");
var womanOption = document.querySelector(".woman");
var womanGroup = document.querySelector(".gene-group-woman");
var result = document.querySelector(".result");
var check = document.querySelector(".check");
var manValue, womanValue = "";
var values = [];


function getManValue(e) {
  if(e.target && !e.target.classList.contains("selected")){
    e.target.classList.add("selected");
    e.target.style = "transform: rotate(360deg);";
    manValue = e.target.value;
    womanGroup.style.visibility = "visible";
    var notSelected = document.querySelectorAll("button.man:not(.selected)");
    notSelected.forEach(x => {
      x.style.cssText = "opacity: 0.2;";
      x.disabled = true;
    });
    // result.append(createPElement());
    // console.log(manValue);
    values.unshift(manValue);
	}else{
		e.target.classList.remove("selected");
    e.target.style = "transform: rotate(-360deg);";
    var notSelected = document.querySelectorAll("button.man");
    notSelected.forEach(x => {
      x.style.cssText = "opacity: 1;";
      x.disabled = false;
    });
    values.shift();
	}

  return values;
}

function getWomanValue(e) {
  if(e.target && !e.target.classList.contains("selected")){
    e.target.classList.add("selected");
    e.target.style = "transform: rotate(360deg);";
    womanValue = e.target.value;
    var notSelected = document.querySelectorAll("button.woman:not(.selected)");
    notSelected.forEach(x => {
      x.style.cssText = "opacity: 0.2;";
      x.disabled = true;
    });

    values.push(womanValue);
	}else{
		e.target.classList.remove("selected");
    e.target.style = "transform: rotate(-360deg);";
    womanValue = "";
    var notSelected = document.querySelectorAll("button.woman");
    notSelected.forEach(x => {
      x.style.cssText = "opacity: 1;";
      x.disabled = false;
    });
    values.pop();
	}
  return values
}


function createPElement() {
  if (values = ["AA","AA"]) {
    console.log("Excellent.");
  }
}

man.addEventListener('click', getManValue);
woman.addEventListener('click', getWomanValue);
check.addEventListener('click', createPElement);
