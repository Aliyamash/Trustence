export default function FormDiscovery() {
    return (
      <div className="relative max-w-5xl mx-auto pb-44 space-y-16">
  
       
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#fff8ee] via-white to-[#fff8ee] opacity-60"></div>
  
   
        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-center text-[#1C422B]">Discovery Session Steps</h2>
          <div className="grid md:grid-cols-3 gap-6">
  
            <div className="rounded-2xl shadow-md p-6 hover:scale-105 transition-transform border border-[#1C422B] bg-white space-y-2">
              <div className="text-4xl">📝</div>
              <h3 className="text-xl font-semibold text-[#1C422B]">1. Submit the Form</h3>
              <p className="text-sm text-muted-foreground">
                Fill out the form below to give us initial info about your project.
              </p>
            </div>
  
            
            <div className="rounded-2xl shadow-md p-6 hover:scale-105 transition-transform border border-[#1C422B] bg-white space-y-2">
              <div className="text-4xl">🎥</div>
              <h3 className="text-xl font-semibold text-[#1C422B]">2. Video Call</h3>
              <p className="text-sm text-muted-foreground">
                We'll have a 30-minute call to dive deeper into your goals.
              </p>
            </div>
  
           
            <div className="rounded-2xl shadow-md p-6 hover:scale-105 transition-transform border border-[#1C422B] bg-white space-y-2">
              <div className="text-4xl">📄</div>
              <h3 className="text-xl font-semibold text-[#1C422B]">3. Get Your Proposal</h3>
              <p className="text-sm text-muted-foreground">
                You'll receive a tailored proposal and project timeline.
              </p>
            </div>
  
          </div>
        </section>
  
       
        <section className="space-y-6">
          <h2 className="text-4xl font-bold text-center text-[#1C422B]">Book Your Free Discovery Session</h2>
          <form className="space-y-4 max-w-xl mx-auto bg-[#fff8ee] p-8 rounded-2xl shadow-md">
            <input type="text" placeholder="Your Full Name" required className="w-full p-3 rounded-md border border-gray-300" />
            <input type="email" placeholder="Email Address" required className="w-full p-3 rounded-md border border-gray-300" />
            <input type="tel" placeholder="Phone Number (optional)" className="w-full p-3 rounded-md border border-gray-300" />
            <textarea placeholder="Tell us a bit about your project..." rows="4" className="w-full p-3 rounded-md border border-gray-300"></textarea>
            <button type="submit" className="w-full text-lg py-3 rounded-2xl bg-[#1C422B] hover:bg-[#173520] text-white">Book Session</button>
          </form>
        </section>
  
      </div>
    );
  }
  