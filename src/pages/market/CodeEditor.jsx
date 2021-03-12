import { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';

const CodeEditor = () => {
  const [code] = useState(`export default{
    a:1,
    b:2
}`);
  const options = {
    selectOnLineNumbers: true,
  };
  const onCodeChange = () => {};
  return (
    <div>
      <MonacoEditor
        height='600'
        defaultValue={code}
        language='sql'
        options={options}
        onChange={onCodeChange}
        theme='vs-dark'
        value={code}
      />
    </div>
  );
};
export default CodeEditor;
