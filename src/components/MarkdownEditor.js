import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
  // Changing this to a double newline forces a markdown block split
  const [markdown, setMarkdown] = useState('# Hello world\n\n');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 50);

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