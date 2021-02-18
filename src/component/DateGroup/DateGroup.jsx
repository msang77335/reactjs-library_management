import React, { forwardRef, useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import moment from "moment";
import "./DateGroup.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import classNames from "classnames";
import selectOptions from "../../constants/selectConstants";

function DateGroup(props) {
   const {
      name,
      control,
      errors,
      label,
      id,
      isCol,
      disabled,
      placeholder,
      years,
      onChange,
      value,
      ...dateProps
   } = props;
   const CustomInput = forwardRef(({ value, onClick }, ref) => (
      <div className="date-group__input">
         <input
            id="date"
            type="text"
            ref={ref}
            disabled={disabled}
            value={value}
            onClick={onClick}
            placeholder={"Select..." + placeholder}
            readOnly
         />
         <label htmlFor="date">
            <i className="fa fa-calendar" aria-hidden="true"></i>
         </label>
      </div>
   ));
   const CustomHeader = ({
      date,
      changeYear,
      changeMonth,
      decreaseYear,
      increaseYear,
   }) => (
      <div
         className="date-group__header"
         style={{
            margin: 10,
            display: "flex",
            justifyContent: "center",
         }}
      >
         <button
            onClick={decreaseYear}
            disabled={prevYearButtonDisabled(date.getFullYear(), years)}
            type="button"
         >
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
         </button>
         <select
            className="select"
            value={date.getFullYear()}
            onChange={({ target: { value } }) => changeYear(value)}
         >
            {years.map((option, index) => (
               <option key={index} value={option.value}>
                  {option.label}
               </option>
            ))}
         </select>
         <select
            className="ml-0"
            value={date.getMonth() + 1}
            onChange={({ target: { value } }) => changeMonth(value - 1)}
         >
            {months.map((option, index) => (
               <option key={index} value={option.value}>
                  {option.label}
               </option>
            ))}
         </select>
         <button
            onClick={increaseYear}
            disabled={nextYearButtonDisabled(date.getFullYear(), years)}
            type="button"
         >
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
         </button>
      </div>
   );
   function range(start, end) {
      var ans = [];
      for (let i = start; i <= end; i++) {
         ans.push(i);
      }
      return ans;
   }
   const months = selectOptions.mounts();
   const prevYearButtonDisabled = (currentYear, years) => {
      if (currentYear == years[0]) return true;
   };
   const nextYearButtonDisabled = (currentYear, years) => {
      if (currentYear == years[years.length - 1]) return true;
   };
   return (
      <div className="date-group">
         <div className={classNames("date-group__group", { col: isCol })}>
            <label htmlFor={id} className="date-group__lable">
               {label}:
            </label>
            <div className="date-group__datepicker">
               <Controller
                  control={control}
                  name={name}
                  render={() => (
                     <DatePicker
                        {...dateProps}
                        selected={moment(value).toDate()}
                        onChange={onChange}
                        renderCustomHeader={CustomHeader}
                        customInput={<CustomInput />}
                     />
                  )}
               ></Controller>
            </div>
         </div>
         <p className="date-group__error">{errors}</p>
      </div>
   );
}

export default DateGroup;
