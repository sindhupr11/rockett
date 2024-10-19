import React, { useState, useEffect, useRef } from 'react';

const ChatBot = () => {
  const [messages, setMessages] = useState([{ text: 'Hi! How can I help you today?', sender: 'bot' }]);
  const [input, setInput] = useState('');
  const [userLevel, setUserLevel] = useState(3); // User level is now stateful
  const messagesEndRef = useRef(null);

  const targetLanguage = 'Spanish'; // Example target language

  // Scroll to the bottom of the chat window
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Function to call the chatbot API
  const callChatBotAPI = async userMessage => {
    try {
      const response = await fetch('http://localhost:3000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userMessage, // The message typed by the user
          userLevel, // The user's level (number 1-5)
          targetLanguage // The language the user is learning (e.g., Spanish)
        })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch chatbot response');
      }

      const data = await response.json();

      // Extract the chatbot's response and updated level from the API response
      const botReply = data?.botReply?.choices[0]?.message?.content;
      const updatedLevel = data?.updatedLevel;

      // Update the user's level if the backend provides a new one
      if (updatedLevel) {
        setUserLevel(updatedLevel);
      }

      return botReply; // Return the chatbot's reply content
    } catch (error) {
      console.error('Error fetching chatbot response:', error);
      return 'Sorry, there was an error. Please try again later.';
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user's message to the messages array
    setMessages([...messages, { text: input, sender: 'user' }]);

    // Send the user's message, level, and target language to the chatbot API and get the response
    const botResponse = await callChatBotAPI(input);

    // Add bot's response to the messages array
    setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: 'bot' }]);

    setInput(''); // Clear the input
  };

  return (
    <div style={styles.container}>
      <div style={styles.chatWindow}>
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              ...styles.message,
              alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
              backgroundColor: message.sender === 'user' ? '#DCF8C6' : '#ECECEC'
            }}>
            {message.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} style={styles.inputForm}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          style={styles.input}
          placeholder="Type a message..."
        />
        <button type="submit" style={styles.button}>
          Send
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    maxWidth: '600px',
    margin: '0 auto'
  },
  chatWindow: {
    flex: 1,
    padding: '20px',
    overflowY: 'scroll',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #ccc',
    borderRadius: '10px',
    marginBottom: '10px'
  },
  message: {
    padding: '10px 15px',
    borderRadius: '15px',
    marginBottom: '10px',
    maxWidth: '75%'
  },
  inputForm: {
    display: 'flex',
    borderTop: '1px solid #ccc',
    paddingTop: '10px'
  },
  input: {
    flex: 1,
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginRight: '10px'
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default ChatBot;
