import React, { useEffect, useState } from "react";
import "./SelectGroup.scss";
import Select from "react-select";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Controller, useForm } from "react-hook-form";

function SelectGroup(props) {
   const { setValue, getValues } = useForm();
   const {
      id,
      register,
      isCol,
      label,
      icon,
      name,
      control,
      rules,
      errors,
      ...selectProps
   } = props;
   const customStyles = {
      option: (styles, { data, isDisabled, isFocused, isSelected }) => {
         return {
            ...styles,
            backgroundColor: isDisabled
               ? data.color
               : isSelected
               ? "#33b5e5"
               : isFocused
               ? "#edecee"
               : null,
            color: isSelected ? "#fff" : null,
            ":active": {
               ...styles[":active"],
               color: !isDisabled && (isSelected ? "#fff" : "#fff"),
               backgroundColor:
                  !isDisabled && (isSelected ? "#33b5e5" : "#33b5e5"),
            },
         };
      },
   };

   return (
      <div className="select-group">
         <div className={classNames("select-group__group", { col: isCol })}>
            {label && (
               <label htmlFor={id} className="select-group__lable">
                  {label}:
               </label>
            )}
            <Controller
               rules={rules}
               control={control}
               name={name}
               render={() => {
                  return (
                     <Select
                        classNamePrefix="react-select"
                        className="select-group__select"
                        styles={customStyles}
                        {...selectProps}
                     ></Select>
                  );
               }}
            ></Controller>
            <i className={icon} aria-hidden="true"></i>
         </div>
         <p className="select-group__error">{errors}</p>
      </div>
   );
}

export default SelectGroup;
