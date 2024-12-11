import React from "react";

const Home = () => {
  const filters = ["All", "Today", "Tomorrow", "This Weekend", "Free"];

  const events = [
    {
      id: 1,
      imgSrc:
        "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "",
      description: "",
      time: "",
      price: "",
      month: "",
      date: "",
    },
    {
      id: 2,
      imgSrc:
        "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "",
      description: "",
      time: "",
      price: "",
      month: "",
      date: "",
    },
    {
      id: 3,
      imgSrc:
        "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "",
      description: "",
      time: "",
      price: "",
      month: "",
      date: "",
    },
  ];
  const categories = [
    {
      id: 1,
      title: "Entertainment",
      imgSrc:
        "https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Educational & Business",
      imgSrc:
        "https://images.pexels.com/photos/29646491/pexels-photo-29646491/free-photo-of-graduation-celebration-with-cap-toss-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "Cultural & Arts",
      imgSrc:
        "https://images.pexels.com/photos/29636836/pexels-photo-29636836/free-photo-of-traditional-fire-breather-performing-at-festival.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      title: "Sports & Fitness",
      imgSrc:
        "https://images.pexels.com/photos/29694798/pexels-photo-29694798/free-photo-of-group-of-male-runners-competing-in-foggy-marathon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      title: "Sports & Fitness",
      imgSrc:
        "https://images.pexels.com/photos/8348740/pexels-photo-8348740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      title: "Travel & Adventure",
      imgSrc:
        "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <>
      {/* Hero Video */}
      <div className=" mx-auto m-2 md:m-4  relative rounded-lg shadow-2xl ring-1 ring-gray-900/10 h-screen max-w-screen-2xl">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 rounded-large h-full w-full object-cover"
          src="https://videos.pexels.com/video-files/4440816/4440816-hd_1920_1080_25fps.mp4"
          autoPlay
          loop
          muted
        ></video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-large h-full w-full object-cover"></div>
      </div>

      {/* Explore */}
      <div className="my-5 md:my-7 lg:my-9 mx-2 md:mx-8 lg:mx-10 xl:mx-12">
        <h2 className="font-medium tracking-wider leading-none text-start my-2 p-y2 text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
          Explore Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 my-5 justify-items-center">
          {categories.map((category) => (
            <span key={category.id}>
              <img
                className="w-20 h-20 sm:w-24 md:w-28 lg:w-28 xl:w-36 2xl:w-44 sm:h-24 md:h-28 lg:h-28 xl:h-36 2xl:h-44  rounded-full object-cover"
                src={category.imgSrc}
                alt={category.title}
              />
              <p className="font-normal text-center my-2 py-2 text-xs sm:text-sm md:text-base lg:text-base xl:text-xl 2xl:text-xl">
                {category.title}
              </p>
            </span>
          ))}
        </div>
      </div>

      {/* Popular Events */}
      <div className="mx-2 md:mx-8 lg:mx-10 xl:mx-12">
        {/* Heading */}
        <h2 className="font-medium tracking-wider leading-none text-start my-2 py-2 text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
          Popular Events in Sri Lanka
        </h2>

        {/* Filters */}
        <div className="flex gap-4 mb-6">
          {filters.map((filter, index) => (
            <button
              key={index}
              className="hidden sm:block px-4 py-2 bg-none border-2 border-[#2e54ff] text-[#2e54ff] rounded-full shadow-2xl hover:bg-gray-100"
            >
              <p className="md:text-xs lg:text-sm xl:text-base">{filter}</p>
            </button>
          ))}
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
          {events.map((event, id) => (
            <div key={id} className="bg-white/60 rounded-2xl shadow-md">
              <img
                className="rounded-2xl"
                src={event.imgSrc}
                alt={event.title}
              />
            </div>
            
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
