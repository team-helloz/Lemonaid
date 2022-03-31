import { NavLink, useHistory } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {

  const history = useHistory();
  function routeHome() {
    history.push("/");
  }

  const CardNews = [
    {
      title: "[코로나 19] 궁금해요! 소아 코로나 19 예방접종(심화편)",
      url: "https://www.kdca.go.kr/gallery.es?mid=a20503010000&bid=0002&b_list=9&act=view&list_no=145621&nPage=1&vlist_no_npage=1&keyField=&keyWord=&orderby="
    },
    {
      title: "[코로나 19] 궁금해요! 소아 코로나 19 예방접종(기초편)",
      url: "https://www.kdca.go.kr/gallery.es?mid=a20503010000&bid=0002&b_list=9&act=view&list_no=145617&nPage=1&vlist_no_npage=1&keyField=&keyWord=&orderby="
    },
    {
      title: "[코로나 19] 코로나 19 진단검사 체계개편 팩트체크",
      url: "https://www.kdca.go.kr/gallery.es?mid=a20503010000&bid=0002&b_list=9&act=view&list_no=145540&nPage=3&vlist_no_npage=5&keyField=&keyWord=&orderby="
    },
    {
      title: "2022년 보건복지부 정책 정리",
      url: "https://blog.naver.com/mohw2016/222609396566"
    },
    {
      title: "[코로나 19] 궁금해요! 소아 코로나 19 예방접종(심화편)",
      url: "https://www.kdca.go.kr/gallery.es?mid=a20503010000&bid=0002&b_list=9&act=view&list_no=145621&nPage=1&vlist_no_npage=1&keyField=&keyWord=&orderby="
    },
  ]

  return (
    <div className="nav-container">
      <div className="nav-content">
        <img
          className="nav-home"
          src="/Lemonaid.png"
          alt=""
          onClick={routeHome}
        />
        <NavLink
          to="/medical"
          activeStyle={{
            fontWeight: "bold",
            color: "#06beb6",
          }}
        >
          의료기관 찾기
        </NavLink>
        <NavLink
          to="/medicine"
          activeStyle={{
            fontWeight: "bold",
            color: "#06beb6",
          }}
        >
          의약품 조회
        </NavLink>
        <NavLink
          to="/disease"
          activeStyle={{
            fontWeight: "bold",
            color: "#06beb6",
          }}
        >
          질병 찾기
        </NavLink>
        <NavLink
          to="/covid"
          activeStyle={{
            fontWeight: "bold",
            color: "#06beb6",
          }}
        >
          코로나
        </NavLink>
      </div>
      <div className="nav-bottom">
        <div className="nav-bottom-content">
          <p>HOT TOPIC : </p>
          <div className="nav-news-group">
            {CardNews.map((news, i: number) => (
              <div className="nave-news-item">
                <a
                  key={i}
                  href={news.url}
                  target="_blank"
                  className="nav-news-title"
                >{news.title}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
