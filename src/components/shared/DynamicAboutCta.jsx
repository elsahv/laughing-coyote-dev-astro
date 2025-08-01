function DynamicAboutCTA(props) {
  return props.isLoggedIn ? (
    <div id="BannerTitle-section" className="bg-test flex justify-start bg-">
      <h2 className="2xl:text-4xl md:text-3xl text-2xl md:px-5 px-1 pt-2 pl-2 font-bold ">
        {props.username}
      </h2>
    </div>
  ) : (
    <img
      src="https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt=""
      className="sq-styles"
    />
  );
}

export default DynamicAboutCTA;
