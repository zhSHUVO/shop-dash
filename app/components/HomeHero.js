const HomeHero = () => {
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co/JQjBXVN/alexandre-debieve-FO7-JIlwj-Ot-U-unsplash.jpg)",
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-6xl font-bold">Hello there</h1>
                        <p className="mb-5 text-xl">
                            Find the perfect products and great deals tailored
                            for all your needs. Whether you are searching for
                            gadgets, fashion, home essentials, or more, we have
                            everything you desire in one place. Start exploring
                            now!
                        </p>
                        <div className="grid place-items-center">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 16 16"
                                height="2em"
                                width="2em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.646 9.646a.5.5 0 01.708 0L8 12.293l2.646-2.647a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.708z"
                                    clipRule="evenodd"
                                ></path>
                                <path
                                    fillRule="evenodd"
                                    d="M8 2.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V3a.5.5 0 01.5-.5z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHero;
