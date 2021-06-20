import React from 'react'

const Modal = () => {
    return (
        <div id="modal" className="grid col-1">
        <div id="register-body">
            <div id="register-heading">
                <h1>Cashier</h1>
            </div>
            <div id="register-main">
                <div className="grid col-2">
                    <div>
                        <h3>Enter Amount Received</h3>
                        <div>Total:</div>
                        <div>Received:</div>
                        <div>Change:</div>
                        <div className="register-action-btn">
                            <button>Confirm</button>
                            <button>Close</button>
                        </div>
                    </div>
                    <div className="grid col-3">
                        <button className="register-btn">1</button>
                        <button className="register-btn">2</button>
                        <button className="register-btn">3</button>
                        <button className="register-btn">4</button>
                        <button className="register-btn">5</button>
                        <button className="register-btn">6</button>
                        <button className="register-btn">7</button>
                        <button className="register-btn">8</button>
                        <button className="register-btn">9</button>
                        <button className="register-btn">.</button>
                        <button className="register-btn">0</button>
                        <button className="register-btn">C</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Modal
