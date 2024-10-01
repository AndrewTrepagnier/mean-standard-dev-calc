import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Standard Deviation Calculator</h1>
        <div>
          <label htmlFor="sampleSize">Sample Size:</label>
          <input type="number" id="sampleSize" name="sampleSize" min="1" />
        </div>
        <div>
          <label htmlFor="sampleData">Enter Sample Data (comma-separated):</label>
          <input type="text" id="sampleData" name="sampleData" />
        </div>
        <button>Calculate Standard Deviation</button>
        <div>
          <p>Sample Standard Deviation: <span id="sampleStdDev"></span></p>
          <p>Standard Deviation of Sample Mean: <span id="stdDevSampleMean"></span></p>
        </div>
      </header>
    </div>
  );
}

export default App;
