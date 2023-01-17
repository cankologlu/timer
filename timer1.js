const typeOfEntry = process.argv.slice(2).every(element => {
  return !isNaN(parseInt(element))});

if(typeOfEntry) {
for (let when of process.argv.slice(2)) {
  setTimeout(()=> {
    process.stdout.write("\x07");
  }, Math.abs(when*1000));
};
}

console.log("Type of entry is;",typeOfEntry)
console.log("argv:", process.argv.slice(2))