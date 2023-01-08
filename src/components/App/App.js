import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import styled from 'styled-components';
import Wrapper from '../shared/Wrapper/Wrapper';
import { useGlobalContext } from './context';
import Profile from '../Profile/Profile';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Modal from '../Modal';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Profile />
  }
]);

export const Conatiner = styled.div`
  position: fixed;
  top: 80px;
  left: 72px;
  right:0;
  bottom:0;
  overflow:auto;
`;

const App = () => {
  const { state } = useGlobalContext();
  const isModalOpen=state.isModalOpen.status;

  return (
    <Wrapper>
      {isModalOpen && <Modal />}
      <Header />
      <Sidebar />
      <Conatiner>
        <RouterProvider router={router} />
      </Conatiner>

    </Wrapper>
  );
};

export default App;