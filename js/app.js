const search = (e) => {
    const input = e.target.value;
    const items = document.querySelectorAll(".search-item");
  
    items.forEach((item) => {
      item.classList.add("hidden");
      const roll = item.dataset.roll;
  
      if (roll === input) {
        item.classList.remove("hidden");
      }
    });
  };
  
  document.querySelector("#default-search").addEventListener("keyup", search);
  