import React from "react";
import styled from 'styled-components'
import { OpenSans, cardWidth } from "../utils/config";

export const Heading = styled.h2`
  font-family: ${OpenSans};
  font-size: 30px,
  font-weight: 600;
  color: black;
`

export const SmallHeading = styled.h3`
  font-family: ${OpenSans};
  font-size: 25px,
  font-weight: 600;
  color: white;
`

export const Name = styled.h1`
  margin-top: 40px;
  font-family: ${OpenSans};
  font-size: 30px,
  font-weight: 600;
  color: white;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${cardWidth()}px;
  zIndex: 2;
  padding: 20px;
  margin: 20px;
  background-color: #ffffff;
  border-radius: 10px;
`

export const RowDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Link = styled.button`
  background: transparent;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: none;
  color: blue;
  text-decoration: underline;
`