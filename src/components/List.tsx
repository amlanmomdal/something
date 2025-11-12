import { useState } from "react";

const List = () => {
    const [alertMessage, setAlertMessage] = useState("");
    const [item, setitem] = useState([
        { id: 1, text: 'Kawasaki Ninja H2R' },
        { id: 2, text: 'Kawasaki Ninja 1000' },
        { id: 3, text: 'Ducati Panigale V4' },
    ])
    const deleteItem = (id: number, itemName: string) => {
        setitem(item.filter(it => it.id !== id))
        setAlertMessage(`${itemName} has been disappear.`)
    }
    return (
        <>
            <h2 className="text-lg font-semibold mb-4 text-red-700">Click to make it disappear ❌</h2>
            <p className="mb-4 rounded-lg bg-red-100 text-red-700" role="alert">
                {alertMessage}
            </p>
            <ul>
                {item.map(item => (
                    <li onClick={() => deleteItem(item.id, item.text)} key={item.id}>{item.text}</li>

                ))}
            </ul>
        </>
    );
};

export default List;