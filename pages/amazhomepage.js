import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Search, Cart } from "react-bootstrap-icons";

const Amazhomepage = () => {
    return (
        <>
         <div>
        {/* ...HeaderStarts... */}
        <div className={styles.header}>
          <div style={{ width: "10%" }}>
            <Image
              src="/assets/images/logo.png"
              alt="logo"
              width={120}
              height={75}
              priority
            />
          </div>

          <div style={{ width: "12%" }}>
            <p className={styles.address}>
              Hello
              <br />
              <span style={{ fontWeight: "bold" }}>Select your address</span>
            </p>
          </div>

          {/* InputClassStarts */}
          <div className={styles.input}>
            <div>
              <select name="prod" id="prod" className={styles.dropdown}>
                <option value="clothing">Clothing & Accessories</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                style={{ width: "307%", height: "40px", border: "none" }}
              ></input>
            </div>
            <div
              style={{
                width: "49px",
                height: "40px",
                backgroundColor: "#e17a2b",
                marginLeft: "46.5%",
              }}
            >
              <Search
                style={{
                  marginLeft: "17px",
                  marginTop: "10px",
                  color: "black",
                }}
              />
            </div>
          </div>
          {/* InputClassClose */}

          <div style={{ width: "5%" }}></div>
          <div style={{ width: "10%" }}>
            <p className={styles.address}>
              Hello,Sign in
              <br />
              <span style={{ fontWeight: "bold" }}>Account & Lists</span>
            </p>
          </div>

          <div style={{ width: "7%" }}>
            <p className={styles.address}>
              Returns
              <br />
              <span style={{ fontWeight: "bold" }}>&Orders</span>
            </p>
          </div>

          <div style={{ width: "7%" }}>
            <Cart className={styles.cartImg} />
          </div>
        </div>
        {/* HeaderClose */}

        {/* NewHeaderStarts */}

        <div className={styles.newHeader}>
          <div style={{ width: "20%" }}>
            <Image
              src="/assets/images/logo.png"
              alt="logo"
              width={230}
              height={170}
              priority
            />
          </div>

          {/* InputClassStarts */}
          <div className={styles.newInput}>
            <div>
              <select name="prod" id="prod" className={styles.newDropdown}>
                <option value="clothing">Clothing & Accessories</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                style={{
                  width: "443%",
                  height: "60px",
                  marginTop: "37px",
                  border: "none",
                }}
              ></input>
            </div>
            <div
              style={{
                width: "70px",
                height: "60px",
                backgroundColor: "#e17a2b",
                marginLeft: "61.5%",
                marginTop: "37px",
              }}
            >
              <Search
                style={{
                  width: "25px",
                  height: "60px",
                  marginLeft: "25px",
                  color: "black",
                }}
              />
            </div>
          </div>
          {/* InputClassClose */}

          <div style={{ width: "7%" }}>
            <Cart className={styles.cartStyling} />
          </div>
        </div>

        {/* NewHeaderClose */}

        {/* ClassNavStarts */}
        <div className={styles.nav}>
          <p>All</p>
          <p>Best Sellers</p>
          <p>Mobiles</p>
          <p>Customer Service</p>
          <p>Today's Deals</p>
          <p>Fashion</p>
          <p>Electronics</p>
          <p>Prime</p>
          <p>Home & Kitchen</p>
          <p>New Releases</p>
          <p>Amazon Pay</p>
          <p>Computers</p>
        </div>
        {/* ClassNavClose */}
        {/* ClassNavbarStarts */}
      <div className={styles.navbar}>
        <p
          style={{
            marginLeft: "30px",
            marginTop: "13px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Amazon Fashion
        </p>
        <p>Women</p>
        <p>Men</p>
        <p>Kids</p>
        <p>Bags & Luggage</p>
        <p>Sportswear</p>
        <p>Sales & Deals</p>
        <p style={{ marginTop: "11px", textAlign: "center" }}>
          <span className={styles.p}>30 DAY RETURNS</span>
          <br />
          Restrictions Apply
        </p>
      </div>
      {/* ClassNavbarClose */}

      <div className={styles.locDiv}>
        Select a location to see product availability
      </div>

      <div className={styles.category}>
        <div style={{marginLeft:"0%"}}>
        <Image
              src="/assets/images/category.jpg"
              alt="logo"
              width={150}
              height={100}
              priority
            /> 
        <p>Mobiles</p> 
        </div>
        <div>
        <Image
              src="/assets/images/category.jpg"
              alt="logo"
              width={150}
              height={100}
              priority
            /> 
        <p>Fashion</p> 
        </div>
        <div>
        <Image
              src="/assets/images/category.jpg"
              alt="logo"
              width={150}
              height={100}
              priority
            /> 
        <p>Electronics</p> 
        </div>
        <div>
        <Image
              src="/assets/images/category.jpg"
              alt="logo"
              width={150}
              height={100}
              priority
            /> 
        <p>Home</p> 
        </div>
        <div>
        <Image
              src="/assets/images/category.jpg"
              alt="logo"
              width={150}
              height={100}
              priority
            /> 
        <p>miniTV</p> 
        </div>
        <div>
        <Image
              src="/assets/images/category.jpg"
              alt="logo"
              width={150}
              height={100}
              priority
            /> 
        <p>Appliances</p> 
        </div>
        <div>
        <Image
              src="/assets/images/category.jpg"
              alt="logo"
              width={150}
              height={100}
              priority
            /> 
        <p>Books, Toys</p> 
        </div>
    
      </div>
      
      {/* ClassBodyStarts */}
     <div className={styles.body}>
        {/* <div className={styles.payOnDelivery}>
        <Image
              src="/assets/images/payImg.jpg"
              alt="logo"
              width={350}
              height={40}
              layout="responsive"
              priority
            /> 
        </div> */}

        <div className={styles.deal}>
          <h1>Starting at ₹199 Deals on fashion,beauty,kitchen & more</h1>  
        
            <div className={styles.dealImage}>
            <Image
                src="/assets/images/deal.jpg"
                alt="logo"
                width={100}
                height={100}
                layout="responsive"
                priority
                /> 
             </div>
            
          <div className={styles.bestDeal}>
            <h1>₹319.00 - ₹469.00</h1>
            <p>Best Deals on Trolleys, Duffles and Bags</p>
          </div>

          <div className={styles.flex}>
             <div>
             <Image
                src="/assets/images/deal.jpg"
                alt="logo"
                width={100}
                height={100}
                layout="responsive"
                priority
                />  
             </div> 
             <div>
             <Image
                src="/assets/images/deal.jpg"
                alt="logo"
                width={100}
                height={100}
                layout="responsive"
                priority
                />  
             </div>
             <div>
             <Image
                src="/assets/images/deal.jpg"
                alt="logo"
                width={100}
                height={100}
                layout="responsive"
                priority
                />  
             </div>
             <div>
             <Image
                src="/assets/images/deal.jpg"
                alt="logo"
                width={100}
                height={100}
                layout="responsive"
                priority
                />  
             </div> 
          </div>
          <p className={styles.color}>See all deals</p>

        </div>

        <div className={styles.cardp}>
          <p>Pocket friendly stores</p>
        </div>

        <div className={styles.flexCard}>
          <div className={styles.card}>
           <p>-Under-</p>
           <p><sup style={{fontSize:"40px"}}>₹</sup>199</p>
          </div>
          <div className={styles.card}>
           <p>-Under-</p>
           <p><sup style={{fontSize:"40px"}}>₹</sup>299</p>
          </div>
        </div>

        <div className={styles.flexCard}>
          <div className={styles.card}>
           <p>-Under-</p>
           <p><sup style={{fontSize:"40px"}}>₹</sup>399</p>
          </div>
          <div className={styles.card}>
           <p>-Under-</p>
           <p><sup style={{fontSize:"40px"}}>₹</sup>499</p>
          </div>
        </div>

        <div style={{paddingLeft:"25px",borderBottom:"5px solid silver"}}>
          <p className={styles.color}>See more</p>
        </div>

        <div className={styles.accessText}>
          <p>Curated stores for you</p>
        </div>

        <div className={styles.accessFlex} style={{marginTop:"0px"}}>
          <div className={styles.accessDiv}>
          <Image
                src="/assets/images/accessories.jpg"
                alt="logo"
                width={1500}
                height={700}
                layout="responsive"
                priority
                />
            <p>Mobile accessories | Starting ₹99</p>
          </div>
          <div className={styles.accessDiv}>
          <Image
                src="/assets/images/accessories.jpg"
                alt="logo"
                width={1500}
                height={700}
                layout="responsive"
                priority
                />
            <p>Beauty & makeup | Starting ₹99</p>
          </div>
        </div>

        <div className={styles.accessFlex}>
          <div className={styles.accessDiv}>
          <Image
                src="/assets/images/accessories.jpg"
                alt="logo"
                width={1500}
                height={700}
                layout="responsive"
                priority
                />
            <p>Footwear | Under ₹499</p>
          </div>
          <div className={styles.accessDiv}>
          <Image
                src="/assets/images/accessories.jpg"
                alt="logo"
                width={1500}
                height={700}
                layout="responsive"
                priority
                />
            <p>Kitchen budget bazaar | Starting ₹99</p>
          </div>
        </div>

        <div className={styles.accessFlex}>
          <div className={styles.accessDiv}>
          <Image
                src="/assets/images/accessories.jpg"
                alt="logo"
                width={1500}
                height={700}
                layout="responsive"
                priority
                />
            <p>Best finds for home | Starting ₹99</p>
          </div>
          <div className={styles.accessDiv}>
          <Image
                src="/assets/images/accessories.jpg"
                alt="logo"
                width={1500}
                height={700}
                layout="responsive"
                priority
                />
            <p>Food & beverages | Starting ₹149</p>
          </div>
        </div>

        <div className={styles.accessFlex}>
          <div className={styles.accessDiv}>
          <Image
                src="/assets/images/accessories.jpg"
                alt="logo"
                width={1500}
                height={700}
                layout="responsive"
                priority
                />
            <p>Toys & games | Starting ₹99</p>
          </div>
          <div className={styles.accessDiv}>
          <Image
                src="/assets/images/accessories.jpg"
                alt="logo"
                width={1500}
                height={700}
                layout="responsive"
                priority
                />
            <p>See all categories</p>
          </div>
        </div>

        <div className={styles.seeMore}>
          <p className={styles.color}>See more</p>
        </div>

        <div className={styles.saveDiv}>
          <div className={styles.saveImg}>
          <Image
                src="/assets/images/clothing.jpg"
                alt="logo"
                width={150}
                height={150}
                layout="responsive"
                priority
                />
          </div>
          <h2>Save 60%</h2>
          <p>DailyObjects Lush Midnight Zip Wallet for Women</p>
          <p>₹799.00 <strike style={{color:"gray"}}> ₹1,999.00</strike></p>
        </div>

        <div className={styles.accessText}>
          <p>Clothing, footwear and more</p>
        </div>

        <div className={styles.accessFlexNew} style={{marginTop:"0px"}}>
          <div className={styles.accessDiv}>
          <Image
                src="/assets/images/clothing.jpg"
                alt="logo"
                width={1500}
                height={1300}
                layout="responsive"
                priority
                />
            <p>Under ₹499 | T-shirts & sarees</p>
          </div>
          <div className={styles.accessDiv}>
          <Image
                src="/assets/images/clothing.jpg"
                alt="logo"
                width={1500}
                height={1300}
                layout="responsive"
                priority
                />
            <p>Starting ₹99 | Skin care</p>
          </div>
        </div>

        <div className={styles.accessFlexNew}>
          <div className={styles.accessDiv}>
          <Image
                src="/assets/images/clothing.jpg"
                alt="logo"
                width={1500}
                height={1300}
                layout="responsive"
                priority
                />
            <p>Under ₹499 | Casual and running shoes</p>
          </div>
          <div className={styles.accessDiv}>
          <Image
                src="/assets/images/clothing.jpg"
                alt="logo"
                width={1500}
                height={1300}
                layout="responsive"
                priority
                />
            <p>Under ₹399 | Watches, backpacks & more</p>
          </div>
        </div>

        <div className={styles.seeAll}>
          <p className={styles.color}>See all offers</p>
        </div>

        <div className={styles.accessText}>
          <p>Best picks for your home & kitchen</p>
        </div>

        <div className={styles.accessFlexNew} style={{marginTop:"0px"}}>
          <div className={styles.accessDiv}>
          <Image
                src="/assets/images/kitchen.jpg"
                alt="logo"
                width={1500}
                height={1300}
                layout="responsive"
                priority
                />
            <p>Starting ₹499 | Blenders & juicers</p>
          </div>
          <div className={styles.accessDiv}>
          <Image
                src="/assets/images/kitchen.jpg"
                alt="logo"
                width={1500}
                height={1300}
                layout="responsive"
                priority
                />
            <p>Starting ₹299 | Cookware sets</p>
          </div>
        </div>

        <div className={styles.accessFlexNew}>
          <div className={styles.accessDiv}>
          <Image
                src="/assets/images/kitchen.jpg"
                alt="logo"
                width={1500}
                height={1300}
                layout="responsive"
                priority
                />
            <p>Starting ₹399 | Bedsheets</p>
          </div>
          <div className={styles.accessDiv}>
          <Image
                src="/assets/images/kitchen.jpg"
                alt="logo"
                width={1500}
                height={1300}
                layout="responsive"
                priority
                />
            <p>Starting ₹145 | Hooks</p>
          </div>
        </div>

        <div className={styles.seeAll}>
          <p className={styles.color}>Shop all</p>
        </div>

        <div className={styles.saveDiv}>
          <div className={styles.saveImg}>
          <Image
                src="/assets/images/clothing.jpg"
                alt="logo"
                width={150}
                height={150}
                layout="responsive"
                priority
                />
          </div>
          <h2>Save 67%</h2>
          <p>HAMMONDS FLYCATCHER Genuine Leather Wallet for...</p>
          <p>₹527.00 <strike style={{color:"gray"}}> ₹1,599.00</strike></p>
        </div>

        <div className={styles.sponsoreDiv}>
          <div className={styles.sponsoreImg}>
          <Image
                src="/assets/images/sponsored.jpg"
                alt="logo"
                width={1500}
                height={350}
                layout="responsive"
                priority
                />
          </div>
        </div>

        <div className={styles.accessText}>
          <p>Kitchen & dining essentials</p>
        </div>

        <div className={styles.accessFlexNew} style={{marginTop:"0px"}}>
          <div className={styles.accessDiv}>
          <Image
                src="/assets/images/essentials.jpg"
                alt="logo"
                width={1500}
                height={1300}
                layout="responsive"
                priority
                />
            <p>Starting ₹160 | Water Bottle</p>
          </div>
          <div className={styles.accessDiv}>
          <Image
                src="/assets/images/essentials.jpg"
                alt="logo"
                width={1500}
                height={1300}
                layout="responsive"
                priority
                />
            <p>Starting ₹69 | Cups & Mugs</p>
          </div>
        </div>        

        <div className={styles.accessFlexNew}>
          <div className={styles.accessDiv}>
          <Image
                src="/assets/images/essentials.jpg"
                alt="logo"
                width={1500}
                height={1300}
                layout="responsive"
                priority
                />
            <p>Starting ₹489 | Lunch Boxes</p>
          </div>
          <div className={styles.accessDiv}>
          <Image
                src="/assets/images/essentials.jpg"
                alt="logo"
                width={1500}
                height={1300}
                layout="responsive"
                priority
                />
            <p>Starting ₹148 | Glassware</p>
          </div>
        </div> 

        <div className={styles.seeAll}>
          <p className={styles.color}>Shop all</p>
        </div>

        <div className={styles.accessText}>
          <p>Watch the latest phone unboxing | miniTV</p>
        </div> 

        <div className={styles.essentialsDiv}>
          <div>
          <Image
                src="/assets/images/latest.jpg"
                alt="logo"
                width={1500}
                height={1300}
                layout="responsive"
                priority
                />
          </div>
        </div>  

        <div className={styles.saveDiv} style={{borderTop:"10px solid silver"}}>
          <div className={styles.saveImg}>
          <Image
                src="/assets/images/clothing.jpg"
                alt="logo"
                width={150}
                height={150}
                layout="responsive"
                priority
                />
          </div>
          <h2>Save 69%</h2>
          <p>HAMMONDS FLYCATCHER Brown Leather Men's RFID...</p>
          <p>₹491.00 <strike style={{color:"gray"}}> ₹1,599.00</strike></p>
        </div> 

        <div className={styles.accessText} style={{borderTop:"10px solid silver"}}>
          <p>Deals on women's fashion</p>
        </div>

        <div className={styles.accessFlexNew} style={{marginTop:"0px"}}>
          <div className={styles.accessDiv}>
          <Image
                src="/assets/images/watch.jpg"
                alt="logo"
                width={1500}
                height={1300}
                layout="responsive"
                priority
                />
            <p>Sarees, kurtis and more | Starting ₹199</p>
          </div>
          <div className={styles.accessDiv}>
          <Image
                src="/assets/images/watch.jpg"
                alt="logo"
                width={1500}
                height={1300}
                layout="responsive"
                priority
                />
            <p>Handbags, footwear & more | Under ₹399</p>
          </div>
        </div> 

        <div className={styles.accessFlexNew}>
          <div className={styles.accessDiv}>
          <Image
                src="/assets/images/watch.jpg"
                alt="logo"
                width={1500}
                height={1300}
                layout="responsive"
                priority
                />
            <p>Fashion jewellery | Under ₹299</p>
          </div>
          <div className={styles.accessDiv}>
          <Image
                src="/assets/images/watch.jpg"
                alt="logo"
                width={1500}
                height={1300}
                layout="responsive"
                priority
                />
            <p>Watches | Starting ₹399</p>
          </div>
        </div>

        <div className={styles.seeAll}>
          <p className={styles.color}>Shop all</p>
        </div> 

     </div>
      {/* ClassBodyCloses */}

      {/* <div className={styles.backToTop}>
        <p>Back to top</p>
      </div>

      <div className={styles.footer}>
        <div className={styles.footerText}>
          <div>
            <h4>Get to Know Us</h4>
            <p>About Us</p>
            <p>Careers</p>
            <p>Press Releases</p>
            <p>Amazon Cares</p>
            <p>Gift a Smile</p>
            <p>Amazon Science</p>
          </div>

          <div>
            <h4>Connect with Us</h4>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>

          <div>
            <h4>Make Money with Us</h4>
            <p>Sell on Amazon</p>
            <p>Sell under Amazon Accelerator</p>
            <p>Amazon Global Selling</p>
            <p>Become an Affiliate</p>
            <p>Fulfilment by Amazon</p>
            <p>Advertise Your Products</p>
            <p>Amazon Pay on Merchants</p>
          </div>

          <div style={{ marginLeft: "35px" }}>
            <h4>Let Us Help You</h4>
            <p>COVID-19 and Amazon</p>
            <p>Your Account</p>
            <p>Returns Centre</p>
            <p>100% Purchase Protection</p>
            <p>Amazon App Download</p>
            <p>Amazon Assistant Download</p>
            <p>Help</p>
          </div>
        </div>

        <div className={styles.footerLogo}>
          <div>
            <Image
              src="/assets/images/logo.png"
              alt="logo"
              width={120}
              height={85}
              priority
            />
          </div>
          <div className={styles.select}>
            <select name="lang" id="lang" className={styles.select}>
              <option value="eng">English</option>
            </select>
          </div>

          <div class={styles.places}>
            <p>Australia</p>
            <p>Brazil</p>
            <p>Canada</p>
            <p>China</p>
            <p>France</p>
            <p>Germany</p>
            <p>Italy</p>
            <p>Japan</p>
            <p>Mexico</p>
            <p>Netherlands</p>
            <p>Poland</p>
            <p>Singapore</p>
            <p>Spain</p>
            <p>Turkey</p>
            <p>United Arab Emirates</p>
            <p>United</p>
          </div>

          <div className={styles.states}>
            <p>Kingdom</p>
            <p>United States</p>
          </div>
        </div>

        <div className={styles.newFooterLogo}>
          <div style={{ width: "250px", height: "200px" }}>
            <Image
              src="/assets/images/logo.png"
              alt="logo"
              width={250}
              height={200}
              layout="responsive"
              priority
            />
          </div>
          <div className={styles.newSelect}>
            <select name="lang" id="lang" className={styles.newSelect}>
              <option value="eng">English</option>
            </select>
          </div>

          <div class={styles.newPlaces}>
            <p>Australia</p>
            <p>Brazil</p>
            <p>United</p>
            <p>Canada</p>
            <p>China</p>
            <p>France</p>
            <p>Germany</p>
            <p>Italy</p>
            <p>Japan</p>
            <p>Mexico</p>
          </div>

          <div className={styles.newStates}>
            <p>Kingdom</p>
            <p>United States</p>
          </div>
        </div>

        <div className={styles.footerFlex}>
          <div className={styles.flex}>
            <div className={styles.display}>
              <p>AbeBooks</p>
              <p style={{ color: "gray" }}>Books, art</p>
              <p style={{ color: "gray" }}>& collectibles</p>
            </div>
            <div className={styles.display}>
              <p>Amazon Web Services</p>
              <p style={{ color: "gray" }}>Scalable Cloud</p>
              <p style={{ color: "gray" }}>Computing Services</p>
            </div>
            <div className={styles.display}>
              <p>Audible</p>
              <p style={{ color: "gray" }}>Download</p>
              <p style={{ color: "gray" }}>Audio Books</p>
            </div>
            <div className={styles.display}>
              <p>DPReview</p>
              <p style={{ color: "gray" }}>Digital</p>
              <p style={{ color: "gray" }}>Photography</p>
            </div>
            <div className={styles.display}>
              <p>IMDb</p>
              <p style={{ color: "gray" }}>Movies, TV</p>
              <p style={{ color: "gray" }}>& celebrities</p>
            </div>
          </div>

          <div className={styles.flex}>
            <div className={styles.display}>
              <p>Shopbop</p>
              <p style={{ color: "gray" }}>Designer</p>
              <p style={{ color: "gray" }}>Fashion Brands</p>
            </div>
            <div className={styles.display}>
              <p>Amazon Business</p>
              <p style={{ color: "gray" }}>Everything For</p>
              <p style={{ color: "gray" }}>Your Business</p>
            </div>
            <div className={styles.display}>
              <p>Prime Now</p>
              <p style={{ color: "gray" }}>2-Hour Delivery</p>
              <p style={{ color: "gray" }}>on Everyday Items</p>
            </div>
            <div className={styles.display}>
              <p>Amazon Prime Music</p>
              <p style={{ color: "gray" }}>90 million songs, ad-free</p>
              <p style={{ color: "gray" }}>Over 15 million podcast episodes</p>
            </div>
          </div>
        </div>
      </div> */}

      </div>
        </>
    );
}

export default Amazhomepage;
