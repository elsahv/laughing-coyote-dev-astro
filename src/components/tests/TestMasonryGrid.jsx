const TestMasonryGrid = () => {
  return (
    <>
      <div id="grid-wrapper" className="flex justify- bg-">
        <div
          id="grid"
          className="grid 2xl:grid-cols-3 grid-cols-1 gap-5 p-0 xl:mb-50 lg:m-32 md:m-16"
        >
          <div
            id="sq1"
            className="sq-styles 2xl:col-span-1 col-span-2 2xl:row-span-3  rounded-xl bg-gradient-to-r from-green-500 to-green-700"
          >
            green-sq1
            <p>
              <b>Hovey Roofing Ex</b>
            </p>
          </div>

          <div
            id="sq2"
            className="sq-styles col-span-1 2xl:row-span- rounded-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
          >
            pink-indigo-sq2
            <p>
              <b>Main focus- astro templates. </b>
            </p>
          </div>
          <div
            sq="3"
            className="sq-styles col-span-1 2xl:row-span-2 row-span-1 rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
          >
            3 green-blue-purple-rtg3- <b>(site 1) description</b>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              odio nam eius nemo minus rem voluptate quaerat ducimus, odit
              fugiat molestiae dolore itaque inventore. Deserunt, quia
              necessitatibus! Consectetur, quod sunt? rem voluptate quaerat
              ducimus, odit fugiat molestiae dolore itaque inventore. Deserunt,
              quia necessitatibus! Consectetur, quod sunt?rem voluptate quaerat
              ducimus, odit fugiat molestiae dolore itaque inventore. Deserunt,
              quia necessitatibus! Consectetur, quod sunt?
            </p>
          </div>
          <div
            id="sq4"
            className="sq-styles col-span-2 row-span-1 rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
          >
            red-yellow-sq4
            <p>
              <b>Laughing Coyote Templates-</b>
              orem ipsum dolor sit amet consectetur adipisicing elit. Vero totam
              voluptatem, architecto mollitia temporibus hic incidunt,
              dignissimos distinctio corrupti nihil eligendi in molestiae facere
              ipsa quos reprehenderit cum earum quasi!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              totam voluptatem, architecto mollitia temporibus hic incidunt,
              dignissimos distinctio corrupti nihil eligendi in molestiae facere
              ipsa quos reprehenderit cum earum quasi!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              totam voluptatem, architecto mollitia temporibus hic incidunt,
              dignissimos distinctio corrupti nihil eligendi in molestiae facere
              ipsa quos reprehenderit cum earum quasi!
            </p>
          </div>
          <div
            id="sq5"
            className="sq-styles  col-span-2 row-span-1 rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-600"
          >
            x red-yellow-rtg5- <b>(site 2) description</b>
            <p>
              5Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              nobis ea magni quasi, corporis distinctio labore cumque totam
              voluptate officia, non aspernatur et accusamus. Rerum odio itaque
              perferendis facere molestiae? sum dolor sit amet consectetur
              adipisicing elit. Cum nobis ea magni quasi, corporis distinctio
              labore cumque totam voluptate officia, non asperna
            </p>
            <p>
              5Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              itaque libero! Tempora dolore totam beatae nesciunt. Quam, harum,
              mollitia odio esse, voluptates similique nesciunt aspernatur iure
              dolorum laboriosam dolor. Nobis?
            </p>
          </div>
          <div
            id="6"
            className="sq-styles col-span-1 row-span-1 rounded-xl bg-gradient-to-r bg-white"
          >
            pink-sq6- <b>CTA</b>
          </div>
          {/* <div className="col-span-2 row-span-1 rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-600">
            red-yellow-rtg7- (site 3) description
          </div>
          <div className="col-span-1 row-span-1 rounded-xl bg-gradient-to-r from-green-500 to-green-700">
            green-sq7
          </div> */}

          {/* <div className="col-span-1 row-span-1 rounded-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
            pink-indigo-sq8
          </div>
          <div className="col-span-3 row-span-1 rounded-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
            pink-indigo-sq9
          </div> */}
        </div>
      </div>
    </>
  );
};

export default TestMasonryGrid;
