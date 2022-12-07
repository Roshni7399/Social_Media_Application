import React, { useState, useRef } from "react";
import { useIdleTimer } from "react-idle-timer";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function IdleTimerContainer() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const idleTimerRef = useRef(null);
  const sessionTimeoutRef = useRef(null);

  const onIdle = () => {
    console.log("User is Idle");
    setModalIsOpen(true);
    sessionTimeoutRef.current = setTimeout(logOut, 5000);
  };
  const idletimer = useIdleTimer({
    crossTab: true,
    ref: idleTimerRef,
    timeout: 5 * 1000,
    onIdle: onIdle,
  });

  const stayActive = () => {
    setModalIsOpen(false);
    clearTimeout(sessionTimeoutRef.current);
    console.log("User is Active");
  };

  const logOut = () => {
    setModalIsOpen(false);
    setIsLoggedIn(false);
    clearTimeout(sessionTimeoutRef.current);
    console.log("User has Logged Out");
  };

  return (
    <div idletimer={idletimer}>
      {isLoggedIn ? <h2>Hello Roshni</h2> : <h2>Hello Guest</h2>}
      <Modal isOpen={modalIsOpen}>
        <h3>You've been idle for a while!</h3>
        <p>You will be logged out soon</p>
        <div>
          <button className="btn btn-success" onClick={logOut}>
            Log Out
          </button>
          &nbsp;
          <button className="btn btn-info" onClick={stayActive}>
            Keep me signed in
          </button>
        </div>
      </Modal>
    </div>
  );
}
