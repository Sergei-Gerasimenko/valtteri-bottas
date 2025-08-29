export default function Partners() {
  return (
    <>
      <div className="main-bg">
        <div className="main-bg__right">
          <img src="/upload/partners-right.png" alt="" />
        </div>
        <div className="main-bg__left">
          <img src="/upload/partners-left.png" alt="" />
        </div>
        <div className="main-bg__up">
          <img src="/upload/partners-up.png" alt="" />
        </div>
      </div>
      <div className="partners">
        <div className="partners__content">
          <div className="partners-img">
            <img src="/upload/helmet.png" alt="" />
          </div>
          <div className="partners-description">
            <div className="partners-description__title">
              <div className="green-title">Partners</div>
            </div>
            <div className="partners-description__text">
              <p className="text">
                ”From the age of 6 I have represented my sponsors who have trusted my ability to<br />successfully promote their brand. Marketing is an integral part of this occupation.”
              </p>
            </div>
            <div className="partners-description__text-mobile">
              <p className="text">
                ”Marketing is an integral<br />part of this occupation.”
              </p>
            </div>
            <div className="partners-card">
              <div className="partners-card__container">
                <div className="partners-card__item">
                  <img src="/upload/partners-card-left.png" alt="" />
                </div>
                <div className="partners-card__item partners-card__item--right">
                  <img src="/upload/partners-card-right.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

