import Slider from '../components/Slider'

export default function Home() {
  const slides = [
    <h1 key="s1">111111111111111111111</h1>,
    <h1 key="s2">2222222222222222222222</h1>,
    <h1 key="s3">33333333333333333333333</h1>,
  ]

  return (
    <>
      {/* Example hero removed in original index; keeping slider demo */}
      <Slider id="slider1" slides={slides} />
      <Slider id="slider2" slides={slides} />
    </>
  )
}

