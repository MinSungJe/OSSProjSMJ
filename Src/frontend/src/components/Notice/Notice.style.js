import styled from "styled-components";
import { colors } from "../../constants/Colors"

export const Container = styled.div`
background-color: white;
box-shadow: 4px 4px 5px 0px rgba(55,49,80,0.30);
-webkit-box-shadow: 4px 4px 5px 0px rgba(55,49,80,0.30);
-moz-box-shadow: 4px 4px 5px 0px rgba(55,49,80,0.30);
border-radius: 10px;
overflow: hidden;
border: 1px solid ${colors.Black};
`

export const MainTable = styled.table`
width: 100%;
border-spacing: 0px;
`

export const TableHead = styled.thead`
font-size: 20px;
background-color: ${colors.Black};
color: ${colors.White};
td {
    font-weight: 600;
    padding: 10px;
}
`

export const TableBody = styled.tbody`
background-color: ${colors.White};
`

export const W30td = styled.td`
width: 30%;
`

export const W70td = styled.td`
width: 70%;
`

export const CategoryDetail = styled.span`
color: ${colors.Red};
`

export const ContentsCell = styled.td`
text-align: left;
padding: 10px;
`

export const Contents = styled.p`
cursor: pointer;
font-size: 20px;
margin: 10px 0 0 0;
`

export const Date = styled.p`
font-size: 15px;
color: ${colors.Grey};
margin: 8px 0 10px 0;
`