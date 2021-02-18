import { useEffect, useState } from "react";

function useImage(initSrcImg = "") {
   const [value, setValue] = useState(new FileReader().result);
   const [srcImg, setSrcImg] = useState(initSrcImg);

   const resetValue = () => {
      setSrcImg(initSrcImg);
   };

   const handleChange = (e) => {
      const reader = new FileReader();
      reader.onload = () => {
         if (reader.readyState === 2) {
            setValue(reader.result);
         }
      };
      reader.readAsDataURL(e.target.files[0]);
   };

   return [value, srcImg, handleChange, resetValue];
}

export default useImage;
