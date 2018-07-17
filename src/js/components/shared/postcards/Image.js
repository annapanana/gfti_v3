import React from "react";

export default class Image extends React.Component {
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
    img.src = this.props.bg_img;
    draggable.addEventListener('mousedown', this.startDrag);
    draggable.addEventListener('mousemove', this.drag);
    draggable.addEventListener('mouseup', this.endDrag);
    // draggable.addEventListener('mouseleave', this.endDrag);

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

  render() {
    const {x_pos, y_pos, image_scale, image_rot, bg_img} = this.props,
          {image_bounding_box} = this.state;
    return (
      <image
        id="image"
        width="400"
        height="300"
        x={x_pos || 0}
        y={y_pos || 0}
        transform={`scale(${image_scale || 1})
        rotate(${image_rot || 0} ${image_bounding_box.width/2} ${image_bounding_box.height/2})`} href={bg_img}/>
    )
  }
}
