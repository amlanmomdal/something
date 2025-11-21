import { useEffect, useState } from "react";
import { getTodos } from "../Api/todos/todos";
import type { TodoType } from "../type";


const List = () => {
    const [alertMessage, setAlertMessage] = useState("");
    const [item, setitem] = useState<TodoType[]>([])

    useEffect(() => {
        console.log("List component mounted");
        getTodos().then(data => {
            console.log("Fetched todos:", data);
            setitem(data);
        });
    }, []);



    const deleteItem = (id: number, itemName: string) => {
        setitem((prevItems) => prevItems.filter((it: TodoType) => it.id !== id));
        setAlertMessage(`${itemName} has been disappear.`)
    }
    

    return (
    <>
        <h2 className="text-lg font-semibold mb-4 text-red-700">Click to make it disappear ❌</h2>
        <p className="mb-4 rounded-lg bg-red-100 text-red-700" role="alert">
            {alertMessage}
        </p>
        <ul>
            {item.map((todo: TodoType) => (
                <li key={todo.id}
                    onClick={() => {
                        deleteItem(todo.id, todo.title)
                    }}
                    className="cursor-pointer px-4 py-2 mb-2 rounded-lg bg-gray-100 hover:bg-red-100 hover:text-red-900 transition-all duration-300 shadow-sm hover:shadow-md text-black">
                    {todo.title}
                </li>
            ))}
        </ul>
    </>
    );

};

export default List;