import { useEffect, useState } from 'react';

export default function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [value, setValue] = useState(0);

  function onChange(event) {
    return setValue(event.target.value);
  }
  console.log(coins);
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json()) //data를 json로 변환하여 응답 확인
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []); //useEffect의 첫번째 인자는 한번만 실행하고 싶은 코드이다.
  return (
    <div>
      <h1>The Coins!{loading ? null : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading</strong>
      ) : (
        <select>
          {coins.map((coin) => {
            return (
              <option key={coin.id}>
                {coin.name} ({coin.symbol}):${coin.quotes.USD.price}USD
              </option>
            );
          })}
        </select>
      )}
      <div>
        <input
          placeholder="please Enter your money"
          value={value}
          onChange={onChange}
        ></input>
        <h2>
          <ul>
            {coins
              .filter((coin) => coin.quotes?.USD?.price > Number(value)) // 기준가격에 원하는 값 입력
              .map((coin) => (
                <li key={coin.id}>
                  {coin.name}: ${coin.quotes?.USD?.price?.toFixed(2)}
                </li>
              ))}
          </ul>
        </h2>
      </div>
    </div>
  );
}
