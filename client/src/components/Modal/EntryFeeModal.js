import React, { useState } from 'react';
import { Button } from 'reactstrap';
import Modal from 'react-modal'
const customStyles = {
    content: {
        width: '60vw',
        height: '100vh',
        backgroundColor: 'white',
        zIndex: 100000,
        overlfow: 'scroll',
        overflowY: 'scroll',
        position: 'absolute',
        border: '1px solid #ccc',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: 'auto',
        margin: 'auto',
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    overlay: {
        zIndex: 1000,
        overlfow: 'scroll',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
    }
};

function EntryFeeModal({ user, authenticated, }) {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <div>
            <button className='btn btn-outline-dark shadow' onClick={() => setModalIsOpen(true)} style={{width:'100%', height:'100%'}}>Pay Entry Fee</button>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={customStyles}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 order-md-1">
                            <h3 className="text-center">Entry-Fee</h3>
                            <h6 className="text-center mb-2"><small>Entry Fee is 100 taka for each product. That will allow you to enter the bidding. The entry fee is not refundable.</small></h6>
                            <form className="needs-validation" novalidate="">
                                    <div>
                                        <label for="cc-name">Name on card</label>
                                        <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
                                        <div className="invalid-feedback">
                                            Name on card is required
                                    </div>
                                    </div>
                                    <div>
                                        <label for="cc-name">Zip or Postal Code</label>
                                        <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
                                        <div className="invalid-feedback">
                                        Zip or Postal Code is required
                                    </div>
                                    </div>
                                    <div>
                                        <label for="cc-number">Credit card number</label>
                                        <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
                                        <div className="invalid-feedback">
                                            Credit card number is required
                                    </div>
                                    </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label for="cc-expiration">Expiration</label>
                                        <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
                                        <div className="invalid-feedback">
                                            Expiration date required
                                    </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label for="cc-expiration">CVV</label>
                                        <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
                                        <div className="invalid-feedback">
                                            Security code required
                                    </div>
                                    </div>
                                </div>
                                <div>
                                    <h5>Contact Information</h5>
                                </div>
                                <div>
                                        <label for="cc-number">Phone Number (in the event you win an auction)</label>
                                        <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
                                        <div className="invalid-feedback">
                                            Phone number is required
                                    </div>
                                </div>
                                <hr className="mb-4" />
                                <div className='text-center mb-4'>
                                    <button style={{ width: 'auto' }} className="btn btn-primary mb-3 shadow" type="submit">Pay Entry Fee</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default EntryFeeModal