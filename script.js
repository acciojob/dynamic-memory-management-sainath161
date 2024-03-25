const limit = 50; // Heap memory usage limit in MB
let elements = []; // Array to hold generated DOM elements

// Function to generate DOM elements
const generateElements = () => {
  for (let i = 0; i < 10000; i++) {
    const element = document.createElement('div');
    elements.push(element);
    document.body.appendChild(element);
  }
  updateMemoryUsage();
};

// Function to remove DOM elements
const removeElements = () => {
  elements.forEach(element => {
    document.body.removeChild(element);
  });
  elements = [];
  updateMemoryUsage();
};

// Function to update memory usage display
const updateMemoryUsage = () => {
  const usedHeap = (window.performance.memory.usedJSHeapSize / (1024 * 1024)).toFixed(2);
  document.getElementById('memory').textContent = `Memory Usage: ${usedHeap} MB`;
  if (usedHeap > limit) {
    alert(`Memory usage has exceeded ${limit} MB. Please optimize your actions to reduce memory consumption.`);
  }
};

// Add event listeners to buttons
document.getElementById('generate').addEventListener('click', generateElements);
document.getElementById('remove').addEventListener('click', removeElements);

// Set interval to update memory usage every second
setInterval(updateMemoryUsage, 1000);
