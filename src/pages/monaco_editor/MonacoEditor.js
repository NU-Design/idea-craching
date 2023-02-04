import React, { useState } from 'react';

import Editor from '@monaco-editor/react';

const MonacoEditor = (props) => {
  const [value, setValue] = useState(props.code || '');

  const handleEditorChange = (value) => {
    setValue(value);
    props.setViewCode(value);
  };

  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
      <Editor
        height="90vh"
        width={`100%`}
        language={'markdown'}
        value={value}
        theme={'oceanic-next'}
        defaultValue=""
        onChange={handleEditorChange}
      />
    </div>
  );
};
export default MonacoEditor;
