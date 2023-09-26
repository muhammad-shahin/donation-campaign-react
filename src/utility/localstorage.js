// get stored donated data from local storage
const getStoredDonatedCategory = () => {
  const getStored = localStorage.getItem("donatedCategory");
  if (getStored) {
    const storedData = JSON.parse(getStored);
    return storedData;
  }
  return [];
};

// save donated category in local storage
const saveDonatedCategory = (categoryId) => {
  const storedDonatedData = getStoredDonatedCategory();
  const exist = storedDonatedData.find((donatedId) => donatedId === categoryId);
  if (!exist) {
    storedDonatedData.push(categoryId);
    localStorage.setItem("donatedCategory", JSON.stringify(storedDonatedData));
    return true;
  }
  return false;
};

export { getStoredDonatedCategory, saveDonatedCategory };
