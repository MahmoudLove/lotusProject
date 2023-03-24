import ReactDOM from 'react-dom';
function Modal() {
  return ReactDOM.createPortal(
    <div>
      <div className="fixed inset-0 bg-gray-300 opacity-80"></div>
      <div className="fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
          fuck you motepsNfkasfk;fnkngg
          <div className="flex justify-end">
            actgion barakrjasajfnaggjgjadngan
          </div>
        </div>
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
}
export default Modal;
