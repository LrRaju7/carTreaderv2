import React from 'react';

const LayoutOne = ({children}) => 
  <div>
    <h2>Layout One</h2> 
    {children}
  </div>;

const BuyBidAuctionLayout = ({children}) => (
		
		<div><Navbar/>
        <div className='toppad80 pad120lr'>
          <Container fluid>
             {children}
          </Container>
        </div>
        </div>
        )

export { LayoutOne, BuyBidAuctionLayout };