// src/App.tsx
import React, { useState, useEffect } from 'react';
import './App.css';
import { db } from './firebase-config';
import { collection, addDoc, getDocs, updateDoc, doc } from "firebase/firestore";

function App() {
  const [notifications, setNotifications] = useState<any[]>([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const querySnapshot = await getDocs(collection(db, "notifications"));
      setNotifications(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };

    fetchNotifications();
  }, []);

  const addNotification = async (message: string) => {
    await addDoc(collection(db, "notifications"), {
      message,
      read: false
    });
    const querySnapshot = await getDocs(collection(db, "notifications"));
    setNotifications(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  };

  const markAsRead = async (id: string) => {
    const notificationDoc = doc(db, "notifications", id);
    await updateDoc(notificationDoc, {
      read: true
    });
    const querySnapshot = await getDocs(collection(db, "notifications"));
    setNotifications(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <div className="App">
      <h1>Notifications</h1>
      <div>
        <button onClick={() => addNotification("Notification 1")}>Send Notification 1</button>
        <button onClick={() => addNotification("Notification 2")}>Send Notification 2</button>
        <button onClick={() => addNotification("Notification 3")}>Send Notification 3</button>
      </div>
      <div>
        {notifications.map(notification => (
          <div key={notification.id} style={{ margin: "10px", padding: "10px", border: "1px solid black" }}>
            <p>{notification.message}</p>
            <p>Status: {notification.read ? "Read" : "Unread"}</p>
            <button onClick={() => markAsRead(notification.id)}>Mark as Read</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;