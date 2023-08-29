import React from "react";
import Story from "../components/story"; // Adjust the path based on your file structure
import styles from "./stories.module.css"; // Import your CSS module

export default function Stories() {
  return (
    <div className={styles.storiesContainer}>
      <h2>Stories</h2>
      <Story
        shortText="Once upon a time in a land far away, there lived a brave knight."
        fullText="Once upon a time in a land far away, there lived a brave knight. He was known throughout the kingdom for his unwavering courage and noble heart. One day, a fierce dragon appeared, threatening the peace of the realm. The knight embarked on a perilous journey to confront the dragon and protect his people. With his trusty sword in hand, he faced the fire-breathing creature in a battle that would test his strength and determination. The battle raged on for hours, but in the end, the knight emerged victorious, having defeated the dragon and saved the kingdom from certain destruction. The people hailed him as a true hero, and his story became a legend that would be told for generations to come."
      />
    </div>
  );
}
