import userImage from '../../assets/user.png';

const Banner = () => {
  return (
    <div className="pt-10 mb-9 bg-violet-50 flex gap-5 flex-wrap md:flex-nowrap justify-center items-center md:justify-between">
      <div className='px-2 md:px-8 space-y-2'>
        <h2 className="text-5xl md:text-4xl lg:text-6xl font-extrabold leading-[75px]  lg:leading-[96px]">
            <span>One Step</span>
            <br />
            <span>Closer To Your</span>
        </h2>
        <span className='text-5xl md:text-4xl lg:text-6xl font-extrabold text-violet-700'>Dream Job</span>
        <p className='font-medium text-gray-400 my-6 py-4 pr-7 md:pr-20 text-sm'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
          dolor cupiditate qui exercitationem nulla inventore unde tempora
          adipisci, est ad sed! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, necessitatibus!
        </p>
      </div>
      <div>
        <img src={userImage} alt="userImage" />
      </div>
    </div>
  )
}

export default Banner
