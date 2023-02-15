const chars = ['|', '/', '-', '\\'];
let i = 0;

setInterval(() => {
  process.stdout.write(`\r${chars[i]}   `);
  i = (i + 1) % chars.length;
}, 200);