import "./list.css"
import Item from "../item/item";

function List(props) {
    let picked = props.picked?props.picked:""

    return (
        <div className="list">
            {props.pets.map(pet => {
                return <Item key={pet.desertionNo} data={pet} onSelected={props.onSelected} picked={picked} />
            })}
        </div>
    );
}

export default List;