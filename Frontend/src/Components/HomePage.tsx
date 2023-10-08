const HomePage = () => {
  return (
    <div className="bg-blue-900 grid grid-cols-2 h-screen">
      <div className="flex justify-center flex-col px-12 text-8xl font-serif">
        <p className="text-yellow-100">Have</p>
        <p className="text-yellow-100">
          Your best <br /> Interview <br /> Prep
        </p>
      </div>

      <div className="flex justify-center items-center">
        <img
          className="rounded-3xl w-[36rem]"
          src="https://builtin.com/cdn-cgi/image/f=auto,quality=80,width=752,height=435/https://builtin.com/sites/www.builtin.com/files/styles/byline_image/public/2023-05/nick%20shah%20ai%20job%20interviews%20image.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomePage;
