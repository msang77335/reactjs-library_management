import React, { useRef } from "react";
import "./ImageGroup.scss";

function ImageGroup(props) {
   const { innerRef, errors, id, src, edit, onChange, ...imageProps } = props;
   const imgRef = useRef();
   const handleBrowsImgClick = () => {
      imgRef.current.click();
   };
   return (
      <div className={edit ? "imageGroup edit" : "imageGroup"}>
         <div className="imageGroup__imgbox">
            <img
               src={src ? src : "https://www.aircourts.com/img/default-img.gif"}
               alt=""
            />
         </div>
         <input
            type="file"
            ref={(e) => {
               innerRef(e);
               imgRef.current = e;
            }}
            onChange={onChange}
            {...imageProps}
         />
         <p className="imageGroup__error">{errors}</p>
         <button
            type="button"
            className="select-img"
            onClick={handleBrowsImgClick}
         >
            <i class="fa fa-file-image-o" aria-hidden="true"></i>
         </button>
      </div>
   );
}

export default ImageGroup;
