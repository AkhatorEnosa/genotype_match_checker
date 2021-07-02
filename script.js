var man = document.querySelector("#man");
var woman = document.querySelector("#woman");
var womanGroup = document.querySelector(".gene-group-woman");
var resultText = document.querySelector(".result-text");
var resultText2 = document.querySelector(".result-text2");
var result = document.querySelector(".result");
var check = document.querySelector(".check");
var modalClose = document.querySelector(".modal-close");
var manValue, womanValue = "";
var values = [];

function checkButtonControl(){
  if(values === [] || values.length < 2) {
    check.style.opacity = 0.8;
    check.disabled = true;
  } else {
    check.style.opacity = 1;
    check.disabled = false;
  }
}

function getManValue(e) {

  if(!e.target.matches("div#man") && !e.target.classList.contains("selected")){
    e.target.classList.add("selected");
    manValue = e.target.value;
    var notSelected = document.querySelectorAll("button.man:not(.selected)");
    notSelected.forEach(x => {
      x.disabled = true;
    });

    values.unshift(manValue);

	} else if(e.target.classList.contains("selected")){

		e.target.classList.remove("selected");
    var notSelected = document.querySelectorAll("button.man");
    notSelected.forEach(x => {
      x.disabled = false;
    });
    values.shift();

	}

  checkButtonControl();
  return values;
}

function getWomanValue(e) {

  if(!e.target.matches("div#woman") && !e.target.classList.contains("selected")){

    e.target.classList.add("selected");
    womanValue = e.target.value;
    var notSelected = document.querySelectorAll("button.woman:not(.selected)");
    notSelected.forEach(x => {
      x.disabled = true;
    });

    values.push(womanValue);

	} else if(e.target.classList.contains("selected")){

		e.target.classList.remove("selected");
    womanValue = "";
    var notSelected = document.querySelectorAll("button.woman");
    notSelected.forEach(x => {
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
  modalClose.style = "visibility: visible";

  if (newValues == JSON.stringify(["AA","AA"])) {

    resultText.textContent = "Result:  Excellent";
    resultText2.innerHTML = "<span>All kids will be <b>'healthy (AA)'</b>. <br/>(AA, AA, AA, AA)</span>";

  } else if (newValues == JSON.stringify(["AA","AS"]) || newValues == JSON.stringify(["AS","AA"])) {

    resultText.textContent = "Result:  Good";
    resultText2.innerHTML = "<span>1 in 2 kids will be <b>'carriers (AS)'</b>, the rest will be <b>AA</b>. <br/>(AA, AS, AA, AS) </span>";

  } else if (newValues == JSON.stringify(["AA","SS"]) || newValues == JSON.stringify(["SS","AA"])) {

    resultText.textContent = "Result:  Fair";
    resultText2.innerHTML = "<span>All kids will be <b>AS</b>. <br/>(AS, AS, AS, AS) </span>";

  } else if (newValues == JSON.stringify(["AA","AC"]) || newValues == JSON.stringify(["AC","AA"])) {

    resultText.textContent = "Result:  Good";
    resultText2.innerHTML = "<span>1 in 4 kids will be <b>AC</b>. The rest will be <b>AA</b>. <br/>(AA, AA, AA, AC) </span>";

  } else if (newValues == JSON.stringify(["AA","SC"]) || newValues == JSON.stringify(["SC","AA"])) {

    resultText.textContent = "Result:  Fair";
    resultText2.innerHTML = "<span>No additinal information for this at the moment. Thank you.</span>";

  } else if (newValues == JSON.stringify(["AS", "AS"])) {

    resultText.textContent = "Result:  Very Bad";
    resultText2.innerHTML = "<span>1 in 4 kids will be <b>SS</b>. 2 in 4 kids will be <b>AS</b>. 1 in 4 kids will be <b>AA</b>. <br/>(AA, AS, AS, SS)</span>";

  } else if (newValues == JSON.stringify(["AS","SS"]) || newValues == JSON.stringify(["SS","AS"])) {

    resultText.textContent = "Result:  Very Bad";
    resultText2.innerHTML = "<span>3 in 4 kids will be <b>SS</b>. The rest will be <b>AS</b>. <br/>(AS, SS, SS, SS) </span>";

  } else if (newValues == JSON.stringify(["AS","AC"]) || newValues == JSON.stringify(["AC","AS"])) {

    resultText.textContent = "Result:  Bad";
    resultText2.innerHTML = "<span>1 in 4 kids will be <b>SS</b>. 1 in 4 kids will be <b>AS</b>. 1 in 4 kids will be <b>AC</b>. 1 in 4 kids will be <b>AA</b>. <br/>(AA, AS, AC, SS)</span>";

  } else if (newValues == JSON.stringify(["AC","AC"])) {

    resultText.textContent = "Result:  Bad";
    resultText2.innerHTML = "<span>1 in 4 kids will be <b>SS</b>. 2 in 4 kids will be <b>AC</b>. 1 in 4 kids will be <b>AA</b>. <br/>(AA, AC, AC, SS)</span>";

  } else if (newValues == JSON.stringify(["AC","SS"]) || newValues == JSON.stringify(["SS","AC"])) {

    resultText.textContent = "Result:  Very Bad";
    resultText2.innerHTML = "<span>2 in 4 kids will be <b>AS</b>. 2 in 4 kids will be <b>SS</b>.<br/>(AS, AS, SS, SS)</span>";

  }  else if (newValues == JSON.stringify(["SS","SS"])) {

    resultText.textContent = "Result:  Very Bad";
    resultText2.innerHTML = "<span>All kids will be <b>'sicklers (SS)'</b>. <br/>(SS, SS, SS, SS)</span>";

  } else {

    resultText.textContent = "Result:  Very Bad";
    resultText2.innerHTML = "<span>No additinal information for this at the moment. Thank you.</span>";

  }
}

function closeModal() {
	modalClose.style.visibility = "hidden";
	result.style.visibility = "hidden";
}

// window.addEventListener('load', checkButtonControl)
man.addEventListener('click', getManValue);
woman.addEventListener('click', getWomanValue);
check.addEventListener('click', checkResult);
modalClose.addEventListener('click', closeModal)
