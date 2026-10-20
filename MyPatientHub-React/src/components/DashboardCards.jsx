import { useEffect, useRef, useState } from "react";

const series = [
  { title: "Promotion by Clinics", entries: ["Klinik Lee Healthcare", "Klinik Bandar Baru Nilai", "Klinik Mediviron Giant Nilai", "KLINIK NILAI IMPIAN", "Klinik Mediviron"], values: [19, 4, 10, 21, 2] },
  { title: "Promotion by Pharmacies", entries: ["Alpro Pharmacy Nilai", "Alpro Pharmacy Pekan Nilai", "Ok Pharmacy", "Pharmart Pharmacies Nilai", "Health Lane Family Pharmacy"], values: [15, 12, 5, 9, 14] },
  { title: "Smart Market Usage by app", entries: ["Food Panda", "Grab Food", "Smart Market App", "Other Apps", "Others"], values: [25, 20, 15, 10, 5] },
  { title: "Health Index", entries: ["Overall Health", "Exercise", "Healthy Nutrition", "Sleep", "Daily activity"], values: [24, 18, 20, 14, 12] },
];

const colors = ["#4caf50", "#2196f3", "#ff9800", "#f44336", "#9e9e9e"];

// Exposes each colored section clockwise, from zero to its full percentage.
function chartGradient(values, progress) {
  const total = values.reduce((sum, value) => sum + value, 0);
  const visible = total * progress;
  const stops = [];
  let position = 0;

  values.forEach((value, index) => {
    const end = position + value;
    const drawnEnd = Math.min(end, visible);
    if (drawnEnd > position) {
      stops.push(`${colors[index]} ${position.toFixed(2)}% ${drawnEnd.toFixed(2)}%`);
    }
    position = end;
  });

  stops.push(`#e6e9ef ${visible.toFixed(2)}% 100%`);
  return `conic-gradient(${stops.join(", ")})`;
}

function AnimatedDonut({ values, title, replayKey }) {
  const chartRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frameId;
    let observer;
    let started = false;

    const startDrawing = () => {
      if (started) return;
      started = true;

      // Follow the operating-system accessibility preference.
      if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
        setProgress(1);
        return;
      }

      const startedAt = performance.now();
      const duration = 1700;
      const frame = (now) => {
        const t = Math.min(1, (now - startedAt) / duration);
        // Ease-out motion: quick at first and smoothly completes the ring.
        setProgress(1 - (1 - t) ** 3);
        if (t < 1) frameId = requestAnimationFrame(frame);
      };
      frameId = requestAnimationFrame(frame);
    };

    // Replay starts from an empty ring. It begins when scrolled into view,
    // so below-the-fold charts do not finish before the user sees them.
    setProgress(0);
    if (typeof IntersectionObserver === "undefined") {
      startDrawing();
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            startDrawing();
            observer?.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      if (chartRef.current) observer.observe(chartRef.current);
    }

    return () => {
      observer?.disconnect();
      if (frameId !== undefined) cancelAnimationFrame(frameId);
    };
  }, [values, replayKey]);

  return (
    <div
      ref={chartRef}
      className="chart mph-animated-donut"
      role="img"
      aria-label={`${title}: animated sample doughnut chart`}
      style={{ background: chartGradient(values, progress) }}
    />
  );
}

function randomize(previous) {
  return previous.map((group) =>
    group.map((value) => Math.max(1, Math.min(30, value + Math.round(Math.random() * 6 - 3))))
  );
}

export default function DashboardCards({ search = "" }) {
  const [data, setData] = useState(() => series.map((item) => item.values));
  const [updated, setUpdated] = useState(() => new Date().toLocaleTimeString());
  const [expanded, setExpanded] = useState(null);
  const [replayKey, setReplayKey] = useState(0);

  function refresh() {
    setData((previous) => randomize(previous));
    setUpdated(new Date().toLocaleTimeString());
  }

  useEffect(() => {
    const timer = setInterval(refresh, 15000);
    return () => clearInterval(timer);
  }, []);

  const matches = series
    .map((group, index) => ({ ...group, index }))
    .filter((group) => `${group.title} ${group.entries.join(" ")}`.toLowerCase().includes(search.toLowerCase()));

  return (
    <section className="mph-charts-section" aria-label="Dashboard charts">
      <div className="mph-live-controls">
       
        <div className="mph-chart-actions">
          <button type="button" onClick={() => setReplayKey((value) => value + 1)}>
            ↻ Replay animation
          </button>
          <button type="button" onClick={refresh}>Refresh demo data</button>
        </div>
      </div>
      <div className="cards">
        {matches.map((group) => (
          <article className="card" key={group.title}>
            <div className="card-head">
              <h3>{group.title}</h3>
              <span className="info" title="Animated demonstration data">i</span>
            </div>
            <div className="card-body">
              <AnimatedDonut values={data[group.index]} title={group.title} replayKey={replayKey} />
              <div className="list">
                {group.entries.map((name, index) => (
                  <div className="item" key={name}>
                    <span className="item-name">
                      <span className="color-dot" style={{ backgroundColor: colors[index] }} />
                      {name}
                    </span>
                    <span>{data[group.index][index]}%</span>
                  </div>
                ))}
              </div>
            </div>
            <button
              type="button"
              className="details"
              onClick={() => setExpanded((old) => (old === group.index ? null : group.index))}
            >
              {expanded === group.index ? "HIDE DETAILS" : "MORE DETAILS"}
            </button>
            {expanded === group.index && (
              <div className="mph-chart-details">
                Sample distribution: {group.entries.map((name, index) => `${name}: ${data[group.index][index]}%`).join(" · ")}
              </div>
            )}
          </article>
        ))}
      </div>
      {matches.length === 0 && <p className="mph-no-results">No matching dashboard data.</p>}
    </section>
  );
}
