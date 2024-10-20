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
                <button onClick={handleEdit} className="text-yellow-500 ml-2">
                    {isEditing ? 'Guardar' : 'Editar'}
                </button>
                <button onClick={() => onDelete(task)} className="text-red-500 ml-2">
                    Eliminar
                </button>
            </div>
        </li>
    );
};

export default Task;
