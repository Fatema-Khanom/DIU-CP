

const MonthlyContest = () => {
    return (
        <div>
            <div className=" pb-12">
            <h2 className="text-center dark:text-[#292a2a] text-[#f2f5f5] opacity-1 items-center relative font-bold mb-4 pt-16 text-6xl lg:text-9xl">
          CONTEST
        </h2>
                <div className="">
                <h2 className="text-center text-black items-center -mt-16 pb-4 lg:-mt-24 text-3xl lg:text-4xl font-bold relative">
            Monthly Contest
            <div className="h-1 w-24 bg-black absolute bottom-0 left-1/2 transform -translate-x-1/2 "></div>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 w-11/12 mx-auto mt-12">
    {/* December */}
    <div className="card w-96  bg-base-100 shadow-xl">
        <figure className="h-1/2">
            <img src="https://i.ibb.co/YfyqyF0/dec.png" alt="December" className="rounded-t-xl w-full h-52 object-cover" />
        </figure>
        <div className="card-body items-center text-center h-1/2">
            <h2 className="card-title">December 2023 Contest</h2>
            <p>Congratulations to the talented winners of our December contest! Your creativity shone through, and we appreciate all the amazing entries.</p>
            {/* See Details Button */}
            <div className="card-actions mt-2">
                <button className="btn btn-primary">See Details</button>
            </div>
        </div>
    </div>

    {/* November */}
    <div className="card w-96 h- bg-base-100 shadow-xl">
        <figure className="h-1/2">
            <img src="https://i.ibb.co/tJm5N1c/nov.png" alt="November" className="rounded-t-xl w-full h-52 object-cover" />
        </figure>
        <div className="card-body items-center text-center h-1/2">
            <h2 className="card-title">November 2023 Contest</h2>
            <p>Congratulations to the talented winners of our November contest! Your creativity shone through, and we appreciate all the amazing entries.</p>
            {/* See Details Button */}
            <div className="card-actions mt-2">
                <button className="btn btn-primary">See Details</button>
            </div>
        </div>
    </div>

    {/* October */}
    <div className="card w-96  bg-base-100 shadow-xl">
        <figure className="h-1/2">
            <img src="https://i.ibb.co/BfYjkDd/oct.png" alt="October" className="rounded-t-xl w-full h-52 object-cover" />
        </figure>
        <div className="card-body items-center text-center h-1/2">
            <h2 className="card-title">October 2023 Contest</h2>
            <p>Congratulations to the talented winners of our October contest! Your creativity shone through, and we appreciate all the amazing entries.</p>
            {/* See Details Button */}
            <div className="card-actions mt-2">
                <button className="btn btn-primary">See Details</button>
            </div>
        </div>
    </div>

    {/* September */}
    <div className="card w-96  bg-base-100 shadow-xl">
        <figure className="h-1/2">
            <img src="https://i.ibb.co/rkzWrns/sep.png" alt="September" className="rounded-t-xl w-full h-52 object-cover" />
        </figure>
        <div className="card-body items-center text-center h-1/2">
            <h2 className="card-title">September 2023 Contest</h2>
            <p>Congratulations to the talented winners of our September contest! Your creativity shone through, and we appreciate all the amazing entries.</p>
            {/* See Details Button */}
            <div className="card-actions mt-2">
                <button className="btn btn-primary">See Details</button>
            </div>
        </div>
    </div>

    {/* August */}
    <div className="card w-96  bg-base-100 shadow-xl">
        <figure className="h-1/2">
            <img src="https://i.ibb.co/5jHkNW7/aug.jpg" alt="August" className="rounded-t-xl w-full h-52 object-cover" />
        </figure>
        <div className="card-body items-center text-center h-1/2">
            <h2 className="card-title">August 2023 Contest</h2>
            <p>Congratulations to the talented winners of our August contest! Your creativity shone through, and we appreciate all the amazing entries.</p>
            {/* See Details Button */}
            <div className="card-actions mt-2">
                <button className="btn btn-primary">See Details</button>
            </div>
        </div>
    </div>
</div>


               

                </div>
            </div>
        </div>
    );
};

export default MonthlyContest;