const Dashboard = () => {
  return (
    <div className="bg-blue-900 flex flex-col justify-center items-center p-10 ">
      <div className="bg-blue-500 rounded-2xl p-9 text-white h-screen w-[80%] ">
        <div className="border-b pb-6 pt-6 border-blue-100 flex items-center justify-between">
          <h3 className="  font-semibold ">Subject Matter Expertise</h3>
          <p className="  font-semibold ">7</p>
        </div>

        <div className="border-b pb-6 pt-6 border-blue-100 flex items-center justify-between">
          <h3 className="  font-semibold ">Communication skills</h3>
          <p className="  font-semibold ">8</p>
        </div>

        <div className="border-b pb-6 pt-6 border-blue-100 flex items-center justify-between">
          <h3 className="  font-semibold ">Hiring criteria</h3>
          <p className="  font-semibold ">6</p>
        </div>

        <div className="border-b pb-6 pt-6 border-blue-100 flex items-center justify-between">
          <h3 className="  font-semibold ">Ability to Explain Approach</h3>
          <p className="  font-semibold ">8</p>
        </div>

        <div className="border-b pb-6 pt-6 border-blue-100 flex items-center justify-between">
          <h3 className="  font-semibold ">Code Quality</h3>
          <p className="  font-semibold ">9</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
