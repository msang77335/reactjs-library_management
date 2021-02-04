import { useEffect, useState } from "react";

function useFetch(apiFunc, depen) {
   const [data, setData] = useState(null);
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState(null);
   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await apiFunc();
            if (response) {
               setData(response);
               setIsLoading(false);
            }
         } catch (error) {
            setError(error);
         }
      };
      fetchData();
   }, [depen]);
   return [data, isLoading, error];
}
export default useFetch;
