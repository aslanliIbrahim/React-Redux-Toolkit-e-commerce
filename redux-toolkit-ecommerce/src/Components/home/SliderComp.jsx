import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay:true
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <div className="!flex items-center">
            <div >
                <div className="text-6xl font-bold">EN Kaliteli ayaqabilar burdadi</div>
                <div className="text-lg my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, deleniti sunt velit reprehenderit placeat labore consequuntur hic quidem cum iusto.</div>
                <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200 ">Incele</div>

            </div>
            <div>
              <img
                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e777c881-5b62-4250-92a6-362967f54cca/air-force-1-07-womens-shoes-b19lqD.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          <div className="!flex items-center">
            <div >
                <div className="text-6xl font-bold">EN Kaliteli ayaqabilar burdadi</div>
                <div className="text-lg my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, deleniti sunt velit reprehenderit placeat labore consequuntur hic quidem cum iusto.</div>
                <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200 ">Incele</div>

            </div>
            <div>
              <img
                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e777c881-5b62-4250-92a6-362967f54cca/air-force-1-07-womens-shoes-b19lqD.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
