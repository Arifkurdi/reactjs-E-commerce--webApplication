import react, { useEffect, useState } from "react";
import image from "../images/items/5.jpg";
import { Container, Col } from "react-bootstrap";
import $ from "jquery";
import {
  StarBorder,
  Autorenew,
  LocalShipping,
  CheckCircleOutline,
  Star,
} from "@material-ui/icons";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
// import StarIcon from "@mui/icons-material/Star";
import Favs from "./Favs";
const Product_page = ({ fs, name, price, state, descripe, id }) => {
  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };

  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);
  let disIncVal = () => {
    console.log("di");
  };
  function incVal() {
    console.log(",,");
  }
  $(".more").on("click", function () {
    // let val = parseInt($("#quant").val()) + 1;
    // $("#quant").val(val);
    console.log(parseInt($("#quant").val()));
  });

  const [product, setProduct] = useState([]);
  async function getFavs() {
    const res = await fetch("http://localhost:5000/favs");
    const data = await res.json();
    return data;
  }

  useEffect(() => {
    const getProducts = async () => {
      const productFromServer = await getFavs();

      setProduct(productFromServer);
    };
    getProducts();
  }, []);
  console.log(product);

  return (
    <div className="product_page">
      <Container className="row">
        <Col md="6" xs="12">
          <div className="product-img">
            <img src={image} />
            <div className="buy-buttons row">
              <Col md="6" xs="12">
                <button className="btn btn-primary">Cart</button>
              </Col>
              <Col md="6" xs="12">
                <button className="btn btn-success">Cart</button>
              </Col>
            </div>
          </div>
        </Col>
        <Col md="6" xs="12">
          <div className="product-info">
            <h6 className="product-name">Mac Max Pro</h6>
            <Col>
              <span className="product-saler">
                <a href="">Cesiar Store</a>
              </span>
              <span className="product-rate">
                <Box
                  sx={{
                    width: 200,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Rating
                    name="hover-feedback"
                    value={value}
                    precision={0.5}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                      setHover(newHover);
                    }}
                    emptyIcon={
                      <Star style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                  {value !== null && (
                    <Box sx={{ ml: 2 }}>
                      {labels[hover !== -1 ? hover : value]}
                    </Box>
                  )}
                </Box>
                21,325 reviews
              </span>
            </Col>
            <hr />
            <div className="product-prices">
              <span className="all-amount">
                All : <span>132$</span>
              </span>
              <span className="discount">
                DisCount Amount: <span>12%</span>
              </span>
              <div className="new-price">
                Deal Price: <span>120$</span>
              </div>
              <div className="price-save">
                Save: <span>12$</span>
              </div>
            </div>
            <div className="product-services row">
              <Col>
                <div className="ship text-center">
                  <div className="ship-pic">
                    <Autorenew />
                  </div>
                  <p>10 Days Replacment</p>
                </div>
              </Col>
              <Col>
                <div className="ship">
                  <div className="ship-pic">
                    <LocalShipping />
                  </div>
                  <p>Daily Deliverd</p>
                </div>
              </Col>
              <Col>
                <div className="ship text-center">
                  <div className="ship-pic">
                    <CheckCircleOutline />
                  </div>
                  <p>1 Year Warranty</p>
                </div>
              </Col>
            </div>
            <hr />
            <div className="product-feats">
              <div className="store-services">
                <p>Arrive tommorrw</p>
                <p>
                  Solid By <a href="">Cesiar Store</a>
                </p>
              </div>
              <div className="product-spacifc">
                <div className="product-order-spac row">
                  <Col>
                    <div className="product-colors">
                      <div>Colors: </div>
                      <span className="red"></span>
                      <span className="blue"></span>
                      <span className="black"></span>
                    </div>
                  </Col>
                  <Col>
                    <div className="product-quan">
                      <button className="btn more" onClick={incVal()}>
                        +
                      </button>
                      <input
                        type="text"
                        value={1}
                        placeholder="1"
                        disabled
                        id="quant"
                      />
                      <button className="btn less" /*onClick={disIncVal()}*/>
                        -
                      </button>
                    </div>
                  </Col>
                </div>
                <div className="product-soft">
                  <div className="soft-head">size: </div>
                  <div></div>
                  <div className="soft">3GB</div>
                  <div className="soft">4GB</div>
                  <div className="soft">8GB</div>
                  <div className="more-opation">
                    Click For More <span>+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <div className="product-desc">
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            eveniet cumque magni nihil ipsam laboriosam alias officiis fugit
            tenetur.
          </p>
        </div>
        <div className="saler-products">
          <div className="saler-product">
            <Favs fs={product} />
          </div>
        </div>
        <div className="same-catg-product">
          <div className="catg-product">Product</div>
          <div className="catg-product">Product</div>
          <div className="catg-product">Product</div>
          <div className="catg-product">Product</div>
        </div>
      </Container>
    </div>
  );
};

export default Product_page;
