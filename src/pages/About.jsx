export default function About() {
  return (
    <>
      <div className="main-bg">
        <div className="main-bg__right">
          <img src="/upload/about-right.png" alt="" />
        </div>
        <div className="main-bg__left">
          <img src="/upload/about-left.png" alt="" />
        </div>
        <div className="main-bg__up">
          <img src="/upload/about-up.png" alt="" />
        </div>
      </div>
      <div className="about">
        <div className="about-img">
          <img src="/upload/about-portrait.png" alt="Valtteri Bottas portrait" />
        </div>
        <div className="about-description">
          <div className="about-description__suptitle">
            <div className="second-title">Valtteri Bottas</div>
          </div>
          <div className="about-description__title">
            <div className="green-title">About</div>
          </div>
          <div className="about-description__text">
            <p className="text">
              Born again, hungrier than ever. Valtteri Bottas is ready to fight for thousands of a second, standings, and the championship as a member of the Mercedes-AMG Petronas Formula One Team.<br /><br />An uncompromised professional athlete on and off the circuit.<br />All eyes on car No. 77. Welcome to Valtteri’s world.
            </p>
          </div>
          <div className="table-container">
            <div className="table">
              <div className="table__caunter">
                <div className="table__item">
                  <h1>Nationaliti</h1>
                  <h2>
                    <div className="flag">
                      <svg className="flag__icon" width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.370667 0.875H23.6818V17.1249H0.370667V0.875Z" fill="#F0F0F0"/>
                        <path d="M23.6835 6.9081H10.5335V0.875H6.34964V6.9081H0.316536V11.092H6.34964V17.1251H10.5335V11.092H23.6835V6.9081Z" fill="#0B55B1"/>
                      </svg>
                    </div>
                    Finnish
                  </h2>
                </div>
                <div className="table__item">
                  <h1>born</h1>
                  <h2>28th August 1989</h2>
                </div>
                <div className="table__item">
                  <h1>place of birth</h1>
                  <h2>Nastola, Finland</h2>
                </div>
                <div className="table__item">
                  <h1>team</h1>
                  <h2>Mercedes-AMG Petronas Formula One Team</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

