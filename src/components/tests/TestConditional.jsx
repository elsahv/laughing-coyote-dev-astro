function TestConditional(props) {
  return props.isLoggedIn ? (
    <h2>Welcome {props.username}</h2>
  ) : (
    <img
      src="https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt=""
    />
  );
}
export default TestConditional;
