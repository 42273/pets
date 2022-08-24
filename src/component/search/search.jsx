import { useRef } from "react";
import "./search.css"

function Search({ onSearch, upr_cd }) {

    const bgnde = useRef();
    const endde = useRef();
    const uprCd = useRef();
    const upkind = useRef();

    const list = upr_cd && upr_cd.map(e => {
        return <option value={e.orgCd} key={e.orgCd}> {e.orgdownNm}</option>
    })



    const searchHandle = evt => {
        evt.preventDefault();
        let kind = `&upkind=${upkind.current.value}`
        onSearch(bgnde.current.value.replaceAll("-", ""), endde.current.value.replaceAll("-", ""), uprCd.current.value, kind)


    }
    return (<div className="search">
        <form onSubmit={searchHandle} className="searchForm">
            <input type="date" ref={bgnde} />
            <input type="date" ref={endde} />
            <select ref={uprCd} className="searchSelect" >
                <option value="">전국</option>
                {list}
            </select>
            <select ref={upkind} className="searchSelect">
                <option value="">전체</option>
                <option value={417000}>개</option>
                <option value={422400}>고양이</option>
                <option value={429900}>기타</option>
            </select>
            <button type="submit">검색</button>
        </form>
    </div>);
}

export default Search;