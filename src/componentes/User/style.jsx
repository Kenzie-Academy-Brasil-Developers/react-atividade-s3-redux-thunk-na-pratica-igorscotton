import styled from 'styled-components'

export const ContainerChat = styled.section`
      background-color: #AEBFD7;
      width: 300px;
      height: 500px;
      padding: 20px;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      
      div{
            display: flex;
            align-items: center;
            gap: 10px;
      }

      div img{
            width: 50px;
            height: 50px;           
      }

      ul{   
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            gap: 5px;
            list-style: none;
            padding: 0;
            overflow-y: auto;
      }
      ul li{
            background-color: #6181B8;
            color: white;
            width: 200px;
            word-wrap: break-word;
            border-radius: 10px;
            margin-left: 20px;
      }

      div button{
            background-color: #0E71B7;
            color: white;
            border: none;
            border-radius: 5px;
            padding: 5px 10px;
      }

      div input{
            border: none;
            padding: 5px 10px;
            border-radius: 5px;
      }
`