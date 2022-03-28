// Style
import "./SlideWidget.css"

export default function SlideWidget() {

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
    window.scrollTo({top:1591, left:0, behavior: 'smooth'});
  }

  window.addEventListener('scroll', function() {
    const Medical = document.getElementById("medical"), 
        Medicine = document.getElementById("medicine"),
        Disease = document.getElementById("disease"),
        Covid = document.getElementById("covid"),
        Circle = document.getElementById("circle")

    if (this.window.scrollY < 300) {
      Medical?.classList.add("m-0")
      Medical?.classList.remove("medical-up-1")
      Medicine?.classList.remove("medicine-up-1")
      Disease?.classList.remove("disease-up-1")
      Covid?.classList.remove("covid-up-1")
      Circle?.classList.remove("circle-turn-1")
    } else if (300 <= this.window.scrollY && this.window.scrollY < 900) {
      Circle?.classList.add("circle-turn-1")
      Circle?.classList.remove("circle-turn-2")
      Medical?.classList.remove("medical-up-2")
      Medical?.classList.add("medical-up-1")

      Medicine?.classList.remove("medicine-up-2")
      Medicine?.classList.add("medicine-up-1")

      Disease?.classList.remove("disease-up-2")
      Disease?.classList.add("disease-up-1")

      Covid?.classList.remove("covid-up-2")
      Covid?.classList.add("covid-up-1")
    } else if (900 <= this.window.scrollY && this.window.scrollY < 1500) {
      Circle?.classList.add("circle-turn-2")
      Circle?.classList.remove("circle-turn-3")
      Medical?.classList.remove("medical-up-3")
      Medical?.classList.add("medical-up-2")

      Medicine?.classList.remove("medicine-up-3")
      Medicine?.classList.add("medicine-up-2")
      
      Disease?.classList.remove("disease-up-3")
      Disease?.classList.add("disease-up-2")

      Covid?.classList.remove("covid-up-3")
      Covid?.classList.add("covid-up-2")
    } else if (1500 <= this.window.scrollY) {
      Circle?.classList.add("circle-turn-3")
      Medical?.classList.add("medical-up-3")
      Medicine?.classList.add("medicine-up-3")
      Disease?.classList.add("disease-up-3")
      Covid?.classList.add("covid-up-3")
    }
  })

  return (
    <div className="h-m-container">
      <img
        className="stethoscope"
        src="/stethoscope.png"
        alt=""
      />
      <div
        id="circle"
        className="h-m-circle circle-st h-m-translate"></div>
      <div className="h-m-menu-list">
        <p
          onClick={scrollToMedical}
          id="medical"
          className="h-m-medical h-m-translate"
        >의료기관 조회</p>
        <p
          onClick={scrollToMedicine}
          id="medicine"
         className="h-m-medicine h-m-translate"
        >의약품 조회</p>
        <p
          onClick={scrollToDisease}
          id="disease"
         className="h-m-disease h-m-translate"
        >증상/질병 조회</p>
        <p
          onClick={scrollToCovid}
          id="covid"
         className="h-m-covid h-m-translate"
        >코로나 정보 조회</p>
      </div>
    </div>
  );
}