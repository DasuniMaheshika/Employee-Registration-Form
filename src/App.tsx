import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import AddForm from './components/AddForm';
import EditForm from './components/EditForm';
import Table from './components/Table';
import './App.css';

type Item = {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  departmentName: string;
};

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [editingItem, setEditingItem] = useState<Item | null>(null);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items') || '[]');
    setItems(storedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  function handleAdd(item: Item) {
    setItems([...items, item]);
  }

  function handleSave(item: Item) {
    const index = items.findIndex((i) => i.id === item.id);
    const newItems = [...items];
    newItems[index] = item;
    setItems(newItems);
    setEditingItem(null);
  }

  function handleDelete(id: string) {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  }

  return (
    <Container className="">
      {editingItem ? (
        <EditForm item={editingItem} onSave={handleSave} onCancel={() => setEditingItem(null)} />
      ) : (
        <>
          <AddForm onAdd={handleAdd} />
          <Table items={items} onEdit={(item) => setEditingItem(item)} onDelete={handleDelete} />
        </>
      )}
    </Container>
  );
}

export default App;
