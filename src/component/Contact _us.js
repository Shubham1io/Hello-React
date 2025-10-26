const Contact_us = () => {
    return (
        <div className="flex flex-col items-center justify-center" >
            <h1 className="text-3xl font-bold p-4 m-4 " >Contact Us</h1>
            <form className="flex flex-col w-[300px] m-4">
                <input
                    type="text"
                    className="border border-black p-2 m-2"
                    placeholder="Name"
                />
                <input
                    type="text"
                    className="border border-black p-2 m-2"
                    placeholder="Message"
                />
                <button className="border border-black p-2 m-2 bg-gray-200 rounded-lg">Submit</button>
            </form>
        </div>
    );
};

export default Contact_us;