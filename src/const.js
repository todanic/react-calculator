export const dropdownOptions = [
  { id: 0, value: 'weekly' },
  { id: 1, value: 'fortnightly' },
  { id: 2, value: 'monthly' },
  { id: 3, value: 'annually' }
];
export const radioOptions = [
  { id: 0, value: 'gross', label: 'gross' },
  { id: 1, value: 'net', label: 'net' }
];

export const columns = [
  { id: 0, name: 'freaguancy' },
  { id: 1, name: 'gross' },
  { id: 2, name: 'tax' },
  { id: 3, name: 'net' }
];

export const rows = [
  { id: 0, frequencyName: 'weekly', frequencyValue: 2, tax: 1000, gross: 0, net: 0 },
  { id: 1, frequencyName: 'fortnightly', frequencyValue: 2, tax: 2000, gross: 0, net: 0 },
  { id: 2, frequencyName: 'monthly', frequencyValue: 2, tax: 4000, gross: 0, net: 0 },
  { id: 3, frequencyName: 'annually', frequencyValue: 12, tax: 48000, gross: 0, net: 0 }
];

export const radioLabel = 'income type:';
export const inputLabel = 'income:';
export const dropdownLabel = 'periodic pay:';
export const submitLabel = 'calculate';
