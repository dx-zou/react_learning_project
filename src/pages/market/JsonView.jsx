import ReactJson from 'react-json-view';

const JsonView = () => {
  const my_json_object = {
    a: 1,
    b: 2,
    c: '11',
    d: {
      a: 1,
      b: 'feeng',
    },
  };
  return (
    <div>
      <ReactJson
        src={my_json_object}
        iconStyle='square'
        theme='monokai'
        name='root'
        indentWidth={4}
        collapsed={false}
        quotesOnKeys
        displayDataTypes={false}
        displayObjectSize={false}
        displayArrayKey
        collapseStringsAfterLength
        enableClipboard={false}
        onEdit={() => {}}
        onAdd={() => {}}
      />
    </div>
  );
};

export default JsonView;
