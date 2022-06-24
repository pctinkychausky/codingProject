import React from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { useState } from "react";
import { format } from "date-fns";
import { width } from "@mui/system";

function BasicDatePicker() {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const inputDate = `${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
    date[0].endDate,
    "MM/dd/yyyy"
  )}`;

  // document.getElementById("dateEle").value = inputDate;

  const styles = { color: "white" };
  const dateRangeStyles = {
    position: "relative",
  };
  return (
    <>
      {/* <input id="dateEle" type="text" value=""></input> */}
      <span style={styles}>{inputDate}</span>
      <DateRange
        editableDateInputs={true}
        onChange={(item) => setDate([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={date}
      />
    </>
  );
}

export default BasicDatePicker;