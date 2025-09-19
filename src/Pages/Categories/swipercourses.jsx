import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import categories1 from "../../assets/categories-icon.png";
import categories2 from "../../assets/categories-icon-02.png";
import categories3 from "../../assets/categories-icon-03.png";
import categories4 from "../../assets/categories-icon-04.png";
import categories5 from "../../assets/categories-icon-01.png";

const techs = [
    { title: 'GatsBy', courses: 2, img: categories1 },
    { title: 'GraphQL', courses: 2, img: categories2 },
    { title: 'Angular', courses: 4, img: categories3 },
    { title: 'Bootstrap', courses: 3, img: categories4 },
    { title: 'React', courses: 6, img: categories5 },
];

export default function Slider() {
    return (
        <>
       

            <div className="bg-white w-full py-10 px-4 lg:px-20">
                <Swiper
                spaceBetween={15}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                    className="mySwiper"
                >
                    {techs.map((tech, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white border border-gray-200 shadow-md rounded-lg p-6 text-center hover:shadow-xl
             transition all duration-500 hover:bg-blue-950 hover:text-white cursor-pointer">
                                <div className="w-25 h-25 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                                    <img src={tech.img} alt={tech.title} className="w-25 h-25 object-contain" />
                                </div>
                                <h3 className="font-semibold text-lg">{tech.title}</h3>
                                <p className="text-sm text-gray-500">{tech.courses} Courses</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>

    );
}
