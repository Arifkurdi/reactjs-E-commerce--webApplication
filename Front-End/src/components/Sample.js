import { Container, Row } from "react-bootstrap";
import $ from "jquery";
import Favs from "./Favs";

const Sample = ({ fs }) => {
  var el_sort = document.querySelectorAll(".sort");
  for (let i = 0; i < el_sort.length; i++) {
    el_sort[i].onclick = function () {
      let c = 0;
      while (c < el_sort.length) {
        el_sort[c++].className = "sort";
      }
      el_sort[i].className = "active sort";
    };
  }

  let el_slide = document.querySelectorAll(".slide-ball");

  for (let i = 0; i < el_slide.length; i++) {
    el_slide[i].onclick = function () {
      let c = 0;
      while (c < el_slide.length) {
        el_slide[c++].className = "slide-ball";
      }
      el_slide[i].className = "slide-ball active";
    };
  }

  $(".sort")
    .unbind()
    .on("click", function () {
      // console.log($(this).data("open"));
      $("." + $(this).data("open"))
        .removeClass("d-none")
        .siblings()
        .addClass("d-none");
      $(".slide-balls").removeClass("d-none");
    });

  $("#ball-two").on("click", function () {
    // $("#slide-one").hide(200).removeClass("active").addClass("hide");
    // $("#slide-two").removeClass("hide").show(200).addClass("active");
    // $("#slide-three").hide(200).removeClass("active").addClass("hide");
    // $("#slide-four").removeClass("hide").show(200).addClass("active");
    // $("#slide-five").hide(200).removeClass("active").addClass("hide");
    // $("#slide-six").removeClass("hide").show(200).addClass("active");
    $(".slide-one").removeClass("active").addClass("hide");
    $(".slide-two")
      .removeClass("hide")
      .animate("left" + +"px")
      .addClass("active");
  });
  $("#ball-one").on("click", function () {
    // $("#slide-two").hide(200).removeClass("active").addClass("hide");
    // $("#slide-one").removeClass("hide").show(200).addClass("active");
    // $("#slide-four").hide(200).removeClass("active").addClass("hide");
    // $("#slide-three").removeClass("hide").show(200).addClass("active");
    // $("#slide-six").hide(200).removeClass("active").addClass("hide");
    // $("#slide-five").removeClass("hide").show(200).addClass("active");
    $(".slide-one").removeClass("hide").show().addClass("active");
    $(".slide-two").removeClass("active").addClass("hide");
  });

  return (
    <div className="sample">
      <Container>
        <div className="select-sorting-sample d-flex">
          <div
            className="sort active"
            id="sort-one"
            data-open="sort-by-featured"
          >
            <div>Featured</div>
            <span></span>
          </div>
          <div className="sort" id="sort-two" data-open="sort-by-onSale">
            <div>On Sale</div>
            <span></span>
          </div>
          <div className="sort" id="sort-three" data-open="sort-by-topRate">
            <div>Top Rate</div>
            <span></span>
          </div>
        </div>
        <div className="sorted-products">
          <div className="sort-by-featured">
            <div className="active slide slide-one" id="slide-one">
              <Row>
                <Favs
                  fs={fs.slice(0, 4)}
                  md={"3"}
                  xs={"6"}
                  pitCount={4}
                  size={"normal"}
                />
              </Row>
            </div>
            <div className="hide slide slide-two" id="slide-two">
              <Row>
                <Favs
                  fs={fs.slice(4, 8)}
                  md={"3"}
                  xs={"6"}
                  pitCount={3}
                  size={"normal"}
                />
              </Row>
            </div>
          </div>
          <div className="sort-by-onSale d-none">
            <div className="active slide slide-one" id="slide-three">
              <Row>
                <Favs
                  fs={fs.slice(8, 12)}
                  md={"3"}
                  xs={"6"}
                  pitCount={4}
                  size={"normal"}
                />
              </Row>
            </div>
            <div className="hide slide slide-two" id="slide-four">
              <Row>
                <Favs
                  fs={fs.slice(12, 16)}
                  md={"3"}
                  xs={"6"}
                  pitCount={4}
                  size={"normal"}
                />
              </Row>
            </div>
          </div>
          <div className="sort-by-topRate d-none">
            <div className="active slide slide-one" id="slide-five">
              <Row>
                <Favs
                  fs={fs.slice(10, 12)}
                  md={"3"}
                  xs={"6"}
                  pitCount={2}
                  size="normal"
                />
              </Row>
            </div>
            <div className="hide slide slide-two" id="slide-six">
              <Row>
                <Favs
                  fs={fs.slice(15, 18)}
                  md={"3"}
                  xs={"6"}
                  pitCount={3}
                  size="normal"
                />
              </Row>
            </div>
          </div>
          <div className="slide-balls">
            <span className="slide-ball active" id="ball-one"></span>
            <span className="slide-ball" id="ball-two"></span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Sample;
