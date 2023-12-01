let n = 99;

if (n >= 10 && n <= 99) {
    let birinchiRaqam = n % 10; // Birinchi raqamni topish
    let ikkinchiRaqam = Math.floor(n / 10); // Ikkinchi raqamni topish
    let yangiSon = birinchiRaqam * 10 + ikkinchiRaqam; // Raqamlarni almashtirib, yangi sonni hisoblash
    if (yangiSon <= n)   {
        console.log(true);
    }else{
        console.log(false);
    }
}