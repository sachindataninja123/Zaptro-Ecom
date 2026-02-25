import React, { useEffect } from "react";
import { getData } from "../context/DataContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Category from "./Category";
import { useNavigate, useParams } from "react-router-dom";

const Carousel = () => {
  const { data, fetchAllProducts } = getData();
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllProducts();
  }, []);

  // console.log(data);

  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <div>
      <Slider {...settings}>
        {data?.slice(96, 106)?.map((item, idx) => {
          return (
            <div
              key={idx}
              className="bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] md:px-35"
            >
              <div className="container mx-auto px-4 py-10 md:py-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                  {/* LEFT CONTENT */}
                  <div className="space-y-5 text-left max-w-xl">
                    <h3 className="text-red-500 font-semibold md:text-lg text-sm">
                      Powering Your World with the Best in Electronics
                    </h3>

                    <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold uppercase text-white line-clamp-3">
                      {item.title}
                    </h1>

                    <p className="text-gray-400 line-clamp-3">
                      {item.description}
                    </p>

                    <button onClick={() => navigate(`/products/${item.id}`)} className="bg-linear-to-r from-red-500 to-purple-500 text-white px-5 py-2 rounded-md cursor-pointer hover:opacity-90 transition">
                      Shop Now
                    </button>
                  </div>

                  {/* RIGHT IMAGE */}
                  <div className="flex justify-center">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-64 sm:w-80 md:w-96 lg:w-112.5 rounded-full hover:scale-105 transition duration-300 shadow-2xl shadow-red-400"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>

      <Category />
    </div>
  );
};

export default Carousel;
