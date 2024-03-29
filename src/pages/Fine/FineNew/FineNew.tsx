import React from "react";
import * as s from "./StyleFineNew";
import PageTitle from "../../../components/Page/PageTitle/PageTitle";
import FineForm from "../../../components/Form/FineForm/FineForm";
import FormActionNew from "../../../components/Form/FormActions/FormActionNew/FormActionNew";

const FineNew: React.FC = () => {
   return (
      <s.FineNew>
         <PageTitle title="Fine Receipt Manage" />
         <FineForm title="Fine New" action="add">
            <FormActionNew />
         </FineForm>
      </s.FineNew>
   );
};

export default FineNew;
