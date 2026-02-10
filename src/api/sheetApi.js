const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const fetchSheet = async () => {
  await delay(300); // simulate network
  const data = localStorage.getItem("question-manager-data");
  return data ? JSON.parse(data) : [];
};

export const saveSheet = async (topics) => {
  await delay(200);
  localStorage.setItem("question-manager-data", JSON.stringify(topics));
};
