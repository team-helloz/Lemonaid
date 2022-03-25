// Style
import "./SlideWidget.css"

interface ScrollProps {
  nowMenu: string;
}

export default function SlideWidget(props: ScrollProps) {

  const { nowMenu } = props

  function scrollToMedical() {
    window.scrollTo({top:0, left:0, behavior: 'smooth'});
  }
  function scrollToMedicine() {
    window.scrollTo({top:491, left:0, behavior: 'smooth'});
  }
  function scrollToDisease() {
    window.scrollTo({top:1191, left:0, behavior: 'smooth'});
  }
  function scrollToCovid() {
    console.log(1)
    window.scrollTo({top:1591, left:0, behavior: 'smooth'});
  }

  return (
    <div className="h-m-container">
      <div className="h-m-now-menu"></div>
      <div className={nowMenu}>
        <p
          onClick={scrollToMedical}
          className="h-m-medical-title"
        >의료기관 조회</p>
        <p
          onClick={scrollToMedicine}
         className="h-m-medicine-title"
        >의약품 조회</p>
        <p
          onClick={scrollToDisease}
         className="h-m-disease-title"
        >증상/질병 조회</p>
        <p
          onClick={scrollToCovid}
         className="h-m-covid-title"
        >코로나 정보 조회</p>
      </div>
    </div>
  );
}