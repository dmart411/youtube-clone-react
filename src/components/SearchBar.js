import { Form } from "react-bootstrap";
import { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [text, setText] = useState("");

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
      e.preventDefault();
      onFormSubmit(text);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Control
        type="text"
        placeholder="Search"
        onChange={onChange}
        value={text}
        style={{ marginTop: "20px" }}
      />
    </Form>
  );
};

export default SearchBar;
