import { FcLike } from "react-icons/fc";
import { AiFillDislike } from "react-icons/ai";
import { FaComments } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SurveyCard = ({ item: survey }) => {
  const comment = survey.comments[0];

  return (
    <>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="p-5 hover:shadow-xl bg-slate-900 text-gray-300 rounded-lg md:flex-1     md:max-w-2xl mx-auto w-full"
      >
        {/* user profile */}
        <div className="flex items-center justify-center ">
          <div className="flex flex-col items-center justify-center">
            <img
              className="w-24 h-24 rounded-full"
              src="https://i.ibb.co.com/pjb9jk8/person-6.png"
              alt=""
            />
            <p className="font-lato">Muhammed Maruf Raju</p>
            <p className="text-gray-400 text-xs">
              <span className="text-te font-semibold">Joined:</span>
              {new Date(comment.timestamp).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
        <hr className="custom-border max-w-96 mx-auto my-3 " />
        {/* Question and Description */}
        <div>
          <h2 className="text-2xl font-bold mb-2">
            <span className="text-blue-500">Question:</span> {survey.title}
          </h2>
          <p className="mb-4">{survey.description}</p>
        </div>

        {/* Vote Container */}
        <Link to={"/details"}>
          <motion.div
            whileHover={{
              scale: 1.01,

              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
            className="mb-6 py-5  px-10 pb-0 bg-gradient-to-r from-slate-900 to-slate-950 rounded-xl shadow-lg"
          >
            <div className="flex justify-between items-center">
              <div className="text-green-700 text-center font-bold">
                <p className="text-lg uppercase  tracking-wide">Yes</p>
                <span className="text-3xl font-extrabold">
                  {survey.options.Yes}
                </span>
              </div>
              <div className="h-16 border-l-2 border-white mx-4"></div>

              <div className="text-center text-red-700">
                <p className=" text-lg uppercase font-bold tracking-wide">No</p>
                <span className="text-3xl font-extrabold">
                  {survey.options.No}
                </span>
              </div>
            </div>

            <div className="p-5 text-center text-white">
              <p className=" text-lg">
                Total Votes:
                <span className="text-2xl font-bold">{survey.totalVotes}</span>
              </p>
            </div>
          </motion.div>
        </Link>

        <hr className="custom-border my-3 " />
        {/* Comments container */}
        <div className="mt-6  ">
          <h3 className="text-lg font-semibold mb-3">Comments</h3>
          <div className="border border-gray-500 p-4 rounded-lg shadow-sm">
            {/* comentor profile*/}
            <div className="flex gap-2  items-center mb-2">
              <img
                src="https://i.ibb.co.com/NnfYkgb/person-4.png"
                className="w-12 h-12 rounded-full"
                alt=""
              />
              <div>
                <p className="font-semibold">{comment.userName}</p>
                <p className="text-[.7rem]">20 minute ago</p>
              </div>
            </div>
            <p className="text-sm">{comment.comment}</p>
          </div>
        </div>

        {/* actions container */}
        <div className="flex justify-around mt-6">
          <button className="btn border-none btn-primary btn-outline  flex items-center">
            <FcLike className="text-2xl" />

            <span>30</span>
          </button>
          <button className="btn btn-outline btn-primary flex items-center ">
            <FaComments className="text-2xl" />
          </button>

          <button className="flex btn btn-outline btn-error border-none items-center space-x-1 text-red-400 hover:text-red-500 focus:outline-none">
            <AiFillDislike className="text-2xl" />

            <span>12</span>
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default SurveyCard;
