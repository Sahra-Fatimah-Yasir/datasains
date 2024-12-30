export const calculateMetrics = (actual, predicted) => {
    const mse =
      actual.reduce((sum, value, index) => sum + Math.pow(value - predicted[index], 2), 0) /
      actual.length;
  
    const rmse = Math.sqrt(mse);
  
    const mae =
      actual.reduce((sum, value, index) => sum + Math.abs(value - predicted[index]), 0) /
      actual.length;
  
    const mape =
      (actual.reduce((sum, value, index) => sum + Math.abs((value - predicted[index]) / value), 0) /
        actual.length) *
      100;
  
    return { mse, rmse, mae, mape };
  };
  
  export const uploadCSV = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const text = reader.result;
        const rows = text.split('\n');
        const headers = rows[0].split(',');
        const data = rows.slice(1).map((row) => {
          const values = row.split(',');
          return headers.reduce((obj, header, index) => {
            obj[header.trim()] = values[index].trim();
            return obj;
          }, {});
        });
        resolve(data);
      };
      reader.onerror = (error) => reject(error);
      reader.readAsText(file);
    });
  };
  
  export const splitData = (data) => {
    const trainSize = Math.floor(data.length * 0.7);
    const validationSize = Math.floor(data.length * 0.2);
  
    const train = data.slice(0, trainSize);
    const validation = data.slice(trainSize, trainSize + validationSize);
    const test = data.slice(trainSize + validationSize);
  
    return { train, validation, test };
  };
  