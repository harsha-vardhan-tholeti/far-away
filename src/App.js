import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import List from "./components/list/List";
import Footer from "./components/footer/Footer";

function App() {
  const [items, setItems] = useState([]);
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    setItems(storedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const newItem = {
    description,
    quantity,
    packed: false,
    id: Date.now(),
  };

  const addItem = (e) => {
    e.preventDefault();

    if (!description) {
      alert("Please Enter the item");
      return;
    }

    setItems((prevItems) => {
      const updatedItems = [...prevItems, newItem];
      return updatedItems;
    });

    setQuantity(1);
    setDescription("");
  };

  const clearItems = () => {
    setItems([]);
  };

  const deleteItem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const checkItem = (itemId) => {
    const itemIndex = items.findIndex((item) => item.id === itemId);

    if (itemIndex !== -1) {
      const updatedItems = [...items];
      updatedItems[itemIndex].packed = !updatedItems[itemIndex].packed;
      console.log(updatedItems);
      setItems(updatedItems);
    }
  };

  const sortItems = (sortBy) => {
    switch (sortBy) {
      case "SORT BY INPUT ORDER":
        break;
      case "SORT BY PACKED STATUS":
        setItems((prevItems) =>
          [...prevItems].sort((a, b) =>
            a.packed === b.packed ? 0 : a.packed ? 1 : -1
          )
        );
        break;
      case "SORT BY DESCRIPTION":
        setItems((prevItems) =>
          [...prevItems].sort((a, b) =>
            a.description.localeCompare(b.description)
          )
        );
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Header />
      <Form
        addItem={addItem}
        quantity={quantity}
        setQuantity={setQuantity}
        description={description}
        setDescription={setDescription}
      />
      <List
        items={items}
        checkItem={checkItem}
        deleteItem={deleteItem}
        sortItems={sortItems}
        clearItems={clearItems}
      />
      <Footer items={items} />
    </>
  );
}

export default App;
