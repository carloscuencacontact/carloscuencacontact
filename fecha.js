const today = new Date();
const currentDate = new Intl.DateTimeFormat("es-ES", { dateStyle: "full" }).format(today);

for (const dateElement of document.querySelectorAll("[data-current-date]")) {
  dateElement.dateTime = new Intl.DateTimeFormat("en-CA").format(today);
  dateElement.textContent = currentDate;
}
