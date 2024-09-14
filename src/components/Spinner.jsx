function Spinner() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/30 backdrop-blur-sm z-[9999]">
      <div className="loader" data-text="KibCar">
        <svg
          class="loader-svg"
          viewBox="0 0 500 150"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Loading"
          role="img"
        >
          <text
            x="50%"
            y="50%"
            dominant-baseline="middle"
            text-anchor="middle"
            class="text-outline"
          >
            KibCar
          </text>

          <text
            x="50%"
            y="50%"
            dominant-baseline="middle"
            text-anchor="middle"
            class="text-fill"
          >
            KibCar
          </text>
        </svg>
      </div>
    </div>
  );
}

export default Spinner;
