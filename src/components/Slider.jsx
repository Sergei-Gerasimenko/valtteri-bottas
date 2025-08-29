import { useCallback, useEffect, useRef, useState } from 'react'

export default function Slider({ slides, id }) {
  const [current, setCurrent] = useState(0)
  const innerRef = useRef(null)
  const count = slides?.length ?? 0

  const setActive = useCallback((index) => {
    if (index < 0 || index >= count) return
    setCurrent(index)
  }, [count])

  const prev = useCallback(() => setActive(current - 1), [current, setActive])
  const next = useCallback(() => setActive(current + 1), [current, setActive])

  useEffect(() => {
    if (!innerRef.current) return
    innerRef.current.style.transform = `translateX(${current * -100}%)`
  }, [current])

  if (!slides || count === 0) return null

  return (
    <div className="slider" id={id}>
      <div ref={innerRef} className="slider__inner">
        {slides.map((node, idx) => (
          <div key={idx} className={`slider__inner-item${idx === current ? ' active' : ''}`}>
            {node}
          </div>
        ))}
      </div>
      <div className="slider__control counter">
        <button className="slider__control-prev" type="button" onClick={prev} aria-label="Previous slide" />
        <button className="slider__control-next" type="button" onClick={next} aria-label="Next slide" />
      </div>
    </div>
  )
}

