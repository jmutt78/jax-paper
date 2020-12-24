import React, { useState } from 'react';
import Modal from './Modal';
import imageRules from '../images/image-rules.svg';
import closeIcon from '../images/x.svg';

function Footer() {
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <div>
      <footer>
        <p className='footer__message'>Made with &hearts;</p>
      </footer>
    </div>
  );
}

export default Footer;
