import React, { useContext, useState } from "react";
import { TodoContext } from "../../../store/GlobalState";

const Modal = () => {
  const { dispatch } = useContext(TodoContext);
  const [text, setText] = useState("");
  const newMission = () => {
    if (text && text.trim().length > 0) {
      dispatch({ type: "ADD", payload: text.trim() });
      setText("");
    }
  };
  return (
    <div
      className="modal fade"
      id="exampleModalCenter"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered hide" role="document">
        <div className="modal-content hide">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Yeni Görev Ekle
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <textarea
                  onChange={e => setText(e.target.value)}
                  className="form-control"
                  id="message-text"
                ></textarea>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              data-dismiss="modal"
              className="btn"
              onClick={() => newMission()}
            >
              Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
