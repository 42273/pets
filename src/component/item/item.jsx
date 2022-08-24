import "./item.css"

function Item({ data, onSelected, picked }) {

    let classes = "inform"


    if(picked === data.desertionNo){
        classes = "inform bold"
    }

    let originDt = data.happenDt.slice(2)
    let dt = [originDt.slice(0,2),originDt.slice(2,4),originDt.slice(4)].join("/")
    return (<div className="item" onClick={() => onSelected(data)}>
        <img src={data.filename} alt="thumbnail" className="thumbnail" />
        <div className={classes}>
            <p>
                {data.kindCd} ({data.colorCd})
            </p>
            <p>
                {data.orgNm} {data.happenPlace}
            </p>
            <p className="dt">
                {dt}
            </p>
        </div>
    </div>
    );
}

export default Item;