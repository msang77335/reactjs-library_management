import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./SearchForm.scss";
import useFetch from "../../../hooks/useFetch";
import Button from "../../Button/Button";
import InputGroup from "../../InputGroup/InputGroup";
import SelectGroup from "../../SelectGroup/SelectGroup";
import categoryApi from "../../../api/categoryApi";
import useSelect from "../../../hooks/useSelect";

function SearchForm(props) {
   const { register, handleSubmit, control, errors, setValue } = useForm({
      reValidateMode: "onSubmit",
   });
   const [categoriesOption, setCategoriesOption] = useState([]);
   const [categories, isCatagoriesLoading, caregoriesError] = useFetch(
      categoryApi.getAll
   );
   const [category, handleCategoryChange, resetCategory] = useSelect();
   useEffect(() => {
      if (categories) {
         const options = categories.map((item) => ({
            value: item.id,
            label: item.name,
         }));
         setCategoriesOption(options);
      }
   }, [categories]);
   useEffect(() => {
      setValue("category", category);
   }, [category]);
   const onSubmit = (data) => {
      console.log(data);
   };
   return (
      <form className="search-form" onSubmit={handleSubmit(onSubmit)}>
         <SelectGroup
            control={control}
            name="category"
            onChange={handleCategoryChange}
            options={categoriesOption}
         ></SelectGroup>
         <InputGroup placeholder="All..." name="search" innerRef={register()} />
         <Button className="btn--info">
            <i className="fa fa-search" aria-hidden="true"></i>
         </Button>
      </form>
   );
}

export default SearchForm;
