"use client"

import styled from "styled-components"
import Main from "./main/main"
import Input from "./input/input"
import { useEffect, useState } from "react"
import axios from "axios"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
`

export interface IMessage {
  text: string;
  colorType: "blue" | "gray";
}

export type reqAndResState = "classification" | "transform" | "loading";

export default function Home() {
  const [messages, setMessages] = useState<IMessage[] | null>([]);
  const [reqAndResState, setReqAndResState] = useState<reqAndResState>("classification");
  const [textStyleState, setTextStyleState] = useState("informal");

  const handleSetMessages = async (text: string) => {
    if (reqAndResState !== "loading") {
      const updatedMessages: IMessage[] = [...messages!, { text: text, colorType: "blue" }];
      setMessages(updatedMessages);
      if (reqAndResState === "classification") {
        await axios.post("http://localhost:8000/classification", { text })
          .then(data => {
            const updatedMessagesWithResponse: IMessage[] = [
              ...updatedMessages, 
              { text: `분석 완료! 대화 상대는 ${data.data[1]} 말투 입니다.`, colorType: "gray" },
              { text: "대화 상대에게 답장할 메시지를 입력하면, 말투를 변환합니다...", colorType: "gray" }
            ];
            setTextStyleState(data.data[0]);
            setReqAndResState("transform");
            setMessages(updatedMessagesWithResponse);
          })
      } else if (reqAndResState === "transform") {
        setReqAndResState("loading");
        await axios.post("http://localhost:8000/transform", { text, style: textStyleState })
          .then(data => {
            const updatedMessagesWithResponse: IMessage[] = [
              ...updatedMessages, 
              { text: "말투 변환 완료!", colorType: "gray" },
              { text: data.data, colorType: "gray" }
            ];
            setReqAndResState("classification")
            setMessages(updatedMessagesWithResponse);
          })
      } 
    }
  }

  useEffect(() => {
    if (reqAndResState === "classification") {
      setMessages(messages => [...messages!, { text: "대화 상대의 메시지를 입력하면, 말투를 분석합니다...", colorType: "gray" }])
    }
  }, [reqAndResState])

  return (
    <Container>
      <Main messages={messages} />
      <Input handleSetMessages={handleSetMessages} />
    </Container>
  )
}
