import React, { useState } from 'react';

const Task = ({ task, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(task);

    const handleEdit = () => {
        if (isEditing) {
            onEdit(task, editValue); // Llama a la función onEdit cuando se guarda
        }
        setIsEditing(!isEditing); // Cambia el modo de edición
    };

    return (
        <li className="p-2 border-b border-gray-200 flex justify-between items-center">
            {isEditing ? (
                <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className="border p-1"
                />
            ) : (
                <span>{task}</span>
            )}
            <div>
                <button onClick={handleEdit} className="bg-yellow-500 p-1 text-white ml-2 hover:bg-yellow-700">
                    {isEditing ? 'Guardar' : 'Editar'}
                </button>
                <button onClick={() => onDelete(task)} className="bg-red-500 p-1 hover:bg-red-700 text-white ml-2">
                    Eliminar
                </button>
            </div>
        </li>
    );
};

export default Task;
