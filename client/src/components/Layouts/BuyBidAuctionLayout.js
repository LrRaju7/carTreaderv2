import React, { useEffect } from "react";
import { Container } from "reactstrap";
import Navbar from "./Components/Navbar";
import Notification from "./Components/Notification";
import Footer from './Components/Footer';
const BuyBidAuctionLayout = ({ children }) => (
	<div>
		<Navbar />
		<div className="toppad80 pad120lr">
			<Container fluid>{children}</Container>
		</div>
      <Notification />
		<Footer/>

	</div>
);

export default BuyBidAuctionLayout;