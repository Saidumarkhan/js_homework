let n = 32000;

for (let i = 1; i <= 10; i++) {
    let kg = i / 10; // Get the weight in increments of 0.1 kg
    let c = kg * n;
    console.log(`${kg}kg konfet narxi ${c} so'm`);
}
