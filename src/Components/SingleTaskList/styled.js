import styled from 'styled-components'

export const Container = styled.div`
    width:100vw;
    min-height:100vh;
    padding: 2rem 2rem;
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
    background-color:#e0e0e0;
    align-self:center;
    @media only screen and (min-width:700px){
        width:60vw;
    }
`
export const Header = styled.header`
    display:flex;
    width:100%;
    align-items:center;
    justify-content:space-between;
    padding: 0 0.5rem;
    margin-bottom:2rem;
`
export const Close = styled.span`
    font-size:1.3rem;
`
export const TaskTitle = styled.div`
    margin-left:3rem;
    width:fit-content;
`
export const TaskList = styled.ul`
    list-style:none;
`

export const TaskInput = styled.input`
    width:60%;
    border: 2px solid grey;
    border-radius: 5px;
    height:25px;
    align-self:center;
    border:none;
    border-radius:5px;
    outline:none;
    box-shadow: 2px 2px 2px #888;
    padding-left:5px;
`

export const Add = styled.span`
    background-color: green;
    width: 10px;
    height:100%;
    padding-right:8px;
    padding-left:5px;
    padding-bottom: 2px;
    border-radius:3px;
    margin-left:5px;
    color:white;
    font-size:1.2rem;
    align-self:center;
    &:hover{
        cursor:pointer;
    }
`

export const ListItem = styled.li`
    display:flex;
    align-items:center;
    height:50px;
    font-weight:500;
    width:80%;
`
export const CheckBox = styled.input`
    margin-right:2rem;
`
export const AddTask = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:red;
    width:40px;
    height: 40px;
    color:white;
    border-radius:5px;
    align-self:flex-end;
    font-size:1.5rem;
    position:absolute;
    bottom:16px;
    right:1rem;
    z-index:10;
`