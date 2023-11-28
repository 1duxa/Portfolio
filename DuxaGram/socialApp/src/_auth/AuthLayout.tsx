import { Outlet, Navigate } from "react-router-dom";
function AuthLayout() {
  const isAuthed = false;

  return (
    <>
      {isAuthed ? (
        <Navigate to="/" />
      ) : (
        <>
          <section
            className="flex flex-1 justify-center
          items-center flex-col py-10"
          >
            <Outlet />
          </section>

          <img
            src="/assets/images/side-img.svg"
            alt="logo"
            className="hidden xl:block h-screen first-letter
          w-1/2 object-cover bg-no-repeat"
          />
        </>
      )}
    </>
  );
}

export default AuthLayout;
