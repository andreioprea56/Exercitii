var blackFridayCart = {
    telefon: "350",
    consola: "250",
    televizor: "450",
    iepurasPlus: "10.60",
    cercei: "20.34",
    geanta: "22.36"
  };
  

function getCartValue(blackFridayCart){
    return blackFridayCart.telefon + blackFridayCart.consola + blackFridayCart.televizor + blackFridayCart.iepurasPlus + blackFridayCart.cercei +blackFridayCart.geanta;
}
  
 getCartValue(blackFridayCart);