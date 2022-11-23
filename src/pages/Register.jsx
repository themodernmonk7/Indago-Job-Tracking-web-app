import UserImage from "../assets/user.png"
import Logo from "../assets/Logo.png"
import { RegisterForm } from "../components"

const Register = () => {
  return (
    <>
      <section className=" container mx-auto ">
        <div className="flex ">
          {/* Right */}
          <aside className=" hidden bg-primary md:w-1/2 xl:w-1/3 rounded-2xl p-10 space-y-10 my-16 lg:flex flex-col justify-between relative overflow-hidden shadow-2xl ">
            <h1 className="text-2xl text-white uppercase font-bold tracking-wider ">
              Indago.
            </h1>
            <div className=" space-y-6 ">
              <h3 className=" text-3xl xl:text-5xl text-white font-medium leading-[3rem] xl:leading-[4rem] ">
                Start your journey with us.
              </h3>
              <h4 className=" text-xl text-gray-300 ">
                Discover the world's best community of freelancers and business
                owners.{" "}
              </h4>
            </div>
            <div className=" bg-indigo-700 rounded-xl flex flex-col justify-between p-4 py10 space-y-12  ">
              <p className="text-gray-300">
                Simply unbelievable! I am really satisfied with my projects and
                business. This is Absolutely wonderful!
              </p>
              <div className="flex items-center space-x-6 ">
                <img
                  src={UserImage}
                  alt=""
                  className="w-14 h-14 object-cover rounded-lg"
                />
                <div className=" space-y2 ">
                  <h4 className="text-white text-lg "> Sara Williams </h4>
                  <p className="text-gray-400">Freelancer</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-12 -right-10  bg-blue-900 w-28 h-28 rounded-full opacity-40 "></div>
          </aside>
          {/* Left */}
          <article className="my-16  w-full flex flex-col items-center justify-between space-y-12   ">
            <div className=" flex flex-col items-center space-y-4 ">
              <img
                src={Logo}
                alt=""
                className=" w-24 h-16 object-cover mix-blend-multiply "
              />
              <h4 className="text-4xl font-medium">Hello Again!</h4>
            </div>

            <RegisterForm />

            <p className=" text-lg ">
              Already a member?{" "}
              <button className="text-blue-700 font-medium ">Login In</button>
            </p>
          </article>
        </div>
      </section>
    </>
  )
}

export default Register
