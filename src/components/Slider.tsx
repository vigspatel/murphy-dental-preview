import React from 'react';
import { Keyboard } from 'swiper';
import 'swiper/css';
import { Swiper } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';

type SliderProps = {
    className?: string;
    children: React.ReactNode;
    sliderSettings: SwiperOptions;
};

export const Slider = ({ children, sliderSettings, className }: SliderProps) => {
    const modules = [Keyboard];
    return (
        <Swiper
            centerInsufficientSlides
            keyboard
            {...sliderSettings}
            modules={sliderSettings.modules?.concat(modules)}
            className={className}
            role="region"
        >
            {children}
        </Swiper>
    );
};
