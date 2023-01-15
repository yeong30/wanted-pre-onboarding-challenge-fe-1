import { useCallback, useState } from "react";

const useModal = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = useCallback(() => {
    setShowModal(true);
  }, []);

  const closeModalHandler = useCallback(() => {
    setShowModal(false);
  }, []);

  return {
    close: closeModalHandler,
    show: showModalHandler,
    isShow: showModal,
  };
};

export default useModal;
