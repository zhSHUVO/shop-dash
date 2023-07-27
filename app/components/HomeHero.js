const HomeHero = () => {
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co/jgZFSL7/Old-Electronics-hero-1-width-1200-format-webp.webp)",
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">
                            Find the perfect products and great deals tailored
                            for all your needs. Whether you are searching for
                            gadgets, fashion, home essentials, or more, we have
                            everything you desire in one place. Start exploring
                            now!
                        </p>
                        <button className="btn btn-ghost">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHero;
