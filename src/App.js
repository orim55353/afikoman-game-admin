import React from "react";
import { questsRef } from "./firebase";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      question: "",
      ans1: "",
      ans2: "",
      ans3: "",
      ans4: "",
      errors: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ errors: null });

    if (
      this.state.question !== "" &&
      this.state.ans1 !== "" &&
      this.state.ans2 !== "" &&
      this.state.ans3 !== "" &&
      this.state.ans4 !== ""
    ) {
      var data: { String: String } = {};
      data["Question"] = this.state.question;
      data["ans1"] = this.state.ans1;
      data["ans2"] = this.state.ans2;
      data["ans3"] = this.state.ans3;
      data["ans4"] = this.state.ans4;

      try {
        await questsRef.push({
          content: data
        });
        this.setState({
          question: "",
          ans1: "",
          ans2: "",
          ans3: "",
          ans4: ""
        });
        alert("העלאת השאלה הצליחה");
      } catch (error) {
        alert(error.message);
        this.setState({ errors: error.message });
      }
    } else {
      alert("מלא את כל השדות הנדרשים");
    }
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input
            name="question"
            onChange={this.handleChange}
            placeholder="שאלה"
            value={this.state.question}
          ></input>
          <input
            name="ans1"
            onChange={this.handleChange}
            placeholder="תשובה מספר 1"
            value={this.state.ans1}
          ></input>
          <input
            name="ans2"
            onChange={this.handleChange}
            placeholder="תשובה מספר 2"
            value={this.state.ans2}
          ></input>
          <input
            name="ans3"
            onChange={this.handleChange}
            placeholder="תשובה מספר 3"
            value={this.state.ans3}
          ></input>
          <input
            name="ans4"
            onChange={this.handleChange}
            placeholder="תשובה מספר 4"
            value={this.state.ans4}
          ></input>
          <button type="submit" className="submit">
            שלח לשרת
          </button>
        </form>
      </div>
    );
  }
}

export default App;
