import React, { useState } from 'react';
import { placeBid } from '../../actions/listing'
import { connect } from 'react-redux'
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

function PlaceBidModal({ placeBid, userID, listing, history }) {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [verified, setVerified] = useState(false);
    const [formData, setFormData] = useState({
        bid: '',
    });
    const { bid } = formData;
    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    // const endDateTime = listing.endDateTime
    const listingID = listing
    const user = userID['_id']
    const onSubmit = async e => {
        e.preventDefault();
        console.log("___________________BID_SUBMITTED___________________")
        if (verifyCallback) {
            console.log(bid)
            console.log(listing)
            console.log(userID)
            // createAuctionPayment(payment_amount,listingID);


            placeBid(
                user,
                bid,
                listingID,
                history
            );

            console.log("----------------------------DONE----------------------------")
        } else {
            alert('Something Wrong');
        }

    };

    const verifyCallback = async e => {
        await setVerified(true);
    };

    return (
        <div>
            <button className='btn btn-outline-dark shadow' onClick={() => setModalIsOpen(true)} style={{ width: '100%', height: '100%' }}>Place Bid</button>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={customStyles}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 order-md-1">
                            <h3 className="text-center">Start Bidding</h3>
                            <form className="needs-validation" style={{ width: '100%' }} encType='multipart/form-data' onSubmit={e => onSubmit(e)}>

                                <div className="col-md-6 mb-3">
                                    <label for="bid">Bid Amount</label>
                                    <input type="text" className="form-control" name="bid" value={bid} id="exampleBid" onChange={e => onChange(e)} />
                                        <div className="invalid-feedback">
                                        Bid Amount is required
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

PlaceBidModal.propTypes = {};
export default connect(null, { placeBid })(PlaceBidModal);