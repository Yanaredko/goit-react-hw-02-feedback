import React, { Component } from "react";
import PropTypes from "prop-types";
import FeedbackButton from "./FeedbackButton.jsx"

class FeedbackApp extends Component {
    constructor() {
        super();
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0
        };
    }

    handleFeedback = (type) => {
        this.setState(prevState => ({
            [type]: prevState[type] + 1
        }));
    }

    render() {
        const { good, neutral, bad } = this.state;
        
        return (
            <div>
                <h1>Статистика відгуків</h1>
                <FeedbackButton label="Добре" onClick={() => this.handleFeedback('good')} />
                <FeedbackButton label="Нейтрально" onClick={() => this.handleFeedback('neutral')} />
                <FeedbackButton label="Погано" onClick={() => this.handleFeedback('bad')} />
                <div>
                    <p>Добре: {good}</p>
                    <p>Нейтрально: {neutral}</p>
                    <p>Погано: {bad}</p>
                </div>
            </div>
        );
    }
}

FeedbackApp.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired
};

export default FeedbackApp;