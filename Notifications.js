import React, { useState } from 'react';

const Notifications = () => {
  const [message, setMessage] = useState('');

  const sendNotification = () => {
    fetch('http://localhost:5000/api/notify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })
      .then(response => response.json())
      .then(data => alert(data.status))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>Send Notification</h2>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter notification message"
      />
      <button onClick={sendNotification}>Send</button>
    </div>
  );
};

export default Notifications;
