"use client"

import styled from "styled-components"

const Container = styled.div<{ colortype: "blue" | "gray" }>`
  display: flex;
  flex-direction: ${props => props.colortype == "blue" ? "row-reverse" : ""};
  align-items: center;
`

const MessageBox = styled.div<{ colortype: "blue" | "gray" }>`
  height: max-content;
  width: max-content;
  border-radius: 30px;
  background-color: ${props => props.colortype == "blue" ? "#1973DD" : "#DDDDDD"};
  color: ${props => props.colortype == "blue" ? "#FFFFFF" : "#000000"};
  padding: 20px 20px;
  font-size: 25px;
  letter-spacing: -0.5px;
  display: flex;
  align-items: center;
`

const Emoji = styled.div`
  font-size: 40px;
  margin-right: 15px;
`

type MessageProps = {
  colorType: "blue" | "gray";
  text: string;
}

export default function Message({ colorType, text }: MessageProps) {
  return (
    <Container colortype={colorType}>
      {(colorType === "gray") && <Emoji>🤖</Emoji>}
      <MessageBox colortype={colorType}>{text}</MessageBox>
    </Container>
  )
}