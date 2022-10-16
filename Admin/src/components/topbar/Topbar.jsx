import React from "react";
import "./topbar.css";
import styled from "styled-components"
const Logo = styled.h1`
  font-weight: bold;
`;

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
        <Logo>FIND YOUR DRIP</Logo>
        </div>
        <div className="topRight">
         
          <img src="https://thumbs.dreamstime.com/b/admin-sign-laptop-icon-stock-vector-166205404.jpg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
