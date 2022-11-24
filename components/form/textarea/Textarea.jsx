import { useState } from "react";
import styles from "./Textarea.module.css";

const Textarea = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...textareaProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className={styles.textareaContainer}>
      <label className={styles.label}>{label}</label>
      <textarea
        className={styles.textarea}
        {...textareaProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => textareaProps.name === setFocused(true)}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default Textarea;
