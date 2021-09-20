import { useHistory } from 'react-router-dom';
import { useUserTokenContext } from '../../contexts/UserTokenContext';

import './style.css'


const AvatarMenu = ({ userName, id }) => {
  const [token, setToken] = useUserTokenContext();
  const history = useHistory();
  return (
    <div className='avatar-menu'>
      <p id='user-name'>{userName}</p>
      <button onClick={() => { history.push(`/users/${id}`) }}>
        Perfil
      </button>
      <button onClick={() => {
        if (token) {
          setToken('');
          history.push('/');
        }
      }}>
        Cerrar sesión
      </button>
    </div>
  );
}
export default AvatarMenu;