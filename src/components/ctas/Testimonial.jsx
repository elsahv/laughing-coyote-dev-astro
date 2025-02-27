const Testimonial = () => {
  return (
    <div id="testimonial-wrapper" class="m-[250px] ">
      <div id="" class=" flex">
        <div id="sq1" class="bg- flex justify-end items-center bg- p-5">
          <p className="w-3/4 font-medium text-lg">
            "client side, site-Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Soluta sit laboriosam deleniti, consectetur
            obcaecati id. Provident illo veniam pariatur beatae nulla minima
            sed?"
          </p>
        </div>
        <div
          id="sq2"
          class="bg- flex justify-start items-center text-onyx font-light "
        >
          <img
            src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            class="w-1/2 mr-5 border border-black rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
