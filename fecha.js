function updateCurrentDates() {
  const today = new Date();
  const locale = document.documentElement.lang === "ca-valencia" ? "ca-ES" : "es-ES";
  const formattedDate = new Intl.DateTimeFormat(locale, { dateStyle: "full" }).format(today);
  const currentDate = formattedDate.replace(/^./u, character => character.toLocaleUpperCase(locale));
  const dateTime = new Intl.DateTimeFormat("en-CA").format(today);

  for (const dateElement of document.querySelectorAll("[data-current-date]")) {
    dateElement.dateTime = dateTime;
    dateElement.textContent = currentDate;
  }
}

updateCurrentDates();
document.addEventListener("languagechange", updateCurrentDates);
