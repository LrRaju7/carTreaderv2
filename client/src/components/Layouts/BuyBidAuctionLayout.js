import React, { useEffect } from "react";
import { Container } from "reactstrap";
import Navbar from "./Components/Navbar";

const BuyBidAuctionLayout = ({ children }) => (
	<div>
		<Navbar />
		<div className="toppad80 pad120lr">
			<Container fluid>{children}</Container>
		</div>
	</div>
);

export default BuyBidAuctionLayout;