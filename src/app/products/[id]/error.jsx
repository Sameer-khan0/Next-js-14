"use client"
import React from 'react';

function ErrorComponent({ error, reset }) {
  return (
    <div className="error-message">
      <p>{error ? error.message : "Error on fetching data"}</p>
      <button className="retry-button" onClick={reset}>
        Retry
      </button>
    </div>
  );
}

export default ErrorComponent;
