export default function Media() {
  return (
    <>
      <div className="main-bg">
        <div className="main-bg__right">
          <img src="/upload/media-right.png" alt="" />
        </div>
        <div className="main-bg__left">
          <img src="/upload/media-left.png" alt="" />
        </div>
        <div className="main-bg__up">
          {/* No top image provided in original */}
        </div>
      </div>
      <div className="media">
        <div className="media__head">
          <div className="green-title">media</div>
          <div className="nav-tabs">
            <button className="nav-tabs__btn is-active"> photo</button>
            <button className="nav-tabs__btn">video</button>
          </div>
        </div>
        <div className="media__content">
          <div className="tab-content">
            <div className="tab-content__item">
              <div className="media-card">
                <img src="/upload/media-1.png" alt="" />
              </div>
              <div className="media-card">
                <img src="/upload/media-2.png" alt="" />
              </div>
              <div className="media-card">
                <img src="/upload/media-3.png" alt="" />
              </div>
              <div className="media-card">
                <img src="/upload/media-4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

