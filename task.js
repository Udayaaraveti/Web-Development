// script.js

document.addEventListener("DOMContentLoaded", function() {
    const annualToggle = document.getElementById("annualToggle");
  
    annualToggle.addEventListener("change", function() {
      const prices = document.querySelectorAll(".price");
  
      prices.forEach(price => {
        const monthlyPrice = price.querySelector(".monthly");
        const annualPrice = price.querySelector(".annual");
  
        if (annualToggle.checked) {
          monthlyPrice.style.display = "none";
          annualPrice.style.display = "block";
        } else {
          monthlyPrice.style.display = "block";
          annualPrice.style.display = "none";
        }
      });
    });
  });