import React, { useState } from 'react';

import Editor from '@monaco-editor/react';

const MonacoEditor = ({ code, theme }) => {
  const [value, setValue] = useState(code || '');

  const handleEditorChange = (value) => {
    setValue(value);
  };

  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
      <Editor
        height="85vh"
        width={`100%`}
        language={'markdown'}
        value={value}
        theme={theme}
        defaultValue="# Markdown Title"
        onChange={handleEditorChange}
      />
    </div>
  );
};
export default MonacoEditor;
