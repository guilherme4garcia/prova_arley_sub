// styles/globalStyles.js
import styled, { createGlobalStyle } from 'styled-components'


type Props = {
    //inputColor: string;
}

export default  createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;

    }
    html, body {
        height: 100%;
        background-color: rgb(61, 61, 71);
    }

    .center {
        display: -webkit-flexbox;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        justify-content: center;
        margin: auto;
        height: 80vh;
    }
    .container {
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        height: 100%;

    }
    
    
`


export const Container = styled.section`
    height: min-content;
    width: min-content;
    border: 1px solid;
    border-color: #61dafb;
    padding: 2rem;
    border-radius: 1rem;
`

export const Box = styled.div<Props>`
    display: flex ;
    flex-direction: column;

    
`

export const Form = styled.form`

    display: flex;
    flex-direction: column;

`


export const Buttonx = styled.button`
    margin-top: 1rem;
    width: 100%;
    color: black;
    font-weight: bold;
    background-color: #61dafb;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
`

export const Text = styled.h4 `

    color: #61dafb;
    
`