
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  function redirectToHTML() {
    window.location.href = 'index2.html'; // Replace 'path/to/another-page.html' with the path to your HTML file
  }
  