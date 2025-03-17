function DynamicAboutCTA(props) {
  return props.isLoggedIn ? (
    <div id="BannerTitle-section" class="bg-test flex justify-center bg-">
      <h2 class="2xl:text-5xl text-4xl px-5 pt-2 font-bold underline">
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
