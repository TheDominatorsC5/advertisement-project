export default function ViewAProduct() {

    return (
        <>
            <div className="flex flex-col-reverse md:flex-row items-start gap-4">
                <div className="grid grid-flow-col gap-0">
                    <div classname="border border-gray-300 w-[170px] h-[600px]">
                        <div className="border border-gray-300 w-[170px] h-[140px] mb-3 mt-0.5">Small Card</div>
                        <div className="border border-gray-300 w-[170px] h-[140px] mb-3">Small Card</div>
                        <div className="border border-gray-300 w-[170px] h-[140px] mb-3">Small Card</div>
                        <div className="border border-gray-300 w-[170px] h-[140px]">Small Card</div>
                    </div>
                    <div className="border border-black w-[500px] h-[600px]">Big Card</div>
                </div>
            </div>
        </>
    );
}