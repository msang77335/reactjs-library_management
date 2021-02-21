import React from "react";
import { useParams } from "react-router-dom";
import ContentTitle from "../../../component/Content/ContentTitle/ContentTitle";
import ReadersForm from "../../../component/Form/ReadersForm/ReadersForm";
import useFetch from "../../../hooks/useFetch";
import accountApi from "../../../api/accountApi";

function DetailReaders(props) {
   const { id } = useParams();
   const [readers, isLoading, error] = useFetch(() => accountApi.get(id));
   if (isLoading == true) return <p>Loading...</p>;
   return (
      <div className="content__container">
         <ContentTitle title="Readers Detail" />
         <ReadersForm initValues={readers}></ReadersForm>
      </div>
   );
}

export default DetailReaders;
