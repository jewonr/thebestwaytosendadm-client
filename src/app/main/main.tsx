"use client"

import styled from "styled-components"
import Message from "./message"
import { IMessage } from "../page"
import { useEffect, useRef } from "react"

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
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`

type MainProps = {
  messages: IMessage[] | null;
}

export default function Main({ messages }: MainProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages])

  return (
    <Container ref={containerRef}>
      {messages?.map((val, idx) => (
        <Message colorType={val.colorType} text={val.text} key={idx} />
      ))}
    </Container>
  )
}