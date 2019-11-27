// Select surface
const surface = document.querySelectorAll('.waves');

// Create Circle
const ripple = e => {
  // Create circle and set globals.
  let circle = document.createElement("div");
  let d = Math.max(this.clientWidth, this.clientHeight);
  let rect = this.getBoundingClientRect();
  let time = (Math.log(d)/Math.log(Math.exp(1)))/11;
  
  // Set circle dimentions
  circle.style.width = circle.style.height = d + "px";
  circle.style.left = e.clientX - rect.left -d/2 + "px";
  circle.style.top = e.clientY - rect.top -d/2 + "px";
  
  // Add style and animation time
  circle.classList.add("ripple");
  circle.style.animation = `ripple ${time}s ease-in`;
  
  // Set dark ripple
  if(this.classList.contains("waves-dark")) circle.classList.add("ripple-dark");
  
  // Add to element and destroy
  this.appendChild(circle);
  setTimeout(() => this.removeChild(circle),time*1000); 
}

// Add event
for(let i=0;i<surface.length;i++) surface[i].addEventListener('click', ripple);