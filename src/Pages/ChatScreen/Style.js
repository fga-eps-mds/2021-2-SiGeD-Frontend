import styled from 'styled-components';
import { Form } from 'react-bootstrap';
import colors from '../../Constants/colors';

export const Main = styled.div` 

    width: 100vw;
    height: 100vh;
    background-color: ${colors.background};
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    overflow-y: scroll;

    @media(max-width: 750px){
    
    }
`;

export const UsersContainer = styled.div`

    width: 65%;
    height: 80%;
    background: ${colors.secondary};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow: hidden;
    border-radius: 1.5vw;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media(max-width: 750px){
        width: 100%;
        height: 100%;
        flex-direction: column;
        justify-content: flex-start;
    }
`;

export const Sidebar = styled.div`

    width: 30%;
    height: 100%;
    /* background: ${colors.navHeaders}; */
    background: #FF0000;
    /* display: flex; */
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    @media(max-width: 750px){
        width: 100%;
        height: 20%;
        background-color: ${colors.secondary};
        align-content: center;
        justify-content: center;
   
    }
`;

export const ConversationsContainer = styled.ul`
    width: 100%;
    height: 100%;
    padding: 10%;
    list-style-type: none;
    background: ${colors.navHeaders};
    align-items: center;
    overflow: auto;
    @media(max-width: 750px){
        width: 100%;
        height: 80%;

    }
`;

export const CreateConversation = styled.button`
    width: 100%;
    height: 10%;
    padding: 10%;
    display: flex;
    text-align: left;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 15px;
    background: ${colors.primary};
    margin-bottom: 10px;

    @media(max-width: 750px){
        width: 100%;
        height: 80%;

    }
`;

export const MessagesContainer = styled.button`
    width: 100%;
    height: 10%;
    padding: 10%;
    display: flex;
    text-align: left;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 15px;
    background: #CCC;
    margin-bottom: 10px;

    @media(max-width: 750px){
        width: 100%;
        height: 80%;

    }
`;

export const ChatMessages = styled.ul`
    width: 100%;
    height: 100%;
    padding: 10%;
    list-style-type: none;
    background: ${colors.secondary};
    overflow: auto;
    @media(max-width: 750px){
        width: 100%;
        height: 80%;

    }
`;

export const Message = styled.li`
    width: 100%;
    height: ${(props) => props.size};
    background: ${(props) => props.color};
    margin-left: ${(props) => props.margin}px;
    /* margin-right: ${(props) => props.margin}; */
    padding: 5%;
    display: flex;
    border-radius: 15px;
    margin-bottom: 10px;
    overflow: hidden;

    @media(max-width: 750px){
        width: 100%;
        height: 80%;

    }
`;

export const ChatText = styled.div`

    width: 70%;
    height: 100%;
    /* background: ${colors.navHeaders}; */
    background: #CCC;
    /* display: flex; */
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    @media(max-width: 750px){
        width: 100%;
        height: 20%;
        background-color: ${colors.secondary};
        align-content: center;
        justify-content: center;
   
    }
`;

export const ColumnText = styled.div`

    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-top: 10px;
    flex-wrap: wrap;
    justify-content: space-between;

    @media(max-width: 750px){
        align-items: center;
        width: 90%;
        height: 80%;
        justify-content: space-between;
        align-content: center;
    }
`;

export const DivButtom = styled.div`

    width: 100%;
    height: 10%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-right: 10%;
    margin-top: 5%;
    flex-direction: row;

    @media(max-width: 750px){
        height: 20%;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        align-content: space-around;
        margin-right: 0%;

        
    }
`;

export const SidebarText = styled.div`
    color: ${colors.secondary};
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    height: calc(1.5em + 0.75rem + 2px);

    @media(max-width: 750px){
        visibility: hidden;
        height: 0%;
    }

    p {
        font-family: 'Montserrat';
        font-size: 1.5vw;

    }
`;

export const InputLine = styled.div`

    width: 100%;
    height: 10%;

    @media(max-width: 750px){
    
    }
`;

export const Dropdown = styled(Form.Control)`

    box-sizing: border-box;
    border-radius: 1.5vw;
    border: 0px solid #000000;
    box-shadow: none !important;
    display: block;
    width: 98%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    outline: none;

    @media(max-width: 750px){
    
    }
`;
