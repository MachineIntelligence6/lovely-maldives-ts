'use client'

import { useState, useEffect, useRef } from 'react'
import Slider from 'react-slick'

function AbousUsPage() {
  const [nav1, setNav1] = useState<Slider>()
  const [nav2, setNav2] = useState<Slider>()
  const sliderRef1 = useRef<Slider>()
  const sliderRef2 = useRef<Slider>()

  const [nav3, setNav3] = useState<Slider>()
  const [nav4, setNav4] = useState<Slider>()
  const sliderRef3 = useRef<Slider>()
  const sliderRef4 = useRef<Slider>()

  useEffect(() => {
    setNav1(sliderRef1.current)
    setNav2(sliderRef2.current)

    setNav3(sliderRef3.current)
    setNav4(sliderRef4.current)
  }, [])
  return (
    <div>
      <div className="slider-container">
        <h2>Slider Syncing (AsNavFor)</h2>
        <h4>First Slider</h4>
        <Slider
          asNavFor={nav2}
          ref={(slider) => {
            if (slider) sliderRef1.current = slider
          }}
        >
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
        <h4>Second Slider</h4>
        <Slider
          asNavFor={nav1}
          ref={(slider) => {
            if (slider) sliderRef2.current = slider
          }}
          slidesToShow={3}
          swipeToSlide
          focusOnSelect
        >
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
      <div className="slider-container">
        <h2>Slider Syncing (AsNavFor)</h2>
        <h4>First Slider</h4>
        <Slider
          asNavFor={nav4}
          ref={(slider) => {
            if (slider) sliderRef3.current = slider
          }}
        >
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
        <h4>Second Slider</h4>
        <Slider
          asNavFor={nav3}
          ref={(slider) => {
            if (slider) sliderRef4.current = slider
          }}
          slidesToShow={3}
          swipeToSlide
          focusOnSelect
        >
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default AbousUsPage
