let exp = "";

function s_down(id) {
  try {
    switch (id) {
      case "_AC":
        // console.log(id);
        exp = "";
        document.getElementById("_exp").innerHTML = exp;
        document.getElementById("_res").innerHTML = exp;
        break;

      case "_9":
        // console.log(id);
        exp += "9";
        document.getElementById("_exp").innerHTML = exp;
        break;

      case "_8":
        console.log(id);
        exp += "8";
        document.getElementById("_exp").innerHTML = exp;
        break;

      case "_7":
        // console.log(id);
        exp += "7";
        document.getElementById("_exp").innerHTML = exp;
        break;

      case "_6":
        // console.log(id);
        exp += "6";
        document.getElementById("_exp").innerHTML = exp;
        break;

      case "_5":
        // console.log(id);
        exp += "5";
        document.getElementById("_exp").innerHTML = exp;
        break;

      case "_4":
        // console.log(id);
        exp += "4";
        document.getElementById("_exp").innerHTML = exp;
        break;

      case "_3":
        // console.log(id);
        exp += "3";
        document.getElementById("_exp").innerHTML = exp;
        break;

      case "_2":
        // console.log(id);
        exp += "2";
        document.getElementById("_exp").innerHTML = exp;
        break;

      case "_1":
        // console.log(id);
        exp += "1";
        document.getElementById("_exp").innerHTML = exp;
        break;

      case "_0":
        // console.log(id);
        exp += "0";
        document.getElementById("_exp").innerHTML = exp;
        break;

      case "_.":
        // console.log(id);
        exp += ".";
        document.getElementById("_exp").innerHTML = exp;
        break;

      case "_C":
        // console.log(id);
        if (exp.length > 1) {
          exp = exp.slice(0, exp.length - 1);
        } else {
          exp = "";
        }
        document.getElementById("_exp").innerHTML = exp;
        break;

      case "_%":
        // console.log(id);
        exp += "%";
        document.getElementById("_exp").innerHTML = exp;
        break;

      case "_/":
        // console.log(id);
        exp += "/";
        document.getElementById("_exp").innerHTML = exp;
        break;

      case "_*":
        // console.log(id);
        exp += "*";
        document.getElementById("_exp").innerHTML = exp;
        break;

      case "_-":
        // console.log(id);
        exp += "-";
        document.getElementById("_exp").innerHTML = exp;
        break;

      case "_+":
        // console.log(id);
        exp += "+";
        document.getElementById("_exp").innerHTML = exp;
        break;

      case "_(":
        // console.log(id);
        exp += "(";
        document.getElementById("_exp").innerHTML = exp;
        break;

      case "_)":
        // console.log(id);
        exp += ")";
        document.getElementById("_exp").innerHTML = exp;
        break;
    }
  } catch (err) {
    console.log("NOT WORKING");
  } finally {
    if (eval(exp)) {
      document.getElementById("_res").innerHTML = eval(exp);
    } else {
      document.getElementById("_res").innerHTML = "";
    }
  }
}

function s_up() {}
