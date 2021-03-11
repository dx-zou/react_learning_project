import ReactJson from 'react-json-view';

const JsonView = () => {
  const my_json_object = {
    a: 1,
    b: 2,
    c: '111111111111111111111111111111111111111111111113',
  };
  return (
    <div>
      <ReactJson
        src={my_json_object}
        iconStyle='square'
        theme='google'
        displayDataTypes={false}
        displayObjectSize={false}
        collapseStringsAfterLength
      />
    </div>
  );
};

export default JsonView;
