import "./App.css";
import { useState } from "react";
function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-soft_violet to-soft_blue my-10 flex items-center mt-36 justify-center bg-no-repeat">
      <div className="flex md:flex-row flex-col bg-white rounded-3xl mx-5 max-w-[30em] md:max-w-[56em] min-w-[20em] md:mx-20 md:min-w-[790px]">
        <ImgSection />
        <MainCard />
      </div>
    </main>
  );
}
function ImgSection() {
  return (
    <div className="bg-[url('../public/bg-pattern-mobile.svg')] w-full h-56 bg-no-repeat bg-[length:75%] bg-top md:h-auto md:w-1/2 md:bg-[url('../public/bg-pattern-desktop.svg')] md:bg-[length:95%] md:bg-[-40px_60px] ">
      <div className="">
        <img
          src="./illustration-box-desktop.svg"
          alt="box"
          className="relative hidden md:block z-10 h-40 translate-y-[90%] translate-x-[-48%]"
        ></img>
      </div>
      <div className="relative -translate-y-[60%] md:translate-y-0 ">
        <picture className="md:block md:relative md:translate-y-[-40%] md:translate-x-[-16%]">
          <source
            srcSet="./illustration-woman-online-desktop.svg"
            media="(min-width: 768px)"
            className="h-5/6"
          />
          <img
            src="./illustration-woman-online-mobile.svg"
            alt="illustration box"
            className="w-3/4 mx-auto md:w-auto"
          />
        </picture>
      </div>
    </div>
  );
}
function MainCard() {
  return (
    <div className="mx-5 pb-5 py-10 space-y-5 -mt-20 md:mt-0 md:w-1/2">
      <FaqComp />
      <Questions
        ques={"How many team members can I invite?"}
        ans={
          "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
        }
      />
      <Questions
        ques={"What is the maximum file upload size?"}
        ans={
          "No more than 2GB. All files in your account must fit your allotted storage space."
        }
      />
      <Questions
        ques={"How do I reset my password?"}
        ans={
          "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
        }
      />
      <Questions
        ques={"Can I cancel my subscription?"}
        ans={
          "Yes! Send us a message and we'll process your request no questions asked."
        }
      />
      <Questions
        ques={"Do you provide additional support?"}
        ans={
          "Chat and email support is available 24/7. Phone lines are open during normal business hours."
        }
      />
    </div>
  );
}

function FaqComp() {
  return (
    <>
      <h1 className="text-3xl font-semibold text-center">FAQ</h1>
    </>
  );
}

function Questions({ ques, ans }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="flex flex-col px-5">
      <div className="flex justify-between">
        <h2
          className={`text-md transition-all ease-linear duration-400 ${
            isExpanded ? "text-black font-bold" : "text-very_dark_grayish_blue"
          }`}
        >
          {ques}
        </h2>
        <button onClick={() => setIsExpanded(!isExpanded)}>
          <img
            src="./icon-arrow-down.svg"
            alt="arrow up"
            className={`w-5 ml-auto inline-block ${
              isExpanded ? "rotate-180" : ""
            } transition-all ease-in-out duration-400`}
          />
        </button>
      </div>
      <div
        className={`grid transition-all ease-in-out duration-400 ${
          isExpanded
            ? "template-rows-1 opacity-100"
            : "template-rows-0 opacity-0"
        }}`}
      >
        <p className={`text-sm mt-3 text-dark_grayish_blue overflow-hidden`}>
          {ans}
        </p>
      </div>
      <hr className="mt-5" />
    </div>
  );
}
export default App;
