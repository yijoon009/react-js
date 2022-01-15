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
    console.log('i run when "keyword" changes.');
  }, [keyword]);
  useEffect(() => {
    console.log('i run when "counter" changes.');
  }, [counter]);
  // 아래는 keyword 나 counter 둘중에 하나라도 변경되면 실행되는 코드
  useEffect(() => {
    console.log('i run when keyword and counter changes');
  }, [keyword, counter]);
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
