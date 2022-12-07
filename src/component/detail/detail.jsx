import { useEffect, useRef} from "react";
import "./detail.css"

function Detail({ target,onReset }) {

    const detail = useRef();
    useEffect(()=>{
        if(!detail.current){
            return;}
        detail.current.scrollIntoView({behavior:"smooth"})
    },[target])

    return (<div className="detail" ref={detail}>
        <div className="inform">
            <div>

                <h2>
                    {target.kindCd} {target.colorCd}
                </h2>
                <p>
                    {target.age} {target.weight} 보호일자({target.happenDt})
                    <button className="detailBt" onClick={onReset}>뒤로가기</button>
                </p>
                <br />
                <p>
                    비고 : {target.specialMark}
                </p>
                <p style={{ textAlign: "center", fontSize: 30 }} >
                    <br />
                    <b><i>{target.processState}</i></b>
                    <br />
                    <span style={{ fontSize: 20 }}>
                        -{target.careNm}-
                        <br />
                        -{target.careTel}-
                    </span>
                </p>
                <br />
                <img src={target.popfile} alt="popfile" className="popfile" />
            </div>
        </div>
    </div>
    );
}

export default Detail;