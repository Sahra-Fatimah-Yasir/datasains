import React, { useState } from 'react';
import { calculateMetrics } from '../utils/utils';

const TrainingProcess = ({ data }) => {
  const [progress, setProgress] = useState(0);
  const [metrics, setMetrics] = useState(null);

  const runTraining = () => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 10;
      setProgress(currentProgress);
      if (currentProgress >= 100) {
        clearInterval(interval);
        const actual = data.map((row) => parseFloat(row.windSpeed));
        const predicted = actual.map((value) => value + (Math.random() - 0.5) * 2);
        const trainingMetrics = calculateMetrics(actual, predicted);
        setMetrics(trainingMetrics);
      }
    }, 500);
  };

  return (
    <div className="space-y-4">
      <button className="btn btn-primary" onClick={runTraining}>Start Training</button>
      <progress className="w-full" value={progress} max="100" />
      {metrics && (
        <div>
          <h3 className="font-semibold">Training Metrics:</h3>
          <p>RMSE: {metrics.rmse.toFixed(2)}</p>
          <p>MSE: {metrics.mse.toFixed(2)}</p>
          <p>MAE: {metrics.mae.toFixed(2)}</p>
          <p>MAPE: {metrics.mape.toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
};

export default TrainingProcess;
