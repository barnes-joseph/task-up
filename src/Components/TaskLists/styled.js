import styled from 'styled-components'

export const Container = styled.div`
    width:100vw;
    min-height:100vh;
    padding: 2rem 2rem;
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
    background-color: #e0e0e0;
    @media only screen and (min-width:700px){
        width:60vw;
        align-self:center;
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
export const TasksTitle = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:80%;
    align-self:center;
`
export const AddDiv = styled.div`
    display:flex;
    flex-direction:column;
    width:100px;
    align-self:center;
    align-items:center;
    margin-top:3rem;
`

export const AddList = styled.span`
    border: 1px solid black;
    padding: 0 8px;
    border-radius:5px;
    font-size:1.5rem;
    margin-bottom:0.7rem;
    padding-bottom:2px;
    &:hover{
        cursor:pointer;
    }
`
export const Lists = styled.div`
    display:fd;
    width: 100%;
    overflow-x:auto;
    align-items:center;
    margin-top:auto;
`