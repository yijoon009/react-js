import { useState, useEffect } from "react";

function App() {
  //로딩을 위한거
  const [loading, setLoading] = useState(true);
  //coin을 담을 임시 []
  const [coins, setCoins] = useState([]);
  const [dollar, setDollar] = useState();
  const [cost, setCost] = useState(1);
  const onSelectChange = (event) => {
    setCost(event.target.value);
    // console.log(event.target.value);
  };
  const onInputChange = (event) => {
    setDollar(event.target.value);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select onChange={onSelectChange}>
            <option>Select The Coin.</option>
            {coins.map((coin) => (
              <option key={coin.id} value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
          <br />
          <input
            value={dollar}
            onChange={onInputChange}
            type="number"
            placeholder="How much $ you have?"
          ></input>
          <br />
          <h2>You can get {dollar / cost}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
