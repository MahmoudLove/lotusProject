import ReactDOM from 'react-dom';
function Modal({ header, children }) {
  return ReactDOM.createPortal(
    <div>
      <div className="fixed inset-0 bg-gray-300 opacity-80"></div>
      <div className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] p-10 bg-white">
        {children}
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
}
export default Modal;
