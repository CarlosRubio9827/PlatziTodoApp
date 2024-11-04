import React from "react";

function useLocalStorage(itemName, initialValue) {

  


  const [item, setItem] = React.useState(initialValue);

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    }, 2000);
  }, [initialValue, itemName]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };

// const defaultTodo = [
//     {
//       text: "Hacer la compra",
//       completed: false,
//     },
//     {
//       text: "Leer un libro",
//       completed: false,
//     },
//     {
//       text: "Preparar la cena",
//       completed: true,
//     },
//     {
//       text: "Llamar a un amigo",
//       completed: false,
//     },
//     {
//       text: "Limpiar la casa",
//       completed: true,
//     },
//     {
//       text: "Hacer la colada",
//       completed: false,
//     },
//     {
//       text: "Estudiar para el examen",
//       completed: false,
//     },
//     {
//       text: "Ver una película",
//       completed: true,
//     }
// ];
// JSON.stringify(defaultTodo)
// localStorage.setItem("TODO_V1", JSON.stringify(defaultTodo))
// localStorage.removeItem("TODO_V1");
