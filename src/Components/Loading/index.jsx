

const Loading = () => {
    return (
        <div className="flex flex-wrap justify-center items-center gap-6 px-5">
            <div className="bg-gray-300 rounded-lg animate-pulse w-56 h-60">
                <figure className="relative mb-2 w-full h-4/5">
                    <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'"></span>
                    <img className="w-full h-full object-cover rounded-lg"/>
                </figure>
                <p className=' flex justify-between px-2 items-center'>
                    <span className='text-sm font-light'></span>
                    <span className='text-lg font-medium'></span>
                </p>
            </div>
        </div>
    )
}

export {Loading};