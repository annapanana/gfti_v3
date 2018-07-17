import React from "react";
import Slider from "react-slick";
const Settings = require('Settings');

// TODO add stickers to canvas on click
// TODO make stickers draggable
export default class Stickers extends React.Component {
  getFrameOptions(stickers) {
    const root = "gfti/Funky-Stickers";
    const options = [
      {key: "bee", src: "/fun/fun_PNG/bee.png", name: "Bee"},
      {key: "broken-heart", src: "/fun/fun_PNG/broken heart.png", name: "Broken Heart"},
      {key: "lightning", src: "/fun/fun_PNG/lightning.png", name: "Lightning"},
      {key: "lock", src: "/fun/fun_PNG/lock.png", name: "Lock"},
      {key: "peace-hand", src: "/fun/fun_PNG/peace hand.png", name: "Peace Hand"},
      {key: "rainbow-star", src: "/fun/fun_PNG/rainbow star.png", name: "Rainbow Star"},
      {key: "rainbow", src: "/fun/fun_PNG/rainbow.png", name: "Rainbow"},
      {key: "crown", src: "/fashion/fashion_PNG/crown.png", name: "Crown"},
      {key: "diamond", src: "/fashion/fashion_PNG/diamond.png", name: "Diamond"},
      {key: "eye", src: "/fashion/fashion_PNG/eye.png", name: "Eye"},
      {key: "flower", src: "/fashion/fashion_PNG/flower.png", name: "Flower"},
      {key: "heart", src: "/fashion/fashion_PNG/heart.png", name: "Heart"},
      {key: "leaf", src: "/fashion/fashion_PNG/leaf.png", name: "Leaf"},
      {key: "lips", src: "/fashion/fashion_PNG/lips3.png", name: "Lips"},
      {key: "star", src: "/fashion/fashion_PNG/star.png", name: "Star"},
      {key: "stars", src: "/fashion/fashion_PNG/stars.png", name: "Stars"},
      {key: "sunglasses", src: "/fashion/fashion_PNG/sunglasses.png", name: "Sunglasses"},
      {key: "woman-sign", src: "/fashion/fashion_PNG/woman sign.png", name: "Female"}
    ];
    return options.map((elem, key) => {
      return (
        <div class={"widget-option" + (stickers.find(sticker => elem.key === sticker.key) ? " selected":"")} key={key} onClick={this.addSticker.bind(this, elem, stickers)}>
          <img class="frame" src={`${Settings.assetServer}${root}${elem.src}`}/>
        </div>
      )
    })
  }

  addSticker(sticker, stickers) {
    if (!stickers.find(elem=> elem.key === sticker.key)) {
      sticker.x = 200;
      sticker.y = 150;
      stickers.push(sticker);
      this.props.updatePostcard("stickers", stickers);
    }

  }

  render() {
    const {postcard, updatePostcard} = this.props,
          stickers = postcard.pc_front.stickers || [];
    const slickSettings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    }
    return (
      <div class="panel">
        <div class="ui-slider">
          <Slider {...slickSettings} class="ui-widget white">
            {this.getFrameOptions(stickers)}
          </Slider>
        </div>
      </div>
    )
  }
}
