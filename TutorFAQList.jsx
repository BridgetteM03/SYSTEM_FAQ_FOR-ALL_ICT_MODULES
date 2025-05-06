import React, { useState } from 'react';

function TutorFAQList({ questions, onAnswer, onEdit }) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [answer, setAnswer] = useState('');

  const handleSubmit = (index) => {
    onAnswer(index, answer);
    setEditingIndex(null);
    setAnswer('');
  };

  return (
    <div>
      <h5>Student Questions</h5>
      {questions.length === 0 ? <p>No questions yet.</p> : questions.map((q, i) => (
        <div key={i} className="mb-3 p-2 border rounded">
          <strong>Q:</strong> {q.question}
          <div>Status: <span className="badge bg-secondary">{q.status}</span></div>
          {q.answer && (
            <div>
              <strong>A:</strong> {q.answer}
              <button className="btn btn-sm btn-warning ms-2" onClick={() => setEditingIndex(i)}>Edit</button>
            </div>
          )}
          {!q.answer && (
            <>
              {editingIndex === i ? (
                <>
                  <textarea className="form-control mt-2" value={answer} onChange={(e) => setAnswer(e.target.value)} rows="3" />
                  <button className="btn btn-sm btn-success mt-2" onClick={() => handleSubmit(i)}>Publish</button>
                </>
              ) : (
                <button className="btn btn-sm btn-primary mt-2" onClick={() => setEditingIndex(i)}>Answer</button>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default TutorFAQList;
