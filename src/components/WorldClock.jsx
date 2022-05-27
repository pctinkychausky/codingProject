import { formatInTimeZone } from "date-fns-tz";

function WorldClock({ time }) {
  const usTime = formatInTimeZone(
    { time },
    "America/New_York",
    "yyyy-MM-dd HH:mm:ss zzz"
  );

  return (
    <div>
      <span> {usTime}</span>
    </div>
  );
}

export default WorldClock;
