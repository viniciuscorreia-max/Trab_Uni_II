// Versão base 0.1.0
const elCount = document.getElementById("count");
const elIncrement = document.getElementById("btn-increment");
const elDecrement = document.getElementById("btn-decrement");
const elToggleTheme = document.getElementById("btn-toggle-theme");
const elTitle = document.getElementById("title");

function setCount(newValue) {
  elCount.textContent = String(newValue);
}

let state = { count: 0, dark: false };

elIncrement.addEventListener("click", () => {
  state.count += 2; // <-- ALTERAÇÃO DO ALUNO C (incremento para 2)
  setCount(state.count);
});

elDecrement.addEventListener("click", () => {
  state.count -= 1;
  setCount(state.count);
});

elToggleTheme.addEventListener("click", () => {
  state.dark = !state.dark;
  document.documentElement.style.setProperty("--bg", state.dark ? "#0b1220" : "#f8fafc");
  document.documentElement.style.setProperty("--text", state.dark ? "#e2e8f0" : "#0f172a");
  
  // <-- ALTERAÇÃO DO ALUNO C (nova regra ajustando mais um elemento no toggleTheme)
  document.documentElement.style.setProperty("--card", state.dark ? "#1e293b" : "#ffffff"); 
  
  elTitle.textContent = state.dark ? "Mini App – Modo Escuro" : "Mini App – GitFlow";
  elToggleTheme.setAttribute("aria-pressed", String(state.dark));
});