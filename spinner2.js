process.stdout.write('hello from spinner1.js... \rheyyy\n');
let delay = 0;
let spinner = ["\r| ", "\r/ ", "\r- ", "\r\\ ", "\r| "];
for (const i of spinner) {
    setTimeout(() => {
        process.stdout.write(i);
    }, delay += 200)

    
}