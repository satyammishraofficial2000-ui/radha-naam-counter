import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip
);

function Last7DaysGraph({ data }) {
  return (
    <div style={{ maxWidth: "360px", margin: "20px auto" }}>
      <Bar
        data={{
          labels: Object.keys(data),
          datasets: [
            {
              label: "Naam Jaap",
              data: Object.values(data),
              backgroundColor: "#f472b6",
              borderRadius: 8,
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          plugins: { legend: { display: false } },
          scales: {
            y: { beginAtZero: true },
            x: { grid: { display: false } },
          },
        }}
      />
    </div>
  );
}

export default Last7DaysGraph;
