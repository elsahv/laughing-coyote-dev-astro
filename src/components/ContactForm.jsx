import React from "react";

const ContactForm = () => {
  return (
    <div>
      <form action="" class="mt-5 text-md flex flex-col space-y-2">
        <input
          type="text"
          placeholder="enter name"
          class="bg-parchment pl-2 h-10 w-3/4 border-black border-b-2"
        />
        <input
          type="text"
          placeholder="enter email"
          class="bg-parchment pl-2 h-10 w-3/4 border-black border-b-2"
        />
      </form>

      <div id="submit-btn-wrapper" class="mt-5 bg-">
        <button
          id="submit-btn"
          class="bg-teal text-parchment rounded-md border border-orange py-1 px-2 text-md"
        >
          send
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
