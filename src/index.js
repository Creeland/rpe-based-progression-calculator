import React from "react";
import ReactDOM from "react-dom";
import { maxCalc, repMax, rpeModifiedReps } from "./maxHelpers";

class Exercise extends React.Component {
  state = {
    weight: 0,
    reps: 0,
    inRpe: 0,
    outRpe: 0,
    increment: 0
  };

  result = () => {
    const { weight, inRpe, outRpe, increment, reps } = this.state;

    const inRpeModReps = rpeModifiedReps(reps, inRpe);
    const outRpeModReps = rpeModifiedReps(reps, outRpe);

    return repMax(maxCalc(weight, inRpeModReps) + increment, outRpeModReps);
  };

  render() {
    return (
      <div>
        <li>
          <input
            type="text"
            onChange={e => this.setState({ weight: Number(e.target.value) })}
            placeholder="weight"
          />
          <input
            type="text"
            onChange={e => this.setState({ reps: Number(e.target.value) })}
            placeholder="reps"
          />
          <input
            type="text"
            onChange={e => this.setState({ inRpe: Number(e.target.value) })}
            placeholder="in rpe"
          />
          <input
            type="text"
            onChange={e => this.setState({ outRpe: Number(e.target.value) })}
            placeholder="out rpe"
          />
          <input
            type="text"
            onChange={e => this.setState({ increment: Number(e.target.value) })}
            placeholder="increment"
          />
        </li>
        <ul>
          <li>{this.result().toFixed(2)} pounds</li>
        </ul>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    inputs: [`input-0`]
  };

  addInput = () => {
    this.setState({
      inputs: [...this.state.inputs, `input-${this.state.length}`]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>RPE Based Progression Calculator</h1>
        <div>
          <button onClick={this.addInput}>Add Exercise</button>
          <ul>
            {this.state.inputs.map(el => {
              return <Exercise />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
