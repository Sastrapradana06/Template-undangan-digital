export default function Button({ icons, teks }) {
  return (
    <button className="px-5 py-2 flex justify-center items-center gap-1 bg-orange-950 rounded-xl cursor-pointer hover:shadow-lg hover:bg-gray-800 mt-3 text-[.7rem]">
      {icons}
      {teks}
    </button>
  );
}
