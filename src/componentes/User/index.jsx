import Message from "../Message"
import {useSelector} from 'react-redux'
import {ContainerChat} from './style'
const User = () => {
      const message = useSelector(({user}) => user);
     
      return (
            <ContainerChat>
                  <div>
                        <img src="https://kenzie.com.br/images/footer-logo.svg" alt=""/>
                        <h3>{message.name}</h3>
                  </div>
                  <ul>
                        {message.message.map((msg, index) => {
                              return <li key={index}>{msg}</li>
                        })}
                  </ul>
                  <Message/>                  
            </ContainerChat>
      )
}

export default User