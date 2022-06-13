import Fav from "./Fav";
import { Col } from "react-bootstrap";
import FavSmall from "./FavSmall";
import FavBig from "./FavBig";
const Favs = ({ fs, md, xs, pitCount = 4, size }) => {
  function getFour(count) {
    // var pitFavs = favs;
    var FourFavs = [];
    let h = parseInt(count);
    for (let i = 0; i < h; i++) {
      FourFavs[i] = fs[i];
    }
    return FourFavs;
  }

  let myFavs = getFour(pitCount);

  function getFavSize(FavSize) {
    switch (FavSize) {
      case "normal":
        return myFavs.map((fav, index) => (
          <Col key={index} md={md} xs={xs}>
            <Fav
              id={fav.id}
              name={fav.name}
              catigory={fav.catigory}
              img={fav.image1}
              img2={fav.image2}
              img3={fav.image3}
              price={fav.price}
              discription={fav.discription}
              state={fav.state}
              seller={fav.seller}
              discount={fav.discount}
              bought={fav.bought}
            />
          </Col>
        ));
        break;
      case "small":
        return myFavs.map((fav, index) => (
          <Col key={index} md={md} xs={xs}>
            <FavSmall
              id={fav.id}
              name={fav.name}
              catigory={fav.catigory}
              img={fav.image1}
              img2={fav.image2}
              img3={fav.image3}
              price={fav.price}
              discription={fav.discription}
              state={fav.state}
              seller={fav.seller}
              discount={fav.discount}
              bought={fav.bought}
            />
          </Col>
        ));
        break;
      case "big":
        return myFavs.map((fav, index) => (
          <Col key={index} md={md} xs={xs}>
            <FavBig
              id={fav.id}
              name={fav.name}
              catigory={fav.catigory}
              img={fav.image1}
              img2={fav.image2}
              img3={fav.image3}
              price={fav.price}
              discription={fav.discription}
              state={fav.state}
              seller={fav.seller}
              discount={fav.discount}
              bought={fav.bought}
            />
          </Col>
        ));
        break;
      /* 
          discription,
  state,
  seller
        */
      default:
        return myFavs.map((fav, index) => (
          <Col key={index} md={md} xs={xs}>
            <FavSmall
              id={fav.id}
              name={fav.name}
              catigory={fav.catigory}
              img={fav.image1}
              img2={fav.image2}
              img3={fav.image3}
              price={fav.price}
              discription={fav.discription}
              state={fav.state}
              seller={fav.seller}
              discount={fav.discount}
              bought={fav.bought}
            />
          </Col>
        ));
        break;
    }
  }
  // console.log(typeof myFavs);
  // if (load) {
  //   return <p>Few Minute Beach</p>;
  // }
  return (
    <div className="favs">
      <div className="container row">
        {/* {getFavSize(size)} */}
        {getFavSize(size)}
      </div>
    </div>
  );
};

export default Favs;
