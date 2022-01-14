import { useState, useEffect } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (e) => setKeyword(e.target.value);
  console.log('i run all the time');
  // const iRunOnlyOnce = () => {
  //   console.log('i run only once.');
  // };
  // useEffect(iRunOnlyOnce, []);
  useEffect(() => {
    console.log('CALL THE API....');
  }, []);
  useEffect(() => {
    if (keyword !== '' && keyword.length > 4) {
      console.log('SEARCH FOR', keyword);
    }
  }, [keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

export default App;
