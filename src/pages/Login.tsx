import "./Login.css";
import COVER_IMAGE from "../assets/acc.jpeg";

const Login = () => {
  return (
    <div className="w-full h-screem flex items-start">
      <div className="relative w-1/2 h-full flex flex-col">
        <div className="absolute top-[15%] left-[10%] flex flex-col">
          <h1 className="text-4xl text-white font-bold my-4">
            Turn Your Ideas into reality
          </h1>
          <p className="text-xl text-white font-normal">
            Start for free and get attractive offers from the community
          </p>
        </div>
        <img src={COVER_IMAGE} className="w-full h-dvh object-cover" />
      </div>
      <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-30">
        <h1 className="text-xl text-[#060606] font-semibold mb-6">
          Interactive Brand
        </h1>

        <div className="w-full flex flex-col max-w-[500px]">
          <div className="w-full flex flex-col mb-2 ">
            <h3 className="text-3xl font-semibold mb-2">Login</h3>
            <p className="text-base mb-2">
              Welcome Back Please enter your details
            </p>
          </div>
          <div className="w-full flex flex-col">
            <input
              type="email"
              placeholder="Email"
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none foucs:outline"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none foucs:outline"
            />
          </div>

          <div className="w-full flex items-center justify-between">
            <div className="w-full flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <p className="text-sm">Remeber Me</p>
            </div>
            <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">
              Forgot Passowrd
            </p>
          </div>

          <div className="w-full flex flex-col my-4">
            <button className="w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center">
              Log in
            </button>
            <button className="w-full text-[#060606] my-2 font-semibold bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center">
              Register
            </button>
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal text-[#060606]">
            Dont have a account
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
