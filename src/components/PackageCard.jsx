const PackageCard = ({
  title,
  desc,
  pkgNo,
  item1,
  item2,
  item3,
  item4,
  item5,
}) => {
  return (
    <div
      id="package-card-container"
      className="bg-papaya text-teal sq-styles-teal 2xl:px-[35px] px-3 py-5 xl:mt-0 mt-[35px]"
    >
      <div
        id="package-card-grid"
        className="grid 2xl:grid-cols-2 px-2 my-4  bg-parchment rounded-2xl"
      >
        {/*//TODO v */}
        <div id="sq1" class="bg-test1 flex items-start">
          <img
            src="https://images.pexels.com/photos/10986252/pexels-photo-10986252.jpeg"
            alt=""
            class="sq-styles-teal mr-4"
          />
        </div>
        <div id="-sq2" className="bg-">
          <div id="content-container" class="ml-2 2xl:pl-5 2xl:pr-3">
            <span class="text-xl opacity-80">package {pkgNo}</span>
            <h3 class="text-4xl font-extrabold pb-1">{title}</h3>
            <p class="sq-styles bg-teal text-parchment mt-5 p-3">{desc}</p>
            <ul class="lowercase font-semibold list-disc space-y-3 pb-5 pl-3 pt-5 ">
              <li>{item1}</li>
              <li>{item2}</li>
              <li>{item3}</li>
              <li>{item4}</li>
              <li>{item5}</li>
            </ul>
          </div>
        </div>
        {/* //! v */}
        <div id="sq3" class="bg- pb-5 px-3">
          <img
            src="https://images.pexels.com/photos/304664/pexels-photo-304664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            class="sq-styles -5"
          />
        </div>
        <div id="sq4" class="bg- pt-5 px-4">
          <img
            src="https://dl.dropboxusercontent.com/scl/fi/r2memu9vr71tw03oe57kz/IMG_0300.jpg?rlkey=k9upvwvx4vudmyv88f8srhxlu&st=g5s7cqo5&dl=0"
            alt=""
            class="sq-styles"
          />
        </div>

        {/*//TODO ^ */}
      </div>
    </div>
  );
};

export default PackageCard;
