import "./Card.css";


function card(props) {
    console.log("props", props);
return (
    <div className="Card">
         <img src={props.src} alt="" />
       <p>Name: {props.name}</p>
        <p>Birthday: {props.birthday}</p>
       <p>category: {props.category}</p>
        <p>Occupation: {props.occupation}</p>
        <p>Nickname: {props.nickname}</p>
        <p>Portrayed: {props.portrayed}</p>
    
    </div>
);
}

export default card;