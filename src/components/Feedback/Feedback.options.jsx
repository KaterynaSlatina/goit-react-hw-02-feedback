import './Feedback.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const arr = Object.keys(options);
  return (
    <div>
      {arr.map(option => (
        <button
          key={option}
          type="button"
          name={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
