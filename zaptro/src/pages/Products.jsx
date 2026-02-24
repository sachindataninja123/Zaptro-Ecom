import React, { useContext, useEffect, useState } from "react";
import { getData } from "../context/DataContext";
import FilterSection from "../components/FilterSection";
import Loading from "../assets/Loading4.webm";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import Lottie from "lottie-react";
import notFound from "../assets/notfound.json";
import { cartContext } from "../context/cartContext";

const Products = () => {
  const { data, fetchAllProducts } = getData(); 

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 5000]);

  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchAllProducts();
    window.scrollTo(0, 0);
  }, []);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1);
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
    setPage(1);
  };

  const pageHandler = (selectPage) => {
    setPage(selectPage);
    window.scrollTo(0, 0);
  };

  const filteredData = data?.filter((item) => {
    return (
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || item.category === category) &&
      (brand === "All" || item.brand === brand) &&
      item.price >= priceRange[0] &&
      item.price <= priceRange[1]
    );
  });

  // console.log(filteredData)

  const dynamicPage = Math.ceil(filteredData?.length / 12);

  return (
    <div className="max-w-6xl mx-auto px-4 mb-10">
      {data?.length > 0 ? (
        <>
          <div className="flex gap-8 items-start">
            <FilterSection
              search={search}
              setSearch={setSearch}
              category={category}
              setCategory={setCategory}
              brand={brand}
              setBrand={setBrand}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              handleBrandChange={handleBrandChange}
              handleCategoryChange={handleCategoryChange}
            />

            {filteredData?.length > 0 ? (
              <div className="flex flex-col items-center justify-center">
                <div className="grid grid-cols-2 md:grid-cols-4 md:gap-7 gap-2 mt-10">
                  {filteredData
                    ?.slice(page * 12 - 12, page * 12)
                    .map((product, idx) => {
                      return <ProductCard key={idx} product={product} />;
                    })}
                </div>
                <Pagination
                  pageHandler={pageHandler}
                  page={page}
                  dynamicPage={dynamicPage}
                />
              </div>
            ) : (
              <div className="flex justify-center items-center md:h-150 md:w-225 mt-10">
                <Lottie animationData={notFound} classID="w-[500px]" />
              </div>
            )}
          </div>
        </>
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

export default Products;
