import React from "react"
import NextButton from "./NextButton";

export default class Step0 extends React.Component {
  render() {
    return <NextButton to={"/step-1"} />
  }
}
