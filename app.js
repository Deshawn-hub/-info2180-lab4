document.addEventListener("DOMContentLoaded", () => {
    const Btn = document.getElementById("Btn");
    const resultDiv = document.getElementById("result");
    const qInput = document.getElementById("query");
  
    Btn.addEventListener("click", () => {
      const q = qInput.value.trim();
      const url = `superheroes.php?query=${encodeURIComponent(q)}`;
  
      // Clear previous results
      resultDiv.innerHTML = "Loading...";
  
      // Fetch data using AJAX
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error("Network error");
          }
          return response.text();
        })
        .then(data => {
          resultDiv.innerHTML = data;
        })
        .catch(error => {
          resultDiv.innerHTML = `<p style="color:red;">error: ${error.message}</p>`;
        });
    });
  });
  