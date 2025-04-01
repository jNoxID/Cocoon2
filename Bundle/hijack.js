// Ce fichier désactive le clic droit et les touches F12 et Ctrl+U... (!!!)

document.addEventListener("contextmenu", (event) =>
      event.preventDefault()
    );
    document.addEventListener("keydown", (event) => {
      if (
        (event.ctrlKey && event.key.toLowerCase() === "u") ||
        event.key === "F12"
      ) {
        event.preventDefault();
      }
    });