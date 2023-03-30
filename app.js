document.querySelector("#push").onclick = function () {
  if (document.querySelector("#ntask input").value.length == 0) {
    alert("ENTER DA TASK!!!");
  } else {
    addTask();
    delTask();
    removeTask();
  }
};
document.getElementById("all").addEventListener("click", () => {
  document.getElementById("tas").style.cssText =
    "display : flex; flex-direction : column;";
  document.getElementById("com").style.cssText =
    "display : flex; flex-direction : column;";
});
document.getElementById("active").addEventListener("click", () => {
  document.getElementById("com").style.cssText =
    "display : none; flex-direction : column;";
  document.getElementById("tasks").style.cssText =
    "display : flex; flex-direction : column;";
});
document.getElementById("completed").addEventListener("click", () => {
  document.getElementById("tas").style.cssText =
    "display : none; flex-direction : column;";
  document.getElementById("com").style.cssText =
    "display : flex; flex-direction : column;";
});

function addTask() {
  return (
    (document.querySelector("#tasks").innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector("#ntask input").value}
                </span>
                <button class="delete">
                    <img src="./media/trash-outline.svg" alt="" />
                </button>
            </div>
        `),
    (document.querySelector("#ntask input").value = "")
  );
}
function delTask() {
  const current_tasks = document.querySelectorAll(".delete");
  for (let i = 0; i < current_tasks.length; i++) {
    current_tasks[i].onclick = function () {
      this.parentNode.remove();

      return (document.querySelector("#comp").innerHTML += `
          <div class="comp">
              <span id="taskname">
                  ${this.parentNode.textContent}
              </span>
              <button class="remove">
                  <img src="./media/done-all-outline.svg" alt="" />
              </button>
          </div>
      `);
    };
  }
}
function removeTask() {
  const c_tasks = document.querySelectorAll(".remove");
  for (let j = 0; j < c_tasks.length; j++) {
    c_tasks[j].onclick = function () {
      return this.parentNode.remove();
    };
  }
}
