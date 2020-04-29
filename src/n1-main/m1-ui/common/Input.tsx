import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    input {
      font-family: 'Poiret One', cursive;
      font-size: 20px;
      font-weight: bold;
      outline: none;
      margin: 5px;
      padding: 5px;
      border: 2px solid #015668;
      border-bottom-width: 4px;
      background: rgba(255,255,255,1);
    }
  
`
const WrapperCheckbox = styled.div`
  input {
    display: none;
  }
  display: grid;

.check{
  cursor: pointer;
  position: relative;
  margin: auto;
  width: 18px;
  height: 18px;
  -webkit-tap-highlight-color: transparent;
  transform: translate3d(0,0,0);
  svg{
    position: relative;
    z-index: 1;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: #C8CCD4;
    stroke-width: 1.5;
    transform: translate3d(0,0,0);
    transition: all .2s ease};
    path{
      stroke-dasharray: 60;
      stroke-dashoffset: 0}
    polyline {
      stroke-dasharray: 22;
      stroke-dashoffset: 66}
  &:hover {
    svg{
      stroke: #015668}}
}
#cbx:checked + .check{
  svg{
    stroke: #015668}
    path{
      stroke-dashoffset: 60;
      transition: all .3s linear}
    polyline{
      stroke-dashoffset: 42;
      transition: all .2s linear;
      transition-delay: .15s}}

`

type OwnPropsType = {
    placeholder?: string
    type?: string
}
type PropsType = OwnPropsType
const Input: React.FC<PropsType> = (props) => {
    if (props.type === 'checkbox') {
        return (
            <WrapperCheckbox>
            <input type="checkbox" id="cbx"/>
                <label htmlFor="cbx" className="check">
                    <svg width="18px" height="18px" viewBox="0 0 18 18">
                        <path
                            d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"/>
                        <polyline points="1 9 7 14 15 4"/>
                    </svg>
                </label>
            </WrapperCheckbox>
        )
    }
    return (
        <Wrapper>
            <input placeholder={props.placeholder} type={props.type}/>
        </Wrapper>
    )
}
export default Input