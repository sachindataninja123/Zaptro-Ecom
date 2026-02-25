import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../assets/Loading4.webm";
import { ChevronLeft } from "lucide-react";
import ProductListView from "../components/ProductListView";

const CategoryProduct = () => {
  const navigate = useNavigate();
  const param = useParams();
  const category = param.category;
  const [cateProducts, setCateProducts] = useState([]);

  const getFilterData = async () => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products/category/${category}`,
      );

      // console.log(res.data.products);
      setCateProducts(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFilterData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {cateProducts.length > 0 ? (
        <div className="max-w-6xl mx-auto mt-10 mb-10 px-4">
          <button
            onClick={() => navigate("/")}
            className="bg-gray-800 mb-5 text-white px-3 py-1 rounded-md cursor-pointer flex gap-1 items-center"
          >
            {" "}
            <ChevronLeft />
            Back
          </button>
          {cateProducts.map((product, idx) => {
            return <ProductListView key={idx} product={product} />;
          })}
        </div>
      ) : (
        <div className="flex items-center justify-center h-100">
          <video muted autoPlay loop>
            <source src={Loading} type="video/webm" />
          </video>
        </div>
      )}
    </div>
  );
};

export default CategoryProduct;
