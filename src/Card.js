import "./Card.css";


function card(props) {
    console.log("props", props);
return (
    <div className="Card">
     <img className="img" src={props.img} alt="" />
       <p className="p1">{props.name}</p>
        <p className="p2">{props.birthday}</p>
       <p className="p3">{props.category}</p>
        <p className="p4">{props.occupation}</p>
        <p className="p5">{props.nickname}</p>
        <p className="p6">{props.portrayed}</p>
    
    </div>
);
}

export default card;