export default function FilterFaq({ faqItems, filterItems, activeCategory }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 -mt-16 justify-center">
      {faqItems.map((cat) => {
        const Icon = cat.icon;
        const isActive = activeCategory === cat.name;
        return (
          <button
            type="button"
            key={cat.name}
            onClick={() => filterItems(cat.name)}
            aria-pressed={isActive}
            className={`flex relative flex-col cursor-pointer justify-between py-4 px-2 sm:py-6 sm:px-8 md:py-12 md:px-20 items-center gap-2 rounded-3xl transition duration-500 ${
              isActive
                ? "text-black bg-white shadow-2xl shadow-[#0c1d13]"
                : "text-zinc-400 bg-zinc-200 shadow-2xl"
            }`}
          >
            <div
              aria-hidden="true"
              className={`absolute h-8 w-8 md:w-10 md:h-10 transition-colors duration-500 bg-white rounded-md rotate-45 -bottom-3 lg:-bottom-4 ${
                isActive ? "block" : "hidden"
              }`}
            />
            <Icon className={`w-8 h-8 md:w-12 lg:h-12 ${isActive ? "icon-faq" : ""}`} />
            <span className="tracking-widest text-xl font-bold select-none">{cat.name}</span>
          </button>
        );
      })}
    </div>
  );
}
