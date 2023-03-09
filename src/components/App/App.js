
import "regenerator-runtime/runtime";
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import Wrapper from '../shared/Wrapper/Wrapper';
import { useGlobalContext } from './context';

import Header from '../Header';
import Sidebar from '../Sidebar';
import Modal from '../Modal';
import { useEffect } from 'react';



export const Conatiner = styled.div`
  position: fixed;
  top: 80px;
  left: 72px;
  right:0;
  bottom:0;
  overflow:auto;
`;

const App = () => {

  const { state, changeProfile } = useGlobalContext();
  useEffect(()=>{
    if(window.currentUser!=''){
      changeProfile('Unnamed', true, window.currentUser.accountId, window.currentUser.balance);
    }
    else {
      changeProfile('', false,'','')
    }
    
  }, [window.currentUser])

  const navigate=useNavigate();
  const isModalOpen = state.isModalOpen.status;
  useEffect(()=>{
    navigate('/assetcreator')
  }, []);
  return (
    <Wrapper>
      {isModalOpen && <Modal />}
      <Header />
      <Sidebar />
      <Conatiner>
        <Outlet />
      </Conatiner>
    </Wrapper>
  );
};

export default App;