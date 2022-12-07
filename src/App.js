import { useEffect, useState } from 'react';
import './App.css';
import Detail from './component/detail/detail';
import List from './component/list/list';
import Loading from './component/loading/loading';
import Search from './component/search/search';

function App() {
  document.title = "유기동물 조회서비스";
  const [pets, setPets] = useState([]);
  const [selected, setSelected] = useState();
  const [uprCd, setUprCd] = useState();

  const [loading,setLoading] = useState(true);
  const key = process.env.REACT_APP_API_KEY;


  useEffect(() => {
    setLoading(true);
    fetch(`https://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=${key}&_type=json&numOfRows=30`)
      .then(response => response.json())
      .then(json => {
        setPets(json.response.body.items.item);
      }).catch(e => console.log(e));
    fetch(`https://apis.data.go.kr/1543061/abandonmentPublicSrvc/sido?numOfRows=17&serviceKey=${key}&_type=json`)
      .then(response => response.json())
      .then(json => setUprCd(json.response.body.items.item))
      .then(setLoading(false))
      .catch(e => console.log(e, "uprCd"))

  }, [])

  const handleSelected = (data) => {
    setSelected(data);
  }

  const handleSearch = (bgnde, endde, upr_cd = "6290000", upkind) => {
    setLoading(true);
    fetch(`https://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=${key}&_type=json&numOfRows=30&bgnde=${bgnde}&endde=${endde}&upr_cd=${upr_cd}${upkind}`)
      .then(response => response.json())
      .then(json => {
        setPets(json.response.body.items.item);
      }).then(_ => {
        setSelected(null);
      }).then(_=>setLoading(false))
      .catch(e => console.log(e));
  }

  const handleReset = ()=>{
    setSelected(null);
  }


let picked = selected?selected.desertionNo:""
  return (
    <div>
    {loading && <Loading/>}
    <div className="container">
      <Search onSearch={handleSearch} upr_cd={uprCd} />
      <hr />
      <br />
      <div className="app">

        {selected && <Detail target={selected} onReset={handleReset}/>}
        <List pets={pets} onSelected={handleSelected} picked={picked} />
      </div>
    </div>
      </div>
  );
}

export default App;
