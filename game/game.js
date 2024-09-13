window.onload = function () {
  let currentPlayer = "X";
  const cells = document.querySelectorAll(`.cell`);
  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      if (cell.textContent === "") {
        cell.textContent = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    });
  });
  function resetGame() {
    cells.forEach((cell) => {
      cell.textContent = "";
    });
    currentPlayer = "X";
  }
  const resetButton = document.querySelector("button");
  resetButton.addEventListener("click", resetGame);
};

// let boardZustand = ["", "", "", "", "", "", "", "", ""]; // 상태
// let currentPlayer = "X"; // player
// let active = true;
// const gameBoard = document.querySelectorAll(".cell");
// function resetForm() {
//   document.getElementById("resetForm").reset();
// 게임이 시작되먄 -true, 게임이 끝나면 false

//function handleCellClick(event) {
//const clickedCell = event.target;
//const clickedCellIndex = Array.from(cells).indexOf(clickedCell);
//}

//boardState[clickedCellIndex] = currentPlayer;
//lickedCell.textContent = currentPlayer;

//checkWinner();

//function checkWinner() {
// const winnerCombinations = [];

// player = x / o // oneclick - turn change
// 012 // 345// 678//048,246/// 036 147 258
// const containerBoard = document.getElementById(".container");
// const board = document.getElementsByClassName("nummer");
// const player = [`X`, `O`];
// const aktuellerSpieler = "X";
// const winnerCombination = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6],
// const endMessage = document.createElement('h2')
// endMessage.textContent = `X's turn!`
// endMessage.style.marginTop = '30px'
// endMessage.style.textAlign='center'
// var someoneWon = false;
