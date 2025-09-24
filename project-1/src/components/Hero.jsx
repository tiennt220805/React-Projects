const Hero = () => {
    return (
        <main className="hero container">
            <div className="hero-content">
                <h1 className="header">YOUR FEET DESERVE THE BEST</h1>
                <p className="body">
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                </p>
                <div className="hero-btn">
                    <button className="font-size-24">Shop Now</button>
                    <button className="font-size-24 secondary-btn">Category</button>
                </div>
                <div className="shopping">
                    <p>Also Available On</p>
                    <div className="brand-icons">
                        <img src="/images/flipkart.png" alt="flipkart-logo" />
                        <img src="/images/amazon.png" alt="amazon-logo" />
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="/images/shoe_image.png" alt="shoe-img" />
            </div>
        </main  >
    )
}

export default Hero
