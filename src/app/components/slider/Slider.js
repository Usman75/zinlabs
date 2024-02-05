"use client"
import { useState, useEffect } from 'react';

const Slider = () => {
  
    const slides = [
        {
            id: 1,
            imageUrl: 'https://images.hipdf.com/images2022/icons/word-pdf.svg',
            heading: 'Heading 1',
            caption: 'Slide 1 Caption',
        },
        {
            id: 2,
            imageUrl: 'https://images.hipdf.com/images2022/icons/PPT-PDF.svg',
            heading: 'Heading 2',
            caption: 'Slide 2 Caption',
        },
        {
            id: 3,
            imageUrl: 'https://images.hipdf.com/images2022/icons/Excel-PDF.svg',
            heading: 'Heading 3',
            caption: 'Slide 3 Caption',
        },
        {
            id: 4,
            imageUrl: 'https://images.hipdf.com/images2022/icons/jpg-pdf.svg',
            heading: 'Heading 4',
            caption: 'Slide 4 Caption',
        },
        {
            id: 5,
            imageUrl: 'https://images.hipdf.com/images2022/icons/Image-in-TXT.svg',
            heading: 'Heading 5',
            caption: 'Slide 5 Caption',
        },
        {
            id: 6,
            imageUrl: 'https://images.hipdf.com/images2022/icons/Image-in-RTX.svg',
            heading: 'Heading 6',
            caption: 'Slide 6 Caption',
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const [slideToShow, setSlideToShow] = useState(4);
    useEffect(() => {
        const updateSize = () => {
            if (window.innerWidth >= 1280) {
                setSlideToShow(4);
            } 
            else if (window.innerWidth >= 991) {
                setSlideToShow(3);
            }
            else if (window.innerWidth >= 768) {
                setSlideToShow(2);
            } 
            else {
                setSlideToShow(1);
            }
        };
        window.addEventListener('resize', updateSize);
        updateSize(); 
        return () => window.removeEventListener('resize', updateSize); 
    }, []);
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - slideToShow ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - slideToShow : prevIndex - 1
        );
    };

    return (
        <div className="relative container mx-auto xl:py-32 lg:py-24 py-12 px-2">
            <div className="flex space-x-4 overflow-hidden">
                {slides.slice(currentIndex, currentIndex + slideToShow).map((slide) => (
                    <div key={slide.id} className="w-full border border-gray-200 p-4 rounded-lg m-8 transition duration-300 ease-in-out hover:shadow-lg hover:cursor-pointer">
                        <img src={slide.imageUrl} alt={slide.caption} className="w-full max-w-16 max-h-16 mb-2" />
                        <h2 className='text-xl font-bold mb-2'>{slide.heading}</h2>
                        <p className="">{slide.caption}</p>
                    </div>
                ))}
            </div>
            <button
                className="absolute top-1/2 -left-2 transform -translate-y-1/2 bg-gray-200 text-white p-1 rounded-2xl w-8 h-8 flex items-center justify-center"
                onClick={prevSlide}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="#000000"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </button>
            <button
                className="absolute top-1/2 -right-10 transform -translate-y-1/2  bg-gray-200 text-white p-1 rounded-2xl w-8 h-8 flex items-center justify-center"
                onClick={nextSlide}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="#000000"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </button>
        </div>
    );
};

export default Slider;

