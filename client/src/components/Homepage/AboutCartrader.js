import React, { Component } from 'react'
import '../../styles/components/_dashboard.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
class AboutCartrader extends Component {
    render() {
        return (
            <div className="page container-fluid static what-is">
                <div className="row subbody">
                    <div className="static-sidebar">
                        <ul>
                            <li>
                                <a title="About Us" href="#section-about-us">About Us</a>
                            </li>
                            <li className="sub-nav">
                                <span className="nav-sec">How it works</span>
                                <ul>
                                    <li>
                                        <a title="Buying a Car" href="/what-is/?section=buying-a-car">Buying a Car</a>
                                    </li>
                                    <li>
                                        <a title="Selling a Car" href="/what-is/?section=selling-a-car">Selling a Car</a>
                                    </li>
                                    <li>
                                        <a title="Spectating" href="/what-is/?section=spectating">Spectating</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sub-nav"><span className="nav-sec">FAQ</span>
                                <ul>
                                    <li>
                                        <a title="Seller FAQ" href="/what-is/?section=sellers">Seller FAQ</a>
                                    </li>
                                    <li>
                                        <a title="Buyer FAQ" href="/what-is/?section=buyers">Buyer FAQ</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h1>What's Cars &amp; Bids</h1>
                        <div className="facts">
                            <div className="facts">
                                <div className="fact">
                                    <img src="" alt="Cool Car Auctions" />
                                    <h3>Cool Car Auctions</h3>
                                    <p>Auction your modern enthusiast car — anything cool and exciting from the 1980s to the 2020s.</p>
                                </div>
                                <div className="fact">
                                    <img src="" alt="Low Fees" />
                                    <h3>Low Fees</h3>
                                    <p>Buyers pay a 4.5% commission, capped at $4,500. Seller listing fees start at $49.</p>
                                </div>
                                <div className="fact">
                                    <img src="" alt="More Information" />
                                    <h3>More Information</h3>
                                    <p>We provide vehicle history reports for every vehicle listed on Cars &amp; Bids — for free.</p>
                                </div>
                                <div className="fact">
                                    <img src="" alt="Easy to Use" />
                                    <h3>Easy to Use</h3>
                                    <p>We’ve developed several new features that innovate buying and selling enthusiast cars online.</p>
                                </div>
                            </div>
                            <div className="doug-quote d-flex">
                                <img src="/static/media/dougs-take@2x.b4598fc0.png" alt="Doug DeMuro" />
                                <div>
                                    <h3>Doug &amp; Bids</h3>
                                    <p>Car reviewer Doug DeMuro brings a huge audience to Cars &amp; Bids<br />— along with his commentary.</p>
                                </div>
                            </div>
                            <div className="section" id="section-about-us">
                                <h2 >About Us</h2>
                                <p>Throughout the last few years, many car enthusiasts have started turning their attention to recent vehicles – cars from the 1980s, 1990s, and beyond. Automotive reviewer <a href="https://www.youtube.com/channel/UCsqjHFMB_JYTaEnf_vmTNqg" target="_blank" rel="noopener noreferrer">Doug DeMuro</a> realized there isn’t yet a specific place that’s focused solely on buying and selling these modern enthusiast cars, but there should be – so he and a team created Cars &amp; Bids, with its simple name modeled after Doug’s famous pursuit of “quirks and features.”</p><p>Cars &amp; Bids is the best online auction marketplace to buy and sell modern enthusiast cars – and that means pretty much anything that’s cool from the 1980s, 1990s, 2000s, 2010s, or 2020s. To us, “cool” ranges from the obvious (a Ferrari F355 or a Lamborghini Gallardo) to the esoteric (a pristine Dodge Dakota Convertible or a Mercury Capri XR2) to the traditional fun cars that enthusiasts love (a Mazda MX-5 Miata or a Porsche 911). Basically everything that’s exciting, fun, interesting, or quirky is welcome here – as long as it comes from the modern era.</p><p>Although there are many places to buy and sell a special car, Cars &amp; Bids offers significant advantages over other websites. <strong>Here are just a few of our benefits:</strong></p>
                                <ul>
                                    <li>
                                        <strong>We’re focused on modern enthusiast cars:</strong> the 1980s to the 2020s. That means anyone interested in the next era of exciting cars will come here first to buy and sell.
                            </li>
                                    <li>
                                        <strong>Our fees are low.</strong> The buyer’s fee is 4.5%, with a minimum of $225 and a maximum of $4,500 – far below other auction houses and enthusiast car auction websites. Our seller’s fee ranges from $49 for a no-reserve auction or a repeat seller to $89 for a first-time seller with a reserve auction.
                            </li>
                                    <li>
                                        <strong>We believe that every vehicle should come with a vehicle history report</strong> – so we provide one, for free, instead of asking sellers to pay for their own.
                            </li>
                                    <li>
                                        <strong>Doug DeMuro will bring extra eyes – and extra buyers – to your cars,</strong> periodically reviewing cars offered on Cars &amp; Bids. If your car is chosen, you’ll get far more eyes on your vehicle than any other auction platform on earth.
                            </li>
                                    <li>While other car auctions take weeks or even months to get your car listed and available to buyers, <strong>we’ll get your car listed quickly</strong> – and we’ll even take your input on scheduling your car’s auction.
                            </li>
                                    <li>
                                        <strong>Cars &amp; Bids makes it easy to submit your car for sale.</strong> We value your time by asking for only a few crucial details before letting you know whether or not we’re accepting your vehicle. That means you don’t have to waste your time providing initial information only to have your car rejected.
                            </li>
                                    <li>
                                        <strong>Cars &amp; Bids is the most user-friendly online automotive marketplace,</strong> with easy sorting and searching – and simplified auctions that tell you exactly what you need to know about each vehicle.
                            </li>
                                    <li>If you sell a car with Cars &amp; Bids and the high bidder doesn’t follow through on buying it, we’ll do our best to make sure your time hasn’t been wasted. We’ll try to collect a commission from the buyer – and if we’re successful, we’ll give you half of what we collect. That way, you still earn a little money from the time you’ve devoted to your auction. Of course, we’ll also re-list your car for free so it can find another buyer.
                            </li>
                                </ul>
                            </div>
                            <div className="section">
                                <h2 id="section-how-it-works">How It Works</h2>
                                <h3 id="section-buying-a-car">Buying a Car</h3>
                                <p>Cars &amp; Bids is an auction site – so buying a car involves placing bids on the cars you want to buy. We’ve made bidding easy, and we’ve explained it in a short tutorial here:
                        </p>
                                <div className="video">
                                    <iframe title="Buying a car" width="100%" height="100%" src="https://www.youtube.com/embed/KUBxgFkJj_M?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="">
                                    </iframe>
                                </div>
                                <p>When you bid on a car, you’re agreeing to buy it, should you end up as the high bidder – so you’ll want to do your due diligence before placing a bid. That means asking the seller questions, looking at photos, or even scheduling a trip to see the car in person. If you don’t plan to follow through on buying the car, don’t bid – because you might end up as the high bidder.
                        </p>
                                <p>All winning bidders pay a 4.5% buyer’s fee to Cars &amp; Bids on top of the winning bid amount. The buyer’s fee has a minimum of $225, but it’s capped at $4,500 so fees don’t become prohibitive for buyers. To ensure the commission is paid, a hold is placed on your credit card when you place a bid – and when the auction ends, the holds are released for all bidders except the winner, who is charged the commission. That’s why we require valid credit card information before you can place a bid. Bids on Cars &amp; Bids are binding, and there are no refunds, should you wish to change your mind.
                        </p>
                                <p>After an auction, you’re given the seller’s contact information and vice versa, in order to allow you and the seller to finalize the details and logistics of the transaction.
                        </p>
                                <h3 id="section-selling-a-car">Selling a Car</h3>
                                <p>Selling a car on Cars &amp; Bids is easy – and we’ve explained it all in a video tutorial here:</p>
                                <div className="video">
                                    <iframe title="Selling a car" width="100%" height="100%" src="https://www.youtube.com/embed/gDXW2Q0J-Yg?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                                </div>
                                <p>The basic gist is that we initially ask you to send us a few short details on the car you want to sell – including the VIN, some photos, and a brief description of the car. The fee to sell a car on Cars &amp; Bids is $89, but we’ll drop the fee to $49 if you’ve sold with us before or if your auction has no reserve. </p>
                                <p>Not every car is right for Cars &amp; Bids, and we don’t select every car that’s submitted. But if we’re interested in listing your car, we’ll get in touch, and we’ll ask for more information from you – like detailed photos, service and ownership history, and various other important items prospective buyers will need to know before buying a car. </p>
                                <p>You can also choose whether you want to set a reserve price, or if you want your vehicle to be sold with no reserve. If you choose a reserve auction, we’ll ask you to suggest a reserve price – but we may ask for a lower one. If we can’t agree on a reserve price, no hard feelings – of course, you’re free to sell the car elsewhere. We’re also happy to list a car with no reserve – and if you choose that route, we’ll drop the listing fee to $49.</p>
                                <p>If you’re selling a car on Cars &amp; Bids, it must not be listed for sale elsewhere – meaning you’ll have to remove any other advertisement for your car on any other website or publication before we’ll list it for you. We want our auctions to conclude with the winning bidder buying the car, not with sellers removing their cars because they’ve sold somewhere else. </p>
                                <p>During the auction, you may be asked questions by commenters and bidders. We’ve found that auctions where sellers participate actively tend to be more successful – both in terms of selling the car and the final sale price. Your auction will likely go more smoothly if you answer questions thoroughly, provide photos when asked, and do your best to be honest and up-front about your car and its condition.</p>
                                <p>At the conclusion of an auction, you’ll be given the buyer’s contact information, and vice versa, in order to allow you and the buyer to finalize the logistics of the transaction.</p>
                                <h3 id="section-spectating">Spectating</h3>
                                <p>At Cars &amp; Bids, there’s a section for comments in every single auction. We encourage your participation, even if you don’t plan on bidding, buying, or selling a car. We believe comments are helpful to a full and fair auction, as they can provide additional information that even the seller may not be aware of – so we’re always supportive of the wealth of information (and the amusing anecdotes) our commenters bring.</p>
                            </div>
                            <div className="section faqs">
                                <h2>Frequently Asked Questions</h2>
                                <h3 id="section-sellers">Seller Questions</h3>
                                <ul>
                                    <li className="" id="faq-seller-cost">
                                        <h4>How much does it cost to sell a car on Cars &amp; Bids?</h4>
                                        <div className="faq">
                                            <p>We charge sellers $89 to sell their first car on Cars &amp; Bids. If you’ve sold with us before, we drop that fee to $49. We’ll also drop our listing fee to $49 if you sell your car with no reserve.</p>
                                        </div>
                                    </li>
                                    <li className="" id="faq-seller-submit">
                                        <h4>How do I submit my car for sale?</h4>
                                        <div className="faq">
                                            <p>To submit your car for sale, go to the “Sell a Car” link in the header. In order to sell your car, you’ll need to provide us with some important information – like the make, model, year, VIN, a few photos, and some other relevant details. If we’re interested in selling your car, we’ll get in touch with you. Then we’ll ask you for a more detailed set of questions so we can make sure our auction description is accurate – and you’ll pay the listing fee.</p>
                                        </div>
                                    </li>
                                    <li className="" id="faq-seller-choose">
                                        <h4>How do you choose which cars you’re looking for?</h4>
                                        <div className="faq">
                                            <p>We’re focused on cool cars, trucks, and SUVs from the modern era – which we’re defining as the 1980s through the present day. If you’re looking to sell a cool car from the 1980s, 1990s, 2000s, 2010s, or 2020s, we might be interested in listing it. Our definition of “cool” ranges from traditional sports cars (Mazda MX-5 Miata, Porsche 911) to oddball vehicles (Subaru BRAT, Infiniti M30, Volvo 850R) to more obvious high-performance sports cars (Porsche Cayman R, Ferrari 360 Modena) to special trucks and SUVs (Jeep Grand Wagoneer, Land Rover Defender). We don’t list every car we’re offered, but we’re certainly interested in your submission to see if it’s a good fit for Cars &amp; Bids.</p>
                                        </div>
                                    </li>
                                    <li className="" id="faq-seller-schedule">
                                        <h4>Can I schedule when my car’s auction starts?</h4>
                                        <div className="faq">
                                            <p>Although we don’t offer the ability to precisely schedule your auction, we allow our sellers to provide preferences. If you’d prefer a certain start date, or if you’d prefer if your auction wasn’t live during a certain week (for example, due to a vacation or business trip), let us know and we’ll do our best to accommodate you.</p>
                                        </div>
                                    </li>
                                    <li className="" id="faq-seller-provide">
                                        <h4>What information do I need to provide in order to sell my car?</h4>
                                        <div className="faq">
                                            <p>We start with just the basics: we can let you know if we’ll accept your car if you just give us the make, model, year, VIN, some photos, and a few other details. If we accept your car based on this information, we’ll then need to gather more details – we’ll ask about your history with the car, features, and other items that help us craft our listing.</p>
                                        </div>
                                    </li>
                                    <li className="" id="faq-seller-reserve">
                                        <h4>Can I put a reserve price on my auction?</h4>
                                        <div className="faq">
                                            <p>Yes, we offer sellers the choice between a “reserve” and a “no reserve” auction. A “reserve” is a minimum price that a seller is willing to accept for a car, which is unknown to buyers during the auction. A “no reserve” auction has no minimum price, meaning the car will sell for the amount of the high bid.</p>
                                            <p>If you choose a reserve auction, we will ask you to suggest a reserve price – but we may ask for a lower one before we’re willing to list the car for sale. If we can’t agree on a reserve price, no hard feelings – of course, you’re free to sell the car elsewhere. If you select a “no reserve” auction, our seller’s fee drops from $89 to $49.</p>
                                            <p>If you decide later that you want to adjust your reserve, you can lower it at any point during the auction. Simply click the “Lower reserve” icon in your auction listing page, and enter your new reserve. Of course, we only allow sellers to use this tool to lower their reserve price, so the new reserve you enter must be lower than your current reserve price.</p>
                                        </div>
                                    </li>
                                    <li className="" id="faq-seller-rnm">
                                        <h4>What if my reserve isn’t met?</h4>
                                        <div className="faq">
                                            <p>If your reserve isn’t met, we will get in touch with you and with the highest bidder on your auction, and we’ll try to negotiate a price that will satisfy both parties. If we reach an agreement, we’ll then put the seller and buyer in contact – and we’ll drop our buyer’s fee to 2.5%.</p>
                                        </div>
                                    </li>
                                    <li className="" id="faq-seller-location">
                                        <h4>Can I sell my car if I’m not in the United States?</h4>
                                        <div className="faq">
                                            <p>Right now, Cars &amp; Bids is focused only on sellers in North America (the United States and Canada).</p>
                                        </div>
                                    </li>
                                    <li className="" id="faq-seller-auction">
                                        <h4>How long does an auction last?</h4>
                                        <div className="faq">
                                            <p>All auctions last for seven days. However, the exact duration can fluctuate. That’s because within the last minute of an auction, each new bid resets the auction clock to one minute remaining. This simulates a traditional auction, where bidding continues until bidders stop – rather than some online auctions, which end at a set time and favor last-second bids.</p>
                                        </div>
                                    </li>
                                    <li className="" id="faq-seller-edit-live">
                                        <h4>Can I edit my auction once it’s live?</h4>
                                        <div className="faq">
                                            <p>You can’t edit your auction yourself – but throughout the duration of your auction, you’ll be in touch with Cars &amp; Bids. If you need to edit your auction, just reach out and let us know what you need to have changed. You can also leave comments, which include additional photos – and you can answer questions to help improve the clarity of your listing.</p>
                                        </div>
                                    </li>
                                    <li className="" id="faq-seller-listing">
                                        <h4>Who writes the listing description for my car?</h4>
                                        <div className="faq">
                                            <p>After you provide us with all of the pertinent information about your car, we’ll write the actual auction description. We won’t go live without your approval, and we do our best to make our auction descriptions simple and direct, focusing on only the most important details to help bidders make their decisions. </p>
                                        </div>
                                    </li>
                                    <li className="" id="faq-seller-auction-end">
                                        <h4>How does the buyer get in contact with me and make payment?</h4>
                                        <div className="faq">
                                            <p>Once the auction is over, completion of the transaction is between the buyer and the seller. Cars &amp; Bids provides the buyer and seller with each other’s contact information, and the two parties can complete the transaction via e-mail or telephone.</p>
                                        </div>
                                    </li>
                                    <li className="" id="faq-seller-buyer-bid">
                                        <h4>What if the buyer doesn’t follow through on the high bid?</h4>
                                        <div className="faq">
                                            <p>The high bid is binding, and the buyer will typically follow through with a purchase. In any case, we always attempt to capture the 4.5% buyer’s fee – and if the buyer fails to follow through on the high bid, we’ll do our best to split what we’ve collected with you as a courtesy for the sale not going through. We’ll also relist your car for free. As an example, if the high bid is $10,000 and the buyer fails to purchase the car, we’ll do our best to collect the 4.5% buyer’s fee of $450 – and if we do, we’ll give you $225, or half of that fee.</p>
                                        </div>
                                    </li>
                                </ul>
                                <h3 id="section-buyers">Buyer Questions</h3>
                                <ul>
                                    <li className="" id="faq-buyer-reg">
                                        <h4>How do I register to bid?</h4>
                                        <div className="faq">
                                            <p>In order to register, first sign up by clicking the “Sign In” icon in the upper right corner of the screen – then click “Sign up here” in the box that subsequently pops up. Once you create a username and password, you’ll be prompted to verify your e-mail address. After you’ve done that, you can return to Cars &amp; Bids and you’ll be prompted to register to bid.</p>
                                            <p>If you don’t want to register just yet, no problem – you can do it later. Once you find a car you want to bid on, click “Place Bid” on the car’s listing page, and you’ll be prompted to register before you can bid. You will have to enter your credit information, as we place a hold on each bidder’s credit card until the conclusion of the auction.</p>
                                        </div>
                                    </li>
                                    <li className="" id="faq-buyer-inspect">
                                        <h4>Can I inspect a car before bidding? </h4>
                                        <div className="faq">
                                            <p>If you want to inspect a car before bidding, you’ll need to contact the seller to arrange for an inspection. Use the “Contact” link in the auction description to get in touch with the seller in order to schedule a time to inspect the vehicle. </p>
                                        </div>
                                    </li>
                                    <li className="" id="faq-buyer-bid">
                                        <h4>How do I place a bid?</h4>
                                        <div className="faq">
                                            <p>In order to place a bid, you first have to register, which we’ve explained above. Once you’ve registered and you’ve found a car you’re interested in buying, bidding is easy – just click the “Place Bid” icon on a vehicle’s listing page. Then, you’re prompted to enter your bid amount.</p>
                                            <p>Your bid must be higher than the previous bid, of course – and depending on the current bidding level, there may be a minimum increase over the previous bid. Once you’ve submitted your bid, we place a hold on your credit card for 4.5% of your bid amount until the duration of the auction, in case you end up as the winning bidder. </p>
                                        </div>
                                    </li>
                                    <li className="" id="faq-buyer-fees">
                                        <h4>What are the fees for the buyer on Cars &amp; Bids?</h4>
                                        <div className="faq">
                                            <p>In addition to the final purchase price paid to the seller, buyers pay a 4.5% buyer’s fee to Cars &amp; Bids. The buyer’s fee has a minimum of $225, and a maximum of $4,500.</p>
                                        </div>
                                    </li>
                                    <li className="" id="faq-buyer-hold">
                                        <h4>Why do you place a hold on my credit card when I bid?</h4>
                                        <div className="faq">
                                            <p>We place a hold on your credit card when you bid in order to account for the possibility that you may have to pay the buyer’s fee, should you end up as the winning bidder. The hold is for 4.5% of your initial bid amount, with a minimum of $225 and a maximum of $4,500. If you aren’t the winning bidder, the hold is released from your credit card at the conclusion of the auction. </p>
                                        </div>
                                    </li>
                                    <li className="" id="faq-buyer-contact">
                                        <h4>How do I contact a seller privately?</h4>
                                        <div className="faq">
                                            <p>You can contact the seller privately through the auction description page for the seller’s vehicle. Just click the “Contact the seller” link next to the seller’s name, and you’ll be able to send the seller a private message that won’t appear on the auction itself.</p>
                                        </div>
                                    </li>
                                    <li className="" id="faq-buyer-reserve">
                                        <h4>What if the reserve isn’t met?</h4>
                                        <div className="faq">
                                            <p>If you’re the high bidder on a car where the reserve isn’t met, we’ll work with the seller and the buyer in an attempt to find a sale price that’s suitable for both parties. If we’re able to reach an agreement, we’ll put the buyer and seller in contact – and our fee drops to 2.5%. </p>
                                        </div>
                                    </li>
                                    <li className="" id="faq-buyer-complete">
                                        <h4>Once the auction is over, how do I complete the transaction?</h4>
                                        <div className="faq">
                                            <p>At the conclusion of the auction, both the buyer and seller are given each other’s contact information to complete the transaction. At that point, you can get in touch via e-mail or telephone to finish the deal, arrange payment and paperwork, and take delivery.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default AboutCartrader