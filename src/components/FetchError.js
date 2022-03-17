import React from "react";

const FetchError = ({ errorMessage, onRetry }) => {
  return (
    <div>
      <p>{errorMessage}</p>
      <button onClick={onRetry}>Retry</button>
    </div>
  );
};

export default FetchError;
