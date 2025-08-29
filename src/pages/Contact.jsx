export default function Contact() {
  return (
    <>
      <div className="main-bg">
        <div className="main-bg__left">
          <img src="/upload/contact-left.png" alt="" />
        </div>
      </div>
      <div className="contact">
        <div className="contact__content">
          <div className="contact__content-title">
            <div className="green-title">Contact</div>
          </div>
          <div className="contact__content-suptitle">
            <div className="second-title">CONTACT FOR</div>
            <div className="second-title second-title--blue">COMMERCIAL OPPORTUNITIES</div>
          </div>
          <div className="contact-info">
            <div className="contact-info__item">
              for fans
              <a className="contact-info__link" href="mailto:enquiries@mercedesamgf1.com">enquiries@mercedesamgf1.com</a>
            </div>
            <div className="contact-info__item">
              For commercial opportunities
              <a className="contact-info__link" href="mailto:ville@valtteribottas.com">ville@valtteribottas.com</a>
            </div>
          </div>
          <div className="contact-info__btn">
            <button className="btn-secondry btn-secondry--narrow" type="button">Write a message</button>
          </div>
        </div>
      </div>
      <form className="feedback" onSubmit={(e) => e.preventDefault()}>
        <div className="rewind">Rewind
          <svg width="100" height="12" viewBox="0 0 100 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 5.99999L10 11.7735L10 0.226489L0 5.99999ZM100 5L9 4.99999L9 6.99999L100 7L100 5Z" fill="white" fillOpacity="0.4"/>
          </svg>
        </div>
        <div className="feedback__container">
          <div className="feeaback__container-title">
            <div className="second-title">Feeaback</div>
          </div>
          <div className="feedback-list">
            <div className="feedback-list__item">
              <select className="feeaback-list__select" defaultValue="">
                <option value="" disabled>Select reason</option>
                <option>Commercial</option>
                <option>Fan message</option>
              </select>
            </div>
            <div className="feedback-list__item">
              <input className="feedback-list__input" placeholder="Your name" />
            </div>
            <div className="feedback-list__item">
              <input className="feedback-list__input" placeholder="Your email" type="email" />
            </div>
            <div className="feedback-list__item">
              <textarea className="feedback-list__area" placeholder="Message" rows={5} />
            </div>
          </div>
          <div className="feedback__actions">
            <button type="submit" className="btn-primary">Send</button>
          </div>
        </div>
      </form>
    </>
  )
}

