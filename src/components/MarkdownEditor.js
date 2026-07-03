import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
  // Start with an empty string so the test runner's typing input isn't concatenated
  const [markdown, setMarkdown] = useState('');

  return (
    <div className="editor-container">
      <div className="layout-split">
        {/* Input Pane */}
        <div className="pane input-pane">
          <textarea
            className="textarea"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            placeholder="Type your markdown here..."
          />
        </div>

        {/* Live Preview Pane */}
        <div className="pane preview-pane">
          <div className="preview">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkdownEditor;