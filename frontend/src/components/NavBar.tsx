import { NavLink, useHistory } from "react-router-dom";
import "./NavBar.css";
import { useState, useEffect } from "react";
import axios from "axios";

interface CovidNews {
  region: string;
  count: number;
}

export default function NavBar() {

  const history = useHistory();
  const [covidTotal, setTotal] = useState<number>(0);
  const [covidData, setCovid] = useState<CovidNews[]>([]);
  function routeHome() {
    history.push("/");
  }

  const CardNews = [
    {
      title: "[코로나 19] 궁금해요! 소아 코로나 19 예방접종(심화편)",
      url: "https://www.kdca.go.kr/gallery.es?mid=a20503010000&bid=0002&b_list=9&act=view&list_no=145621&nPage=1&vlist_no_npage=1&keyField=&keyWord=&orderby=",
    },
    {
      title: "[코로나 19] 궁금해요! 소아 코로나 19 예방접종(기초편)",
      url: "https://www.kdca.go.kr/gallery.es?mid=a20503010000&bid=0002&b_list=9&act=view&list_no=145617&nPage=1&vlist_no_npage=1&keyField=&keyWord=&orderby=",
    },
    {
      title: "[코로나 19] 코로나 19 진단검사 체계개편 팩트체크",
      url: "https://www.kdca.go.kr/gallery.es?mid=a20503010000&bid=0002&b_list=9&act=view&list_no=145540&nPage=3&vlist_no_npage=5&keyField=&keyWord=&orderby=",
    },
    {
      title: "2022년 보건복지부 정책 정리",
      url: "https://blog.naver.com/mohw2016/222609396566",
    },
    {
      title: "[코로나 19] 궁금해요! 소아 코로나 19 예방접종(심화편)",
      url: "https://www.kdca.go.kr/gallery.es?mid=a20503010000&bid=0002&b_list=9&act=view&list_no=145621&nPage=1&vlist_no_npage=1&keyField=&keyWord=&orderby=",
    },
  ];

  const handleLoad = () => {
    axios
      .get("/corona/count/today")
      .then((res) => {
        setTotal(res.data.corona_count_today[0].count_total)
      })
      //.catch((err) => {console.log(err);})

    axios
      .get("/corona/count/top3")
      .then((res) => {
        setCovid(res.data.corona_count_top3)
      })
      //.catch((err) => {console.log(err);})
  }
  useEffect(() => {
    handleLoad();
  }, []);

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
          <p>오늘의 의료정보</p>
          <div className="nav-news-group">
            {CardNews.map((news, i: number) => (
              <div className="nave-news-item">
                <a
                  key={i}
                  href={news.url}
                  target="_blank"
                  className="nav-news-title"
                >
                  {news.title}
                </a>
              </div>
            ))}
          </div>
          <p className="nav-covid-title">[코로나 19]</p>
          <div className="nav-covid-group">
            <div className="nave-news-item">
            <span className="nav-covid-sub">일일 확진자</span> : {covidTotal}명
            </div>
            {covidData.map((city, i: number) => (
              <div
                key={i}
                className="nave-news-item"
              >
                <span className="nav-covid-sub">TOP{i+1}</span> {city.region} : {city.count}명
              </div>
            ))}
            <div className="nave-news-item">
              <span className="nav-covid-sub">일일 확진자</span> : {covidTotal}명
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
