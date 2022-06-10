import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Loader } from './components/Loader';

export const ProtectedRoute = ({ component, role }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <Loader />,
  });

  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      if (role === 'admin' && !user.isAdmin) {
        navigate('/notAllowed');
      }
    }
  });

  return <Component />;
};
