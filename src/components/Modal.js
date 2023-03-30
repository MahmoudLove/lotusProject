import ReactDOM from 'react-dom';
import { useState } from 'react';
function Modal({ children }) {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(!showModal);

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={closeModal}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed top-[50%] left-[50%] -translate-x-[50%] w-80% -translate-y-[50%] p-10 bg-white">
        {children}
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
}
export default Modal;
