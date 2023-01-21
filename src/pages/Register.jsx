import UserImage from "../assets/user.jpg"
import Logo from "../assets/Logo.png"
import { RegisterForm } from "../components"

const Register = () => {
  return (
    <>
      <section className=" container mx-auto ">
        <div className="flex ">
          {/* Right */}
          <aside className=" relative my-16 hidden flex-col justify-between space-y-10 overflow-hidden rounded-2xl bg-primary p-10 shadow-2xl md:w-1/2 lg:flex xl:w-1/3 ">
            <h1 className="text-2xl font-extrabold uppercase tracking-widest text-white ">
              Indago.
            </h1>
            <div className=" space-y-6 ">
              <h3 className=" text-3xl font-medium leading-[3rem] text-white xl:text-5xl xl:leading-[4rem] ">
                Start your journey with us.
              </h3>
              <h4 className=" text-xl text-gray-300 ">
                Track your job search progress with Indago - Never miss an
                update on your job application status.{" "}
              </h4>
            </div>
            <div className=" py10 flex flex-col justify-between space-y-12 rounded-xl bg-secondary-800 p-4  ">
              <p className="text-gray-300">
                Indago is a great web app for job seekers. It helps to keep
                track of job applications and their statuses. Highly recommended
                for anyone actively searching for a job.
              </p>
              <div className="flex items-center space-x-6 ">
                <img
                  src={UserImage}
                  alt=""
                  className="h-14 w-14 rounded-lg object-cover"
                />
                <div className=" space-y2 ">
                  <h4 className="text-lg text-white "> Sara Williams </h4>
                  <p className="text-gray-400">Software Engineer</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-12 -right-10 h-28 w-28 rounded-full bg-secondary-900 opacity-40 "></div>
          </aside>
          {/* Left */}
          <article className=" my-10 flex  w-full flex-col items-center justify-between space-y-12 md:my-16   ">
            <div className=" flex flex-col items-center space-y-4 ">
              <img
                src={Logo}
                alt=""
                className=" w-20 object-cover mix-blend-multiply "
              />
              <h4 className="text-4xl font-medium">Hello Again!</h4>
            </div>

            <RegisterForm />
          </article>
        </div>
      </section>
    </>
  )
}

export default Register
