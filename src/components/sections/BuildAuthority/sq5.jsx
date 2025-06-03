const Sq5 = () => {
  return (
    // <div
    //   id="sq5"
    //   className="sq-styles bg-test2 2xl:col-span-2 col-span-1 row-span-1 rounded-lg flex"
    // >
    <div id="testimonial-container" class="bg- flex lg:flex-row flex-col -5">
      <div
        id="left-side"
        class="bg- flex md:justify- justify-center items-center"
      >
        <p className="pr-2 font-medium md:text-lg text-md ">
          "Most web design services focus on tech, speed, or business
          optimization. Few lean into artisanal design, emotional storytelling,
          and cozy aesthetics the way this concept (lc) does. "
        </p>
      </div>
      <div
        id="right-side"
        class="mr-5 flex md:justify-start justify-center items-center font-light"
      >
        <img
          src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          class="sq-styles  rounded-lg mt- mb-5"
        />
      </div>
    </div>
    // </div>
  );
};

export default Sq5;
