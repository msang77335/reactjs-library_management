import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import moment from "moment";
import "./BookForm.scss";
import categoryApi from "../../../api/categoryApi";
import InputGroup from "../../InputGroup/InputGroup";
import useInput from "../../../hooks/useInput";
import useSelect from "../../../hooks/useSelect";
import SelectGroup from "../../SelectGroup/SelectGroup";
import FormActionSave from "../FormActions/FormActionSave/FormActionSave";
import FormActionEdit from "../FormActions/FormActionEdit/FormActionEdit";
//import useFormAction from "../../../hooks/UseFormAction";
import selectOptions from "../../../constants/selectConstants";
import TextAreaGroup from "../../TextAreaGroup/TextAreaGroup";
import DateGroup from "../../DateGroup/DateGroup";
import useDate from "../../../hooks/useDate";
import bookApi from "../../../api/bookApi";
import useFetch from "../../../hooks/useFetch";
import InfoGroup from "../../InfoGroup/InfoGroup";
import Button from "../../Button/Button";
import ImageGroup from "../../ImageGroup/ImageGroup";
import useImage from "../../../hooks/useImage";

function BookForm(props) {
   const { editForm, initValues = {}, callBackEdit } = props;
   const {
      register,
      handleSubmit,
      control,
      errors,
      setValue,
      getValues,
   } = useForm({
      reValidateMode: "onSubmit",
   });
   const [categoriesOption, setCategoriesOption] = useState([]);
   const history = useHistory();
   const [onlyView, setOnlyView] = useState(editForm ? true : false);
   const [categories, isCatagoriesLoading, caregoriesError] = useFetch(
      categoryApi.getAll
   );
   const [valueImg, srcImg, handleImgChange, resetImg] = useImage(
      initValues.img
   );
   const [name, handleNameChange, resetName] = useInput(initValues.name);
   const [author, handleAuthorChange, resetAuthor] = useInput(
      initValues.author
   );
   const [publisher, handlePublisherChange, resetPublisher] = useInput(
      initValues.publisher
   );
   const [penalty, handlePenaltyChange, resetPenalty] = useInput(
      initValues.penalty
   );
   const [description, handleDescriptionChange, resetDescription] = useInput(
      initValues.description
   );
   const [published, handlePublishedChange, resetPublished] = useDate(
      initValues.published_date
   );
   const [category, handleCategoryChange, resetCategory] = useSelect(
      initValues.category
   );
   const [createDate, setCreateDate] = useState(
      moment(initValues.created_at).format("L") || moment().format("L")
   );
   const [updateDate, setUpdateDate] = useState(
      moment(initValues.update_at).format("L") || moment().format("L")
   );
   useEffect(() => {
      register({ name: "category" });
      register({ name: "published_date" });
      register({ name: "img" });
      setValue("category", category);
      setValue("published_date", published);
   }, []);
   useEffect(() => {
      setValue("category", category);
   }, [category]);
   useEffect(() => {
      setValue("published_date", published);
   }, [published]);
   useEffect(() => {
      if (categories) {
         const options = categories.map((item) => ({
            value: item.id,
            label: item.name,
         }));
         setCategoriesOption(options);
      }
   }, [categories]);
   const onSubmit = (data) => {
      if (editForm) {
         const newBook = {
            ...data,
            id: initValues.id,
            created_at: initValues.created_at,
            updated_at: moment(),
            quantity: initValues.quantity,
            status: {
               id: 1,
               name: "Active",
            },
         };
         console.log(newBook);
         //bookApi.put(newBook);
         // callBackEdit();
         // setOnlyView(true);
      } else {
         const newBook = {
            ...data,
            created_at: moment(),
            update_at: moment(),
            quantity: 1,
            status: {
               id: 1,
               name: "Active",
            },
         };
         bookApi.post(newBook);
         backBooksPage();
      }
   };
   //const [backPrevious] = useFormAction();
   const backBooksPage = () => {
      history.push("/books/");
   };
   const editClick = () => {
      setOnlyView(false);
   };
   const cancelClick = () => {
      if (editForm) {
         setOnlyView(true);
         resetName();
         resetAuthor();
         resetCategory();
         resetPublisher();
         resetPublished();
         resetDescription();
         resetPenalty();
      } else {
         //backPrevious();
      }
   };
   const deleteClick = () => {
      bookApi.delete(initValues.id);
      backBooksPage();
   };
   const backClick = () => {
      backBooksPage();
   };
   if (isCatagoriesLoading == true) return <p>Loading...</p>;
   return (
      <form action="" className="book-form" onSubmit={handleSubmit(onSubmit)}>
         <ul className="book-form__list">
            <li className="book-form__item book-form__image">
               <ImageGroup
                  edit={!onlyView}
                  name="img"
                  src={srcImg}
                  onChange={handleImgChange}
                  innerRef={(e) =>
                     register(
                        e,
                        editForm == false
                           ? { required: "Image is required." }
                           : null
                     )
                  }
                  errors={errors.img ? errors.img.message : null}
               ></ImageGroup>
            </li>
            <li className="book-form__item book-form__date">
               <InfoGroup name="Create Date" value={createDate} />
               <InfoGroup name="Update Date" value={updateDate} />
            </li>
            <li className="book-form__item">
               <InputGroup
                  label="Name"
                  placeholder="Book name"
                  name="name"
                  isCol="true"
                  innerRef={register({
                     required: "Book name is required.",
                  })}
                  value={name}
                  onChange={handleNameChange}
                  disabled={onlyView}
                  errors={errors.name ? errors.name.message : null}
               />
            </li>
            <li className="book-form__item">
               <InputGroup
                  label="Author"
                  placeholder="Author name"
                  name="author"
                  isCol="true"
                  innerRef={register({
                     required: "Author name is required.",
                  })}
                  value={author}
                  onChange={handleAuthorChange}
                  disabled={onlyView}
                  errors={errors.author ? errors.author.message : null}
               />
            </li>
            <li className="book-form__item">
               <SelectGroup
                  label="Categories"
                  isCol
                  name="category"
                  control={control}
                  rules={{
                     required: "Category is required.",
                  }}
                  options={categoriesOption}
                  value={category}
                  onChange={handleCategoryChange}
                  isDisabled={onlyView}
                  errors={errors.category ? errors.category.message : null}
               ></SelectGroup>
            </li>
            <li className="book-form__item">
               <InputGroup
                  placeholder="Publisher Name"
                  label="Publisher"
                  isCol="true"
                  name="publisher"
                  innerRef={register({
                     required: "Publisher name is required.",
                  })}
                  value={publisher}
                  onChange={handlePublisherChange}
                  disabled={onlyView}
                  errors={errors.publisher ? errors.publisher.message : null}
               />
            </li>
            <li className="book-form__item">
               <DateGroup
                  label="Publishing Date"
                  isCol
                  placeholder="Published Date"
                  name="published_date"
                  control={control}
                  selected={moment(published)}
                  value={published}
                  value={moment(published).format("L")}
                  onChange={handlePublishedChange}
                  years={selectOptions.publishingYear()}
                  disabled={onlyView}
               ></DateGroup>
            </li>
            <li className="book-form__item">
               <InputGroup
                  type="number"
                  label="Penalty"
                  isCol="true"
                  icon="fa fa-money"
                  placeholder="Book Penalty"
                  name="penalty"
                  innerRef={register({
                     required: "Penalty is required.",
                  })}
                  value={penalty}
                  onChange={handlePenaltyChange}
                  disabled={onlyView}
                  errors={errors.penalty ? errors.penalty.message : null}
               ></InputGroup>
            </li>
            <li className="book-form__item book-form__item-textarea">
               <TextAreaGroup
                  placeholder="Book Description..."
                  label="Description"
                  isCol="true"
                  name="description"
                  disabled={onlyView}
                  value={description}
                  onChange={handleDescriptionChange}
                  innerRef={register({
                     required: "Description is required.",
                  })}
                  errors={
                     errors.description ? errors.description.message : null
                  }
               ></TextAreaGroup>
            </li>
         </ul>
         {editForm && onlyView ? (
            <FormActionEdit
               deleteClick={deleteClick}
               editClick={editClick}
               backClick={backClick}
            ></FormActionEdit>
         ) : (
            <FormActionSave cancelClick={cancelClick}></FormActionSave>
         )}
      </form>
   );
}

export default BookForm;
