import { useEffect, useState } from 'react';

export default function App() {
  return (
    <div className="App">
      <Title />
      <Calculator />
    </div>
  );
}

function Title() {
  return <div className="Title">BMI Calculator</div>;
}

function Calculator() {
  const [bmi, setBmi] = useState(0);

  return (
    <div className="Calculator">
      <InputSection setBmi={setBmi} />
      <OutputSection bmi={bmi} />
    </div>
  );
}

function InputSection({ setBmi }) {
  const [weight, setWeight] = useState(50);
  const [height, setHeight] = useState(150);

  useEffect(() => {
    const heightMeters = height / 100;
    const bmi = weight / (heightMeters * heightMeters);
    setBmi(bmi.toFixed(2));
  }, [weight, height]);

  return (
    <div className="InputSection">
      <InputSlider min={40} max={220} value={weight} onChange={setWeight}>
        Weight: {weight} kg
      </InputSlider>

      <InputSlider min={140} max={220} value={height} onChange={setHeight}>
        Height: {height} cm
      </InputSlider>
    </div>
  );
}

function InputSlider({ min, max, value, onChange, children }) {
  return (
    <div className="InputSlider">
      <label>{children}</label>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
      />
    </div>
  );
}

function OutputSection({ bmi }) {
  return (
    <div className="OutputSection">
      <p>Your BMI is</p>
      <p className="output">{bmi}</p>
    </div>
  );
}
