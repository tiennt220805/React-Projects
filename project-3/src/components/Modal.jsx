import { IoMdClose } from "react-icons/io";
import { createPortal } from "react-dom";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div
            onClick={onClose}
            className="fixed top-0 z-40 grid h-screen w-screen place-items-center backdrop-blur"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="z-50 m-auto min-h-[200px] min-w-[80%] bg-white p-4"
            >
              <div className="flex cursor-pointer justify-end p-1">
                <IoMdClose onClick={onClose} className="text-3xl" />
              </div>
              {children}
            </div>
          </div>
        </>
      )}
    </>,
    document.getElementById("modal-root"),
  );
};

export default Modal;
