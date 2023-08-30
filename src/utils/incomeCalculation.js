import { rows } from '../const';

export const getIsGross = (calculationType) => calculationType === 'gross';

export const getSelectedRow = (frequency) => rows.find((row) => row.frequencyName === frequency);

// Function to calculate and update rows based on given inputs
export const calculateRows = (calculationType, income, frequency) => {
  const isGross = getIsGross(calculationType);
  const selectedRow = getSelectedRow(frequency);
  const incomeNumber = parseInt(income);

  if (isGross) {
    selectedRow.gross = incomeNumber;
    selectedRow.net = selectedRow.gross - selectedRow.tax;
  } else {
    selectedRow.net = incomeNumber;
    selectedRow.gross = selectedRow.net + selectedRow.tax;
  }

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
      updatedRows[i].net = updatedRows[i - 1].net * currentRow.frequencyValue;
      updatedRows[i].gross = updatedRows[i].net + updatedRows[i].tax;
    }
  });
  // Loop in reverse to update net and gross values
  updatedRows.findLast((row, i) => {
    if (i < selectedRow.id) {
      const prevRow = updatedRows[i + 1];
      updatedRows[i].net = prevRow.net / prevRow.frequencyValue;
      updatedRows[i].gross = updatedRows[i].net + updatedRows[i].tax;
    }
  });
  return updatedRows;
};
