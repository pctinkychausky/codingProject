import { React, useState } from "react";
import {
  compareAsc,
  format,
  add,
  sub,
  parse,
  isBefore,
  startOfDay,
  endOfMonth,
  differenceInDays,
  differenceInYears,
  isSameMonth,
  isThisMonth,
  endOfDecade,
  isValid,
} from "https://cdn.skypack.dev/date-fns";
import formatDistanceToNowStrict from "https://cdn.skypack.dev/date-fns/formatDistanceToNowStrict";
import zhCN from "https://cdn.skypack.dev/date-fns/locale/zh-CN/index.js";
import WorldClock from "./WorldClock";

function MyTime() {
  const formatStr = "MM/dd/yyyy HH:mm:ss";
  const current = format(new Date(), formatStr);
  console.log(current);

  const [time, setTime] = useState({ current });

  return (
    <div>
      <WorldClock time={time} />
    </div>
  );
}

export default MyTime;
