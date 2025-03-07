import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchData } from "../utils/apiSimulator";
import { mockTestimonials } from "../data/mockData";

const TestimonialCarousel = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTestimonials = async () => {
      try {
        const data = await fetchData(mockTestimonials, 2000); // 2s delay
        setTestimonials(data);
      } catch (err) {
        setError(err.message || "Failed to fetch testimonials");
      } finally {
        setLoading(false);
      }
    };
    getTestimonials();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  if (loading) {
    return (
      <section className="py-12">
        <div className="container mx-auto text-center">
          Loading testimonials...
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12">
        <div className="container mx-auto text-center text-red-500">
          {error}
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 ">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Hear From Our Customers
        </h2>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="text-center p-4">
              <p className="text-lg italic mb-4">"{testimonial.text}"</p>
              <p className="font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
