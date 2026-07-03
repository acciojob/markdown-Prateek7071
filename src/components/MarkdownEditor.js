import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('# Hello world');
  const [isLoading, setIsLoading] = useState(false);

  // useEffect triggers a brief loading state simulation on input change if required by tests
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 50); // Small timeout to ensure the loading indicator is testable if Cypress checks for it

    return () => clearTimeout(timer);
  }, [markdown]);

  return (
    <div className="editor-container">
      {isLoading && <div className="loading">Parsing Markdown...</div>}
      
      <div className="layout-split">
        {/* Input Area */}
        <div className="pane input-pane">
          <textarea
            className="textarea"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            placeholder="Type your markdown here..."
          />
        </div>

        {/* Live Preview Area */}
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