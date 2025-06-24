export default function ViewAProduct() {

    return (
        <>
            <section className="">
                <div className="grid grid-cols-2 justify-around">
                    <div className="border border-gray-500 w-[400px] h-[500px]">
                        <img 
                        src="" 
                        alt="" />
                    </div>

                    <div>
                        <h1 className="text-3xl font-semibold mb-4">PRODUCT NAME</h1>

                        <p className="text-xl text-red-500 font-semibold mb-4">PRICE</p>

                        <p>DESCRIPTION - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quis ullam soluta dignissimos at, nostrum consequatur amet! Dicta quo sed veritatis dolores quasi, in velit voluptates sit optio repellat, a nisi, adipisci suscipit. Illum cumque debitis dolore ea natus, facilis minus distinctio non consectetur consequatur sapiente ex voluptate deleniti accusantium.</p>

                        <div className="flex mt-4 gap-4">
                            <input
                                type="number"
                                defaultValue="1"
                                min="1"
                                className="w-20 px-2 py-1 border border-slate-500 rounded-md text-center"
                            />
                            <button className="bg-green-700 text-white hover:bg-[#29492f] transition duration-300 block px-8 py-2 border rounded-md font-semibold"><a href="">Buy Now</a></button>
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
}