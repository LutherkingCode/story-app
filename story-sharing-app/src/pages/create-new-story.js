import React, { useState } from 'react';
import styles from './new-story.module.css'; // Import your CSS module

export default function AddStory() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate input
    if (!title || !content) {
      alert('Please fill in both title and content.');
      return;
    }

    // Create a new story object
    const newStory = {
      title,
      content,
      date: new Date().toLocaleDateString(),
    };

    // Clear input fields
    setTitle('');
    setContent('');

    

  };

  return (
    <div className={styles.addStoryContainer}>
      <h2>Add a New Story</h2>
      <form onSubmit={handleSubmit} className={styles.storyForm}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" className={styles.addButton}>
          Add Story
        </button>
      </form>
    </div>
  );
}
