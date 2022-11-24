import styles from "./Contact.module.css";
import Input from "../form/input/Input";
import textareaList from "./textareas/textarea-list";
import SubmitButton from "../buttons/submit-button/SubmitButton";
import { useState } from "react";
import inputList from "./inputs/input-list";
import Textarea from "../form/textarea/Textarea";

export default function Contact() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(values);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.sectionContainer} id="contact">
      <div className={styles.firstContainer}></div>
      <div className={styles.secondContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <i class="bi bi-envelope"></i>
          <h1 className={styles.title}>Entre em contato</h1>
          {inputList.map((input) => (
            <Input
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          {textareaList.map((textarea) => (
            <Textarea
              key={textarea.id}
              {...textarea}
              value={values[textarea.name]}
              onChange={onChange}
            />
          ))}
          <div className={styles.buttonContainer}>
            <SubmitButton />
          </div>
        </form>
      </div>
    </div>
  );
}
