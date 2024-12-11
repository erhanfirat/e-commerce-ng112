const sifirdanYuzeKadarRastgeleCiftSayiBul = () => {
  return new Promise((resolve, reject) => {
    console.log("düşünüyoruummm…");
    setTimeout(() => {
      const sayi = Math.floor(Math.random() * 100);
      if (sayi % 2 === 0) {
        resolve(sayi);
      } else {
        reject(sayi);
      }
    }, 3000);
  });
};

const sayiPromise = sifirdanYuzeKadarRastgeleCiftSayiBul();

sayiPromise
  .then((ciftSayi) => {
    console.log("Çift Sayı: ", ciftSayi);
  })
  .catch((tekSayi) => {
    console.log("Tek sayı: ", tekSayi);
  });



  const logSayi = async () => {
    const sayi = await sifirdanYuzeKadarRastgeleCiftSayiBul();
    console.log("sayi: ", sayi);
  };
  
  logSayi();
