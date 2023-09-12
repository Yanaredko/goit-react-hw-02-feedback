import React from 'react';
import '../index.css';
import FeedbackApp from './Feedback.jsx'; 

function App() {
  return (
    <div className="App">
      <FeedbackApp good={0} neutral={0} bad={0} />
    </div>
  );
}

export default App;
