// Style
import "./HomeScroll.css";

interface RouteProps {
  routeMedical: () => void;
  routeMedicine: () => void;
  routeDisease: () => void;
  routeCovid: () => void;
}

export default function HomeScroll(props: RouteProps) {
  const { routeMedical, routeMedicine, routeDisease, routeCovid } = props;

  return (
    <div className="h-scroll">
      <div className="home-medical">
        <p className="h-menu-lside-description">내 주변</p>
        <div>
          <p className="h-menu-num">1</p>
          <div
            className="cursor-pointer h-menu-box"
            onClick={routeMedical}
            style={{ backgroundImage: "url(/home1.jpg)" }}
          >
            <p className="h-move-title">의료기관 조회</p>
            <p className="h-move-to">바로가기</p>
          </div>
          <p className="h-menu-l-description">병원 어디있지?</p>
        </div>
      </div>

      <div className="home-medicine">
        <div>
          <p className="h-menu-num">2</p>
          <div
            className="cursor-pointer h-menu-box"
            onClick={routeMedicine}
            style={{ backgroundImage: "url(/home2.jpg)" }}
          >
            <p className="h-move-title">의약품 조회</p>
            <p className="h-move-to">바로가기</p>
          </div>
          <p className="h-menu-r-description">이 약...</p>
        </div>
        <p className="h-menu-rside-description">무슨 약이지?</p>
      </div>

      <div className="home-disease">
        <p className="h-menu-lside-description">어디가</p>
        <div>
          <p className="h-menu-num">3</p>
          <div
            className="cursor-pointer h-menu-box"
            onClick={routeDisease}
            style={{ backgroundImage: "url(/home3.jpg)" }}
          >
            <p className="h-move-title">증상 조회</p>
            <p className="h-move-to">바로가기</p>
          </div>
          <p className="h-menu-l-description">아픈걸까?</p>
        </div>
      </div>

      <div className="home-covid">
        <div>
          <p className="h-menu-num">4</p>
          <div
            className="cursor-pointer h-menu-box"
            onClick={routeCovid}
            style={{ backgroundImage: "url(/home4.jpg)" }}
          >
            <p className="h-move-title">코로나 정보 조회</p>
            <p className="h-move-to">바로가기</p>
          </div>
          <p className="h-menu-r-description">코로나 정보가</p>
        </div>
        <p className="h-menu-rside-description">궁금하다면?</p>
      </div>
    </div>
  );
}
