"use client"

import Image from "next/image"
import { useState } from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 65vw;
  height: 70px;
  border: 1px solid rgba(100, 100, 100, 0.3);
  border-radius: 30px;
  display: flex;
  padding: 10px;
  justify-content: space-between;
  gap: 30px;
`

const TextInput = styled.input`
  margin-left: 10px;
  border: none;
  background: transparent;
  height: 100%;
  width: 100%;
  outline: none;
  font-size: 25px;
`

type InputProps = {
  handleSetMessages: ($: string) => void;
}

export default function Input({ handleSetMessages }: InputProps) {

  const [input, setInput] = useState("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && e.nativeEvent.isComposing === false) {
      handleSetMessages(input);
      setInput("");
    } 
  }

  return (
    <Container>
      <TextInput onChange={onChangeInput} value={input} onKeyDown={handleKeyDown} />
      <Image src="/button.svg" alt="button" onClick={() => { handleSetMessages(input); setInput("") }} />
    </Container>  
  )
}