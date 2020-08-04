import React, {useState} from 'react';
import { Button } from 'reactstrap';
import Modal from 'react-modal'
const customStyles = {
    content: {
    width: '95%',
    transform: 'translate(0%, 5%)',
    backgroundColor: 'white',
    zIndex: 100000,
    },
    overlay: {zIndex: 1000}
  };

function EntryFeeModal({user, authenticated,}) {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    
  return (
    <section>
        <Button className='btn btn-secondary btn-block shadow' onClick={()=>setModalIsOpen(true)}>Place Bid</Button>
        <Modal className="m-5" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={customStyles}>
        <div className="container">
                <div className="row mt-5">
                    <div className="col-md-12 order-md-1">
                        <h3 className="text-center">Entry-Fee</h3>
                        <h6 className="text-center mb-3"><small>Entry Fee is 100 taka for each product. That will allow you to enter the bidding. The entry fee is not refundable.</small></h6>
                        <form className="needs-validation" novalidate="">
                            <div className="d-block my-5 text-center">
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <div className="custom-control custom-radio">
                                            <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" required="" />
                                            <label className="custom-control-label" for="credit">Credit card</label>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className="custom-control custom-radio">
                                            <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required="" />
                                            <label className="custom-control-label" for="debit">Debit card</label>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className="custom-control custom-radio">
                                            <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required="" />
                                            <label className="custom-control-label" for="paypal">Bkash</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label for="cc-name">Name on card</label>
                                    <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
                                    <small className="text-muted">Full name as displayed on card</small>
                                    <div className="invalid-feedback">
                                        Name on card is required
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="cc-number">Credit card number</label>
                                    <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Credit card number is required
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 mb-3">
                                    <label for="cc-expiration">Expiration</label>
                                    <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Expiration date required
                                    </div>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label for="cc-expiration">CVV</label>
                                    <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Security code required
                                    </div>
                                </div>
                            </div>
                            <hr className="mb-4" />
                            <div className='text-center'>
                            <button style={{width: '50%'}} className="btn btn-primary mb-3 shadow" type="submit">Pay Entry Fee</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Modal>
    </section>
  );
}

export default EntryFeeModal