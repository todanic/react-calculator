// Function to handle keyboard interactions in a dropdown component
export const handleKeyDown = (
  e,
  isActive,
  setIsActive,
  selectedOption,
  onChange,
  listRef,
  dropdownOptions
) => {
  const { key } = e;

  if (['Enter', ' '].includes(key)) {
    setIsActive((prev) => !prev);
    // Navigate within dropdown options using ArrowUp or ArrowDown keys
  } else if (isActive && ['ArrowUp', 'ArrowDown'].includes(key)) {
    e.preventDefault();
    const currentIndex = dropdownOptions.findIndex((option) => option.value === selectedOption);
    const increment = key === 'ArrowDown' ? 1 : -1;
    const newIndex = (currentIndex + increment + dropdownOptions.length) % dropdownOptions.length;

    const newSelectedValue = dropdownOptions[newIndex].value;
    onChange(newSelectedValue);

    const newSelectedItem = listRef.current?.querySelector(`li[data-value="${newSelectedValue}"]`);
    newSelectedItem?.focus();
  } else if (key === 'Tab' && isActive) {
    e.preventDefault();
    setIsActive(false);
  }
};
