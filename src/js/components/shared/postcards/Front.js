import React from "react";
import FramePath from "./FramePath";
import DisplayText from "shared/postcards/DisplayText";

export default class Front extends React.Component {
  constructor() {
    super();
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
            <FramePath
              frame={pc_front.frame}
              color={pc_front.color}
              opacity={pc_front.opacity}
              font_size={pc_front.font_size}
              text={pc_front.text}/>
            {
              pc_front.frame.key !== "text-path" &&
                <DisplayText
                  color={pc_front.color.color}
                  size={pc_front.font_size}
                  text={pc_front.text}
                  text_x={pc_front.text_x}
                  text_y={pc_front.text_y}
                  font={pc_front.font.font}
                  text_opacity={pc_front.text_opacity}/>
            }
        </svg>
      </div>
    )
  }
}
