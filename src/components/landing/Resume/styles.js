import styled from "styled-components";
export const HeaderWraper = styled.div`
  height: 40px;
  width: 100%;
  background-color: #6b63ff82;
  position: initial;
  z-index: 1;
`;

export const Left = styled.div`
  height: 1850px;
  width: 45px;
  background-color: #e0eeee;
  float: left;
  position: absolute;
`;

export const Right = styled.div`
  height: 1850px;
  width: 45px;
  background-color: #e0eeee;
  float: right;
  position: inherit;
`;

export const Footer = styled.div`
  height: 50px;
  width: 100%;
  background-color: #6b63ff82;
  clear: both;
  position: relative;
`;

export const Intro = styled.h2`
 text-align: center;
`;

export const EmployerWraper = styled.div`
  display: flex;
  flex-flow: row wrap;
  font-weight: bold;
  padding-top: 10px;

  .alignleft {
    width: 50%;
    text-align: left;
  }
  .alignright {
    width: 50%;
    text-align: right;
  }
`;
export const ResumeWraper = styled.div`
  max-width: 900px;
  margin: auto;

  div {
    border-radius: 5px;
  }

  #title {
    margin-left: 3%;
  }

  .stuff {
    display: inline-block;
    margin-top: 6px;
    margin-left: 55px;
    width: 75%;
    height: 1000px;
  }

  .head {
    font-size: 20px;
  }

  #name {
    font-family: Sacramento;
    float: right;
    margin-top: 10px;
    margin-right: 4%;
  }

  a {
    color: black;
    text-decoration: none;
  }

  @media only screen and (max-width: 430px) {
    .left,
    .right {
      display: none;
    }
    .stuff {
      width: 100%;
      margin-left: 10px;
    }
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
  }
`;
