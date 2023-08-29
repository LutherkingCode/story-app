import React, { useState } from 'react';

export default function Story({ shortText, fullText }) {
  const [showFullText, setShowFullText] = useState(false);
  const [isPublic, setIsPublic] = useState(true); // Initially marked as public

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const togglePrivacy = () => {
    setIsPublic(!isPublic);
  };

  return (
    <div>
      {showFullText ? fullText : shortText}
      <button onClick={toggleText}>
        {showFullText ? 'Show Less' : 'Read More'}
      </button>
      <button onClick={togglePrivacy}>
        {isPublic ? '🌐 Public' : '🔒 Private'}
      </button>
    </div>
  );
}
