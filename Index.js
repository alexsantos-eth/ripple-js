// Select surface
const surface = document.querySelectorAll('.waves');

// Create Circle
function ripple(e){
  // Create circle and set globals.
  let circle = document.createElement("div");
  let maxLarge = Math.max(this.clientWidth, this.clientHeight);
  let rectSurface = this.getBoundingClientRect();
  let time = (Math.log(maxLarge)/Math.log(Math.exp(1)))/11;
  
  // Set circle dimentions
  circle.style.width = circle.style.height = maxLarge + "px";
  circle.style.left = e.clientX - rectSurface.left -maxLarge/2 + "px";
  circle.style.top = e.clientY - rectSurface.top -maxLarge/2 + "px";
  
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