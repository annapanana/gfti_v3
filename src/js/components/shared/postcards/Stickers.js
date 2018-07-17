import React from "react";
const Settings = require('Settings');

export default class Stickers extends React.Component {
  constructor() {
    super()

    this.startDrag = this.startDrag.bind(this);
    this.drag = this.drag.bind(this);
    this.endDrag = this.endDrag.bind(this);

    this.state = {
      selectedElement: null,
      offset: 0,
      image_bounding_box: {
        width: 0,
        height: 0
      }
    }
  }

  componentDidMount() {
    const draggable = $("#sticker-group")[0];
    draggable.addEventListener('mousedown', this.startDrag);
    draggable.addEventListener('mousemove', this.drag);
    draggable.addEventListener('mouseup', this.endDrag);
    draggable.addEventListener('mouseleave', this.endDrag);
  }

  // TODO for both image and stickers only initiate drag functionality if on the right tab
  startDrag(e) {
    const selectedElement = e.target.parentElement,
          offset = this.getMousePosition(e, selectedElement);
    if ($(selectedElement).hasClass( "sticker" )) {
      offset.x -= parseFloat(selectedElement.getAttributeNS(null, "x")),
      offset.y -= parseFloat(selectedElement.getAttributeNS(null, "y"));
      this.setState({
        selectedElement:selectedElementom ,
        offset: offset
      })
    }
  }

  drag(e) {
    const {selectedElement, offset} = this.state;
    if (selectedElement) {
      const coord = this.getMousePosition(e, selectedElement);
      selectedElement.setAttributeNS(null, "x", coord.x - offset.x);
      selectedElement.setAttributeNS(null, "y", coord.y - offset.y);
    }
  }

  endDrag(e) {
    if (this.state.selectedElement) {
      const bbox = this.getElemBoundingBox(e.target);
      this.setState({
        image_bounding_box: bbox,
        selectedElement: null,
        offset: 0}, ()=> {
          const xPos = e.target.getAttributeNS(null, "x");
          const yPos = e.target.getAttributeNS(null, "y");
          this.props.updatePostcard("x_pos", xPos);
          this.props.updatePostcard("y_pos", yPos);
        })
    }
  }

  getMousePosition(e, elem) {
    var CTM = elem.getScreenCTM();
    return {
      x: (e.clientX - CTM.e) / CTM.a,
      y: (e.clientY - CTM.f) / CTM.d
    };
  }

  getElemBoundingBox(elem) {
    const bbox = elem.getBBox();
    return {
      width: bbox.width,
      height: bbox.height
    }
  }

  displayStickers(stickers) {
    const root = "gfti/Funky-Stickers";
    return stickers.map((sticker, key) => {
      console.log(sticker.x, sticker.y);
      return (
        <g
          key={key}
          class="sticker"
          transform={`translate(${sticker.x} ${sticker.y})`}
          width="50"
          height="50">
          <image width="50" height="50" href={`${Settings.assetServer}${root}${sticker.src}`}/>
        </g>
      )
    })
  }

  render() {
    const {stickers} = this.props;
    return (
      <g id="sticker-group">
        {this.displayStickers(stickers)}
      </g>
    )
  }
}
