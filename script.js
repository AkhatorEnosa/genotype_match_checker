var manOption = document.querySelector(".man");
var womanOption = document.querySelector(".woman");
var womanGroup = document.querySelector(".gene-group-woman");
var resultText = document.querySelector(".result-text");
var resultText2 = document.querySelector(".result-text2");
var result = document.querySelector(".result");
var check = document.querySelector(".check");
var manValue, womanValue = "";
var values = [];

function checkButtonControl(){
  console.log(values);
  if(values === [] || values.length < 2) {
    check.style.opacity = 0.8;
    check.disabled = true;
  } else {
    check.style.opacity = 1;
    check.disabled = false;
  }
}

function getManValue(e) {
  if(e.target && !e.target.classList.contains("selected")){
    e.target.classList.add("selected");
    // e.target.style = "transform: rotate(360deg) scale(1.3);";
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
    // e.target.style = "transform: rotate(-360deg);";
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
    // e.target.style = "transform: rotate(360deg) scale(1.3);";
    womanValue = e.target.value;
    var notSelected = document.querySelectorAll("button.woman:not(.selected)");
    notSelected.forEach(x => {
      x.style.cssText = "opacity: 0.2;";
      x.disabled = true;
    });

    values.push(womanValue);
	}else{
		e.target.classList.remove("selected");
    // e.target.style = "transform: rotate(-360deg);";
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
  result.style = "visibility: visible";
  if (newValues == JSON.stringify(["AA","AA"])) {

    resultText.textContent = "Excellent";
    resultText2.innerHTML = "<span>All kids will be <b>'healthy (AA)'</b>. <br/>(AA, AA, AA, AA)</span>";

  } else if (newValues == JSON.stringify(["AA","AS"]) || newValues == JSON.stringify(["AS","AA"])) {

    resultText.textContent = "Good";
    resultText2.innerHTML = "<span>1 in 2 kids will be <b>'carriers (AS)'</b>, the rest will be <b>AA</b>. <br/>(AA, AS, AA, AS) </span>";

  } else if (newValues == JSON.stringify(["AA","SS"]) || newValues == JSON.stringify(["SS","AA"])) {

    resultText.textContent = "Fair";
    resultText2.innerHTML = "<span>All kids will be <b>AS</b>. <br/>(AS, AS, AS, AS) </span>";

  } else if (newValues == JSON.stringify(["AA","AC"]) || newValues == JSON.stringify(["AC","AA"])) {

    resultText.textContent = "Good";
    resultText2.innerHTML = "<span>1 in 4 kids will be <b>AC</b>. The rest will be <b>AA</b>. <br/>(AA, AA, AA, AC) </span>";

  } else if (newValues == JSON.stringify(["AA","SC"]) || newValues == JSON.stringify(["AC","AA"])) {

    resultText.textContent = "Fair";
    resultText2.innerHTML = "<span>No additinal information for this at the moment. Thank you.</span>";

  } else if (newValues == JSON.stringify(["AS", "AS"])) {

    resultText.textContent = "Very Bad";
    resultText2.innerHTML = "<span>1 in 4 kids will be <b>SS</b>. 2 in 4 kids will be <b>AS</b>. 1 in 4 kids will be <b>AA</b>. <br/>(AA, AS, AS, SS)</span>";

  } else if (newValues == JSON.stringify(["AS","SS"]) || newValues == JSON.stringify(["SS","AS"])) {

    resultText.textContent = "Very Bad";
    resultText2.innerHTML = "<span>3 in 4 kids will be <b>SS</b>. The rest will be <b>AS</b>. <br/>(AS, SS, SS, SS) </span>";

  } else if (newValues == JSON.stringify(["AS","AC"]) || newValues == JSON.stringify(["AC","AS"])) {

    resultText.textContent = "Bad; Advice Needed(Contact Your Doctor)";
    resultText2.innerHTML = "<span>1 in 4 kids will be <b>SS</b>. 1 in 4 kids will be <b>AS</b>. 1 in 4 kids will be <b>AC</b>. 1 in 4 kids will be <b>AA</b>. <br/>(AA, AS, AC, SS)</span>";

  } else if (newValues == JSON.stringify(["AC","AC"])) {

    resultText.textContent = "Bad; Advice Needed(Contact Your Doctor)";
    resultText2.innerHTML = "<span>1 in 4 kids will be <b>SS</b>. 2 in 4 kids will be <b>AC</b>. 1 in 4 kids will be <b>AA</b>. <br/>(AA, AC, AC, SS)</span>";

  } else if (newValues == JSON.stringify(["AC","SS"]) || newValues == JSON.stringify(["SS","AC"])) {

    resultText.textContent = "Very Bad";
    resultText2.innerHTML = "<span>2 in 4 kids will be <b>AS</b>. 2 in 4 kids will be <b>SS</b>.<br/>(AS, AS, SS, SS)</span>";

  }  else if (newValues == JSON.stringify(["SS","SS"])) {

    resultText.textContent = "Very Bad";
    resultText2.innerHTML = "<span>All kids will be <b>'sicklers (SS)'</b>. <br/>(SS, SS, SS, SS)</span>";

  } else {

    resultText.textContent = "Very Bad";
    resultText2.innerHTML = "<span>No additinal information for this at the moment. Thank you.</span>";

  }
}

function closeModal() {
	result.style.visibility = "hidden";
}

// window.addEventListener('load', checkButtonControl)
man.addEventListener('click', getManValue);
woman.addEventListener('click', getWomanValue);
check.addEventListener('click', checkResult);
result.addEventListener('click', closeModal)
