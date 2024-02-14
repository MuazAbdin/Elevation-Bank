import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Wrapper from "../assets/stylingWrappers/Modal";

function Modal(props) {
  const { isModalOpened, handleClose } = props;
  const dialog = useRef();

  useEffect(() => {
    isModalOpened ? dialog.current.showModal() : dialog.current.close();
  }, [isModalOpened]);

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={handleClose}>
      <Wrapper>{props.children}</Wrapper>
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
