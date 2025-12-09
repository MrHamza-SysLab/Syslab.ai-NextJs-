

export default function FullWidthButton() {
  return (
    <button
      className="w-full flex items-center justify-between bg-white/20  text-white hover:scale-105 font-semibold px-5 py-3 rounded-xl transition-all duration-200"
    >
      <span>contact@syslab.ai</span>
      <span className="flex items-center gap-3">
        <img src="/footer/icon.svg" alt="" width={20} height={20} />
      </span>
    </button>
  );
}
