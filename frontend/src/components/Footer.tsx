import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__addr">
        <h1 className="footer__logo">Lemonaid</h1>
        <h2>Info</h2>
        <address>
          SSAFY 6기 특화 구미 1반 8조 Helloz
          <br />
          <a className="footer__btn" href="mailto:ssafyd108@gmail.com">
            Email Us
          </a>
        </address>
      </div>

      <ul className="footer__nav">
        <li className="nav__item">
          <h2 className="nav__title">Frontend</h2>

          <ul className="nav__ul">
            <li>
              <a href="https://github.com/snowwhitewolf">이종현</a>
            </li>
            <li>
              <a href="https://github.com/essk13">이수환</a>
            </li>
            <li>
              <a href="https://github.com/sanghyun-lee2">이상현</a>
            </li>
          </ul>
        </li>

        <li className="nav__item">
          <h2 className="nav__title">Backend</h2>

          <ul className="nav__ul">
            <li>
              <a href="https://github.com/PWinwon">박승원</a>
            </li>
            <li>
              <a href="https://github.com/pondsuyeon">지수연</a>
            </li>
            <li>
              <a href="https://github.com/qazqww">이진곤</a>
            </li>
          </ul>
        </li>

        <li className="nav__item">
          <h2 className="nav__title">데이터 출처</h2>

          <ul className="nav__ul">
            <li>
              <a href="https://www.data.go.kr">공공데이터포털</a>
            </li>
            <li>
              <a href="https://opendata.hira.or.kr">
                보건의료빅데이터개방시스템
              </a>
            </li>
            <li>
              <a href="https://www.health.kr">약학정보원</a>
            </li>
          </ul>
        </li>
      </ul>

      <div className="legal">
        <p>&copy; 2022 SSAFY. All rights reserved.</p>

        <div className="legal__links">
          <img
            className="footer-source-img"
            src={`/source.png`}
            alt=""
            width={200}
            height={70}
          />
        </div>
      </div>
    </footer>
  );
}
