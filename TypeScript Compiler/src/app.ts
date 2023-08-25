const Name = "Saad";

console.log("Time to get started...");

const btn = document.querySelector("button")!;

function clickHandler(message: string) {
  console.log("Clicked.." + message);
}

btn.addEventListener("click", clickHandler.bind(null, "Saad"));
