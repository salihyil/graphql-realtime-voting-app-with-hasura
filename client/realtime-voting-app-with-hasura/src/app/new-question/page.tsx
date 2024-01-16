"use client";
import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { NEW_QUESTIONS_MUTATION } from "./queries";

const initialOptions = [{ title: "" }, { title: "" }];

const NewQuestion = () => {
  const [addQuestion, { loading, data }] = useMutation(NEW_QUESTIONS_MUTATION);
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(initialOptions);

  const handleChangeOption = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const newOptions = options;
    newOptions[Number(id)].title = value;
    setOptions([...newOptions]);
  };

  const handleSave = () => {
    const filledOptions = options.filter((option) => option.title !== "");

    if (question === "" || filledOptions.length < 2) {
      return false;
    }

    addQuestion({
      variables: {
        input: {
          title: question,
          options: {
            data: [...options],
          },
        },
      },
    });

    setQuestion("");
    setOptions([{ title: "" }, { title: "" }]);
  };

  return (
    <div>
      <h2>Question</h2>
      <input
        type="text"
        placeholder="Type your question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        disabled={loading}
      />

      <h2>Options</h2>
      {options.map((option, index) => (
        <div key={index}>
          <input
            disabled={loading}
            id={String(index)}
            type="text"
            placeholder="Type your option"
            value={option.title}
            onChange={handleChangeOption}
          />
        </div>
      ))}
      <button disabled={loading} onClick={() => setOptions([...options, { title: "" }])}>
        New Option
      </button>
      <button disabled={loading} onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default NewQuestion;
