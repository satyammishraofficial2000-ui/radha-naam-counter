// get today's date
export const getToday = () => {
  return new Date().toISOString().split("T")[0];
};

// get today's count
export const getTodayCount = () => {
  const counts = JSON.parse(localStorage.getItem("counts")) || {};
  return counts[getToday()] || 0;
};

// increment today's count
export const incrementTodayCount = () => {
  const counts = JSON.parse(localStorage.getItem("counts")) || {};
  const today = getToday();

  counts[today] = (counts[today] || 0) + 1;
  localStorage.setItem("counts", JSON.stringify(counts));

  return counts[today];
};

// total count (all days)
export const getTotalCount = () => {
  const counts = JSON.parse(localStorage.getItem("counts")) || {};
  return Object.values(counts).reduce((a, b) => a + b, 0);
};

// last 7 days data
export const getLast7DaysData = () => {
  const counts = JSON.parse(localStorage.getItem("counts")) || {};
  const data = {};

  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);

    const key = d.toISOString().split("T")[0];
    const label = d.toLocaleDateString("en-IN", { weekday: "short" });

    data[label] = counts[key] || 0;
  }

  return data;
};
