import React from 'react';
import styles from './chat.module.css';
import ChatHeader from './Header/Index';

function Chat() {
  return (
    <div className={styles.container}>
      <ChatHeader />
    </div>
  );
}

export default Chat;
