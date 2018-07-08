import React from "react";

export default class Front extends React.Component {
  constructor() {
    super();
    this.startDrag = this.startDrag.bind(this);
    this.drag = this.drag.bind(this);
    this.endDrag = this.endDrag.bind(this);

    this.state = {
      image_url: "",
      image_scale: "",
      image_pos_x: "",
      image_pos_y: "",
      image_filter: "",
      frame: "",
      color: "",
      font_family: "",
      font_size: "",
      text_pos: "",
      greetings_text: "",
      selectedElement: null,
      offset: 0
    }
  }

  componentDidMount() {
    const draggable = $("#image")[0];
    draggable.addEventListener('mousedown', this.startDrag);
    draggable.addEventListener('mousemove', this.drag);
    draggable.addEventListener('mouseup', this.endDrag);
    draggable.addEventListener('mouseleave', this.endDrag);
  }

  startDrag(e) {
    const selectedElement = e.target,
          offset = this.getMousePosition(e, selectedElement);
    offset.x -= parseFloat(selectedElement.getAttributeNS(null, "x")),
    offset.y -= parseFloat(selectedElement.getAttributeNS(null, "y"));
    this.setState({
      selectedElement:selectedElement,
      offset: offset
    })
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
    this.setState({
      selectedElement: null,
      offset: 0})
  }

  getMousePosition(e, elem) {
    var CTM = elem.getScreenCTM();
    return {
      x: (e.clientX - CTM.e) / CTM.a,
      y: (e.clientY - CTM.f) / CTM.d
    };
  }

  render() {
    const {data} = this.props,
          pc_front = data.pc_front;
    return (
      <div class="postcard-front-wrap side">
        <svg viewBox="0 0 400 300">
          <title>Image Test</title>
          <image id="image" width="400" height="300" x="0" y="0" transform={`scale(${pc_front.image_scale})`} href={data.bg_img}/>
        </svg>
      </div>
    )
  }
}
