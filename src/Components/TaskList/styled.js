import styled from 'styled-components'

export const Container = styled.div`
    width:200px;
    height:300px;
    padding: 0.5rem 1.5rem;
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
    color:white;
    border-radius:10px;
    margin-right:1rem;
    background-color:rgb(28 96 197);
`

export const Header = styled.header`
    display:flex;
    width:100%;
    align-items:center;
    justify-content:space-between;
    padding: 0 0.5rem;
    margin-bottom:2rem;
`
export const Delete = styled.span`
    align-self:end;
    font-size:1.2rem;
    &:hover{
        cursor:default;
    }
`

export const TaskName = styled.h2`
    margin-bottom:0.8rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    font-size: 1.1rem;
    text-decoration:none;
`

export const List = styled.ul`
    list-style:none;
    width:100%;
    display:flex;
    flex-direction:column;
    margin:0;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
`
export const ListItem = styled.li`
    height:40px;
    display:flex;
    align-items:center;
    margin:0;
    font-size:1.05rem;
`
export const CheckBox = styled.input`
    background-color:none;
`