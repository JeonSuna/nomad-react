import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
function Detail() {
  const { id } = useParams(); //id를 받아올 때 useParams를 이용한다
  console.log(id); //{id: '59933'}
  //useParams() 함수를 사용하면 react Router가 변수값 (id)를 넘겨준다
  async function getMovie() {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    console.log(json);
  }
  useEffect((s) => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
}
export default Detail;
