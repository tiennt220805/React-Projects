const NavBar = () => {
  return (
    <div className="my-2 flex h-[60px] items-center justify-center gap-1 rounded-lg border bg-white">
      <img
        className="h-[30px]"
        src="./images/logos_firebase.svg"
        alt="logo-firebase"
      />
      <h1 className="text-xl font-bold">Firebase Contact App</h1>
    </div>
  );
};

export default NavBar;
