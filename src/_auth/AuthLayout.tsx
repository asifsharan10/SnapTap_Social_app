import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
    const  isAuthenticated  = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>

          <img
            src="/assets/images/download1.jpg"
            alt="logo"
            className="h-1200 w-675 object-cover bg-no-repeat"
          />
        </>  
      )}

    </>
  )
}

export default AuthLayout