import React from "react";
import { useParams } from "react-router-dom";
import ContentTitle from "../../../component/Content/ContentTitle/ContentTitle";
import useFetch from "../../../hooks/useFetch";
import accountApi from "../../../api/accountApi";
import EmployeeForm from "../../../component/Form/EmployeeForm/EmployeeForm";

function EmployeeInfo(props) {
   const { id } = useParams();
   const [employee, isLoading, error] = useFetch(() => accountApi.get(id));
   if (isLoading == true) return <p>Loading...</p>;
   return (
      <div className="content__container">
         <ContentTitle title="Employee Info" />
         <EmployeeForm initValues={employee} />
      </div>
   );
}

export default EmployeeInfo;
