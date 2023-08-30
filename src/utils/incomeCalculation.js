import { rows, multiplierMap } from '../const';

export const getIsGross = (calculationType) => calculationType === 'gross';

export const getSelectedRow = (frequency) => rows.find((row) => row.frequencyName === frequency);

// Function to calculate and update rows based on given inputs
export const calculateRows = (calculationType, income, frequency) => {
  const isGross = getIsGross(calculationType);
  const selectedRow = getSelectedRow(frequency);
  const incomeNumber = parseInt(income);

  selectedRow.gross = isGross ? incomeNumber : selectedRow.net + selectedRow.tax;
  selectedRow.net = isGross ? selectedRow.gross - selectedRow.tax : incomeNumber;

  const updatedRows = [...rows];

  if (!income) {
    updatedRows.forEach((row) => {
      row.net = 0;
      row.gross = 0;
    });
    return updatedRows;
  }

  // Loop through rows to update net and gross values
  updatedRows.forEach((currentRow, i) => {
    if (i > selectedRow.id) {
      const nextRow = updatedRows[i];
      const multiplier = multiplierMap[nextRow.frequencyName];
      updatedRows[i].net = updatedRows[i - 1].net * multiplier;
      updatedRows[i].gross = updatedRows[i].net + updatedRows[i].tax;
    }
  });

  // Loop in reverse to update net and gross values
  for (let i = selectedRow.id - 1; i >= 0 && i <= updatedRows.length - 1; i--) {
    const currentRow = updatedRows[i + 1];
    const multiplier = multiplierMap[currentRow.frequencyName];

    updatedRows[i].net = currentRow.net / multiplier;
    updatedRows[i].gross = updatedRows[i].net + updatedRows[i].tax;
  }

  return updatedRows;
};
