import 'reflect-metadata';

import ReactDOM from 'react-dom/client';

import App from './App';

function main() {
  const container = document.getElementById('root');

  if (!container) {
    return;
  }

  const root = ReactDOM.createRoot(container);

  return root.render(<App />)
}

main();