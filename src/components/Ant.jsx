import { useState, useEffect } from 'react';
import ant from '../assets/ant.svg'
import check from '../assets/check.svg'

export const AntModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setShowSuccess(false);
  };

  const handleSubmit = () => {
    // Handle your submit logic here

    // Show the success message and hide the form content
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
      setModalOpen(false);
    }, 2000);
  };

  useEffect(() => {
    // Hide success message initially
    setShowSuccess(false);
  }, []);

  return (
    <>
      <img
        className="ant"
        src={ant}
        alt="Your Logo"
        width="13"
        height="13"
        onClick={openModal}
      />

      {isModalOpen && (
        <div id="myModal" className="modal">
          <div className="modal-content">
            {!showSuccess &&(<section className="report-content">
              <h2>Report a bug or request a feature</h2>
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <div className="row">
                <p1>I would like to </p1>
                <select className="report-purpose" placeholder="Select a purpose">
                  <option value="" disabled selected>
                    Select a purpose
                  </option>
                  <option value="report">Report a bug</option>
                  <option value="banana">Suggest a feature</option>
                  <option value="cherry">Banana</option>
                  <option value="grape">Grape</option>
                  <option value="orange">Orange</option>
                </select>
              </div>
              <p>Title</p>
              <textarea className="input input-title" placeholder="Enter title"></textarea>
              <p>Description</p>
              <textarea
                className="input input-description"
                placeholder="Enter description"
              ></textarea>
              <div className="padding"></div>
              <button className="btn btn-modal submit" onClick={handleSubmit}>
                Submit
              </button>
            </section>)}
            {/* Success message (initially hidden) */}
            {showSuccess && (
              <div className="success-content" id="submit">
                <div className="modal-success-content">
                  <img src={check} alt="check" width="100" height="100" />
                  <h2>Report Submitted Successfully</h2>
                  <p>Thank you for your feedback.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

