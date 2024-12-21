import { MouseEvent } from "react";

function ListGroup(){

const items = ["new york", "Tokyo", "london", "malappuram"]

const handleClick = (event: MouseEvent) => console.log(event)

    return (
    <>
        <h1>List</h1>
        <ul className="list-group">
            {items.map((item) => 
            (<li 
                key={item} 
                className='list-group-item'
                onClick={handleClick}>
                {item}
                </li>
            ))}  {/*instead of for loop we use map. while using this method key should be used*/}
        </ul>
    </>
    );
}

export default ListGroup