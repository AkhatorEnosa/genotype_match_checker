var manOption = document.querySelector(".man");
var womanOption = document.querySelector(".woman");
var womanGroup = document.querySelector(".gene-group-woman");
var result = document.querySelector(".result-text");
var check = document.querySelector(".check");
var manValue, womanValue = "";
var values = [];

function checkButtonControl(){
  console.log(values);
  if(values === [] || values.length < 2) {
    check.style.opacity = 0.2;
    check.disabled = true;
  } else {
    check.style.opacity = 1;
    check.disabled = false;
  }
}

function getManValue(e) {
  if(e.target && !e.target.classList.contains("selected")){
    e.target.classList.add("selected");
    e.target.style = "transform: rotate(360deg) scale(1.3);";
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

  checkButtonControl();
  return values;
}

function getWomanValue(e) {
  if(e.target && !e.target.classList.contains("selected")){
    e.target.classList.add("selected");
    e.target.style = "transform: rotate(360deg) scale(1.3);";
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

  checkButtonControl();
  return values
}


function checkResult() {
  var newValues = JSON.stringify(values);
  if (newValues == JSON.stringify(["AA","AA"])) {
    result.textContent = "Excellent.";
  } else if (newValues == JSON.stringify(["AA","AS"]) || newValues == JSON.stringify(["AS","AA"])) {
    result.textContent = "Good.";
  } else if (newValues == JSON.stringify(["AA","SS"]) || newValues == JSON.stringify(["SS","AA"])) {
    result.textContent = "Fair.";
  } else if (newValues == JSON.stringify(["AA","AC"]) || newValues == JSON.stringify(["AC","AA"])) {
    result.textContent = "Good.";
  } else if (newValues == JSON.stringify(["AS", "AS"])) {
    result.textContent = "Very Bad.";
  } else if (newValues == JSON.stringify(["AS","SS"]) || newValues == JSON.stringify(["SS","AS"])) {
    result.textContent = "Very Bad.";
  } else if (newValues == JSON.stringify(["AS","AC"]) || newValues == JSON.stringify(["AC","AS"])) {
    result.textContent = "Bad; Advice Needed(Contact Your Doctor).";
  } else if (newValues == JSON.stringify(["AC","AC"])) {
    result.textContent = "Bad; Advice Needed(Contact Your Doctor).";
  } else if (newValues == JSON.stringify(["AC","SS"]) || newValues == JSON.stringify(["SS","AC"])) {
    result.textContent = "Very Bad.";
  }  else if (newValues == JSON.stringify(["SS","SS"])) {
    result.textContent = "Very Bad.";
  } else {
    result.textContent = "Very Bad.";
  }
}

// window.addEventListener('load', checkButtonControl)
man.addEventListener('click', getManValue);
woman.addEventListener('click', getWomanValue);
check.addEventListener('click', checkResult);
