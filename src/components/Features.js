import React from "react";

export default function Features() {
    return (
        <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto" id="feature">
            <div className="flex flex-col lg:flex-row justify-between itmes-start gap-10">
                <div className="lg:w-1/4">
                    <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">Why we are better then others</h3>
                    <p className="text-base text-tartiary">
                        A simple paragraph is comprised of three major comopnents. The first sentence, which is often a
                        declarative sentence, is called the "topic sentence"
                    </p>
                </div>
                <div className="w-full lg:w-3/4">
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
                        <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
                            <div>
                                <img src="https://cdn.pixabay.com/photo/2022/01/22/01/54/path-6956085_1280.png"></img>
                                <h5 className="text-2xl font-semibold text-primary pt-5 text-center">
                                    Conventient study schedule
                                </h5>
                            </div>
                        </div>
                        <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16">
                            <div>
                                <img src="https://cdn.pixabay.com/photo/2022/01/22/01/54/path-6956085_1280.png"></img>
                                <h5 className="text-2xl font-semibold text-primary pt-5 text-center">
                                    Conventient study schedule
                                </h5>
                            </div>
                        </div>
                        <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
                            <div>
                                <img src="https://cdn.pixabay.com/photo/2022/01/22/01/54/path-6956085_1280.png"></img>
                                <h5 className="text-2xl font-semibold text-primary pt-5 text-center">
                                    Conventient study schedule
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
