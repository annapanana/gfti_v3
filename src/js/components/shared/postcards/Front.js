import React from "react";
import FramePath from "./FramePath";

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
      offset: 0,
      image_bounding_box: {
        width: 0,
        height: 0
      }
    }
  }

  componentDidMount() {
    const draggable = $("#image")[0];
    const img = new Image();
    let self = this;
    img.onload = function(){
      self.setInitialImageVals(this.width, this.height)
    };
    img.src = this.props.data.bg_img;
    draggable.addEventListener('mousedown', this.startDrag);
    draggable.addEventListener('mousemove', this.drag);
    draggable.addEventListener('mouseup', this.endDrag);
    draggable.addEventListener('mouseleave', this.endDrag);

  }

  setInitialImageVals(width, height) {
    const adjustedWidth = width > height ? 400 : 300 / height * width;
    const adjustedHeight = height > width ? 300 : 400 / width * height;
    const image = ($("#image")[0]);
    image.setAttributeNS(null, "width", adjustedWidth)
    image.setAttributeNS(null, "height", adjustedHeight)
    this.setState({image_bounding_box: this.getElemBoundingBox(image)});
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

  render() {
    const {data} = this.props,
          {image_bounding_box} = this.state,
          pc_front = data.pc_front;

    return (
      <div class="postcard-front-wrap side edit-mode">
        <svg viewBox="0 0 400 300">
          <title>Image Test</title>
          <image
            id="image"
            width="400"
            height="300"
            x={pc_front.x_pos || 0} y={pc_front.y_pos || 0}
            transform={`scale(${pc_front.image_scale || 1})
            rotate(${pc_front.image_rot || 0} ${image_bounding_box.width/2} ${image_bounding_box.height/2})`} href={data.bg_img}/>
            <FramePath frame={pc_front.frame} color={pc_front.color}/>
        </svg>
      </div>
    )
  }
}
