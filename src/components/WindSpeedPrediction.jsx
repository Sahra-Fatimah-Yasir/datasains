import React, { useState } from 'react';
import DataTable from './DataTable';
import TrainingProcess from './TrainingProcess';
import ValidationProcess from './ValidationProcess';
import TestingProcess from './TestingProcess';

const WindSpeedPrediction = () => {
  const [data, setData] = useState([]);
  const [currentPhase, setCurrentPhase] = useState('upload');

  const handleFileUpload = (event) => {
    const uploadedData = []; // Mock data to simulate upload
    setData(uploadedData);
    setCurrentPhase('train');
  };

  return (
    <div>
      <h2 className="text-center text-2xl font-bold mb-4">Wind Speed Prediction</h2>
      <div>
        {currentPhase === 'upload' && (
          <div>
            <input type="file" accept=".csv" onChange={handleFileUpload} />
          </div>
        )}
        {currentPhase === 'train' && <TrainingProcess data={data} />}
        {currentPhase === 'validate' && <ValidationProcess data={data} />}
        {currentPhase === 'test' && <TestingProcess data={data} />}
      </div>
    </div>
  );
};

export default WindSpeedPrediction;
