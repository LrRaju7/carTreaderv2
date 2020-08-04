import React, { Component } from 'react'

class EntryFeeForm extends Component {
    render() {
        return (
            <div className="container shadow">
                <div className="row mt-5">
                    <div className="col-md-12 order-md-1">
                        <h3 className="text-center">Entry-Fee</h3>
                        <h6 className="text-center mb-3"><small>Entry Fee is 100 taka for each product. That will allow you to enter the bidding. The entry fee is not refundable.</small></h6>
                        <form className="needs-validation" novalidate="">
                            <div className="row">
                                <div className="col-md-12 mb-3">
                                    <label for="firstName">Name</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="" value="" required="" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label for="email">Email </label>
                                <input type="email" className="form-control" id="email" />
                            </div>
                            <div className="mb-3">
                                <label for="address">Address</label>
                                <input type="text" className="form-control" id="address" required="" />
                            </div>

                            <div className="row">
                                <div className="col-md-5 mb-3">
                                    <label for="country">City</label>
                                    <select className="custom-select d-block w-100" id="country" required="">
                                        <option value="">{}</option>
                                    </select>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label for="state">State</label>
                                    <select className="custom-select d-block w-100" id="state" required="">
                                        <option value="">{}</option>
                                    </select>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label for="zip">Zip</label>
                                    <input type="text" className="form-control" id="zip" placeholder="" required="" />
                                </div>
                            </div>
                            <hr className="mb-4" />

                            <h3 className="mb-3 text-center">Payment</h3>

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
                            <button className="btn btn-primary btn-lg btn-block mb-3" type="submit">Pay Entry Fee</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default EntryFeeForm