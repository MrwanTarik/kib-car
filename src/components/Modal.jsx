import {
  cloneElement,
  createContext,
  useContext,
  useRef,
  useState,
} from "react";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;

  border-radius: 4px;
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  z-index: 99;
  top: 18px;
  right: 25px;

  & svg {
    width: 30px;
    height: 30px;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: #f8f8f8;
  }
`;

const ModalContext = createContext();

function Modal({ children }) {
  const [showModalName, setShowModalName] = useState("");
  const [sharedData, setSharedData] = useState("");
  const close = () => setShowModalName("");
  const open = setShowModalName;
  const showNewModal = (modalName) => {
    setShowModalName(modalName);
  };
  return (
    <ModalContext.Provider
      value={{
        showModalName,
        close,
        open,
        showNewModal,
        sharedData,
        setSharedData,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
function Open({ children, windowName }) {
  const { open } = useContext(ModalContext);
  const openWindowByName = () => open(windowName);
  return cloneElement(children, { onClick: openWindowByName });
}
function Window({ children, name, svgColor = "#f8f8f8" }) {
  const { showModalName, close, showNewModal, sharedData, setSharedData } =
    useContext(ModalContext);
  const hide = name !== showModalName;
  const modalRef = useRef();

  // Function to close modal if clicked outside
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      close();
    }
  };

  return (
    <Overlay
      onClick={handleClickOutside}
      className={hide ? "invisible  opacity-0" : "visible  opacity-1"}
    >
      <StyledModal ref={modalRef}>
        <Button onClick={close}>
          <HiXMark color={svgColor} />
        </Button>
        <div>
          {cloneElement(children, {
            onCloseModal: close,
            showNewModal,
            sharedData,
            setSharedData,
          })}
        </div>
      </StyledModal>
    </Overlay>
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
