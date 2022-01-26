import styled,{css} from 'styled-components'

export const Container = styled.div`
    width:80%;
    align-self:center;
    display:flex;
    flex-direction:column;
    align-items:center;
    @media only screen and (min-width:700px){
        width:60%;
    }
`

export const TaskInput = styled.input`
    height:25px;
    width:80%;
    padding-left:5px;
    font-size:1rem;
    margin-bottom: 0.5rem;
    border:none;
    border-radius:5px;
    outline:none;
    box-shadow: 2px 2px 2px #888;
`
export const Buttons = styled.div`
    // align-self:flex-end;
    width:80%;
    display:flex;
    justify-content: flex-end;
`

export const Button = styled.button`
    border:none;
    border-radius:5px;
    padding:5px;
    width:60px;
    box-sizing:border-box;
    margin-left:10px;
    color:white;
    ${({color})=> css`background-color:${color}`}
`