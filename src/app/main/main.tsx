"use client"

import styled from "styled-components"
import Message from "./message"
import { IMessage } from "../page"

const Container = styled.div`
  width: 65vw;
  height: 65vh;
  border: 1px solid rgba(100, 100, 100, 0.15);
  border-radius: 20px;
  box-shadow: rgba(100, 100, 100, 0.05) 0px 15px 30px;
  padding: 50px 25px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow-x: scroll;
`

type MainProps = {
  messages: IMessage[] | null;
}

export default function Main({ messages }: MainProps) {
  return (
    <Container>
      {messages?.map((val, idx) => (
        <Message colorType={val.colorType} text={val.text} key={idx} />
      ))}
    </Container>
  )
}