var name = prompt("ادخل اسمك")


if (name != "null")
document.body.querySelector("h1").textContent = "اهلا و سهلا " + name;
else
document.body.querySelector("h1").textContent = "اهلا و سهلا ";