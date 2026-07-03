import React from 'react';
import MarkdownEditor from './MarkdownEditor';
import "../styles/App.css"

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Markdown Editor</h1>
      </header>
      <main>
        <MarkdownEditor />
      </main>
    </div>
  );
}

export default App;