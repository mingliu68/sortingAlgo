import './App.css';

function App() {

  const algoCollection = [
    "Bubble Sort",
    "Insertion Sort",
    "Selection Sort",
    "Quick Sort",
    "Heap Sort",
    "Radix Sort",
    "Merge Sort"
  ];

  return (
    <div className="App">
      <Chart algoCollection={algoCollection} />
    </div>
  );
}

export default App;
