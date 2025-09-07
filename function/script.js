 
  let coins = 100;
  const COIN_COST = 20;

 
  const coinCount = document.getElementById("coinCount");
  const callHistory = document.getElementById("callHistory");
  const clearBtn = document.querySelector(".clear-btn");


  function updateCoins() {
    coinCount.textContent = coins;
  }

  
  function makeCall(serviceName, serviceNumber) {
  
    if (coins < COIN_COST) {
      alert("You don't have enough coins to make this call!");
      return;
    }

   
    coins -= COIN_COST;
    updateCoins();

 
    alert(`Calling ${serviceName} at ${serviceNumber}...`);

    const entry = document.createElement("p");
    entry.textContent = `${serviceName} - ${serviceNumber}`;
    callHistory.prepend(entry);

  clearBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to clear call history?")) {
      callHistory.innerHTML = "";
    }
  });
   
  updateCoins();}