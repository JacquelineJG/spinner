let rotations = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   \n']
let timer = 100;
rotations.forEach(frame => { setTimeout(() => {
  process.stdout.write(frame)
}, timer);
timer += 200; 
})  
