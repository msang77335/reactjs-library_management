import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Table.scss";

function Table(props) {
   return <div className="table-box">{props.children}</div>;
}

export default Table;
