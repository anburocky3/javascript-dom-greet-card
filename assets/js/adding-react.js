import { createRoot } from './react-dom/client';


// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';


// Render your React component instead
const root = createRoot(document.getElementById('app'));

const h1El = document.createElement("h1")
h1El.innerText = "Hello, world"

root.render(h1El);
