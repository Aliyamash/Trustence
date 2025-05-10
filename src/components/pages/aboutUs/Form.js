export default function Form() {
  return (
    <>
      <div className="text-white">
        <form action="">
          <div className="mb-8">
            <label className="block text-sm -ml-1 mb-2">Full name</label>
            <input
              type="text"
              name="name"
              className="w-full lg:w-[30rem] bg-[#1a221d] rounded-lg px-4 py-2"
            />
          </div>
          <div className="mb-8">
            <label className="block text-sm -ml-1 mb-2">Email</label>
            <input
              type="email"
              name="email"
              className="w-full lg:w-[30rem] bg-[#1a221d] rounded-lg px-4 py-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm -ml-1 mb-2">Inquiry</label>
            <textarea
              type="text"
              name="inquiry"
              placeholder="Enter your message.."
              className="w-full lg:w-[30rem] text-sm bg-[#1a221d] rounded-lg p-3"
              rows={10}
            />
          </div>

          <label className="custom-checkbox text-sm">
            <input type="checkbox" required />
            <span className="checkmark"></span>
            I agree to the Terms
          </label>
          <button className="text-sm block my-8 transition duration-500 service-container bg-btn w-fit px-8 py-2 rounded-xl items-center" type="submit">Send</button>
        </form>
      </div>
    </>
  );
}
