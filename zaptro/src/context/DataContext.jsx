import axios from "axios";
import { createContext, useContext, useState } from "react";

export const Datacontext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  //fetching all products from api
  const fetchAllProducts = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products?limit=150");
      // console.log(res.data.products);

      setData(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const getUniqueCategory = (data, property) => {
    let newVal = data?.map((currElem) => {
      return currElem[property];
    });
    newVal = ["All", ...new Set(newVal)];
    return newVal;
  };

  const categoryOnlyData = getUniqueCategory(data, "category");
  const brandOnlyData = getUniqueCategory(data, "brand");

  return (
    <Datacontext.Provider
      value={{
        data,
        setData,
        fetchAllProducts,
        categoryOnlyData,
        brandOnlyData,
      }}
    >
      {children}
    </Datacontext.Provider>
  );
};

export const getData = () => useContext(Datacontext);
