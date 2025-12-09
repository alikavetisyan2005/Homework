async function double(n) {
return await new Promise(resolve => setTimeout(() => resolve(n * 2), 300));
}
console.log(await double(4))