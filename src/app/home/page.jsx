import { SlCalender } from "react-icons/sl";

export default function Page() {
  return (
    <main>
      <section className="w-full min-h-[100vh]  bg-[url('/pw7.jpeg')] bg-cover bg-center bg-no-repeat flex justify-center items-center flex-col gap-3">
        <div className="w-full h-max mt-24">
          <h1
            className="text-center playfair
 text-[2.3rem] text-orange-100"
          >
            Husni & Indah
          </h1>
        </div>
        <div className="w-[90%] h-[120px] border rounded-[20px] flex flex-col justify-center items-center gap-3 bg-gray-800 text-[.9rem]">
          <p className="text-[1.2rem] dancing">Menuju Hari Bahagia</p>
          <div className="flex justify-center items-center gap-6 text-[.8rem]">
            <div className="flex flex-col justify-center items-center">
              <p className="">20</p>
              <p className="-mt-1">Hari</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="">5</p>
              <p className="-mt-1">Jam</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="">45</p>
              <p className="-mt-1">Menit</p>
            </div>
          </div>
          <div className="px-3 py-1 bg-white rounded-[5px] text-black flex items-center">
            <SlCalender size={15} />
            <p className="ml-2 text-[.7rem] ">Save The Date</p>
          </div>
        </div>
      </section>
      <section className="w-full min-h-[100vh] border bg-orange-100 text-black">
        <div className="mt-10 text-center w-[90%] m-auto">
          <h1 className="text-[1.2rem] dancing">
            ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ
          </h1>
          <p className="text-[.8rem] mt-4 text-gray-600">
            Dengan memohon rahmat dan ridho Allah SWT, kami mengundang
            Bapak/Ibu/Saudara/i unutk berkenengan hadir dalam pernikahan kami.
          </p>
        </div>
        <div className="relative w-full h-[350px] mt-7 border overflow-hidden">
          <div
            className="absolute inset-0 bg-[url('/husni.jpg')] bg-cover bg-[center_20%] bg-no-repeat"
            style={{ imageRendering: "auto" }}
          ></div>

          <div className="absolute inset-0 bg-[#A0522D]/20"></div>

          <div className="absolute z-10 text-white p-4 bottom-0">
            <>
              <h1 className="text-[1.5rem] font-bold sacramento -mb-3">
                Husni
              </h1>
              <span className="border  w-[130px] inline-block "></span>
            </>
            <div className="text-[.8rem] mt-1">
              <h1 className="text-[1.3rem] font-bold playfair text-orange-200">
                Husni Harahap S.Pd
              </h1>
              <p className="">Putra pertama dari</p>
              <p className="">Bapak H. Hasyim & Ibu Siti Nurul Hidayah</p>
            </div>
          </div>
        </div>
        <div className="relative w-full h-[350px] mt-0 border overflow-hidden">
          <div
            className="absolute inset-0 bg-[url('/indah.jpg')] bg-cover bg-[center_20%] bg-no-repeat"
            style={{ imageRendering: "auto" }}
          ></div>

          <div className="absolute inset-0 bg-[#A0522D]/20"></div>

          <div className="absolute z-10 text-white p-4 bottom-0 right-0 text-right">
            <>
              <h1 className="text-[1.5rem] font-bold sacramento -mb-3">
                Indah
              </h1>
              <span className="border  w-[130px] inline-block "></span>
            </>
            <div className="text-[.8rem] mt-1">
              <h1 className="text-[1.3rem] font-bold playfair text-orange-200">
                Indah Permata S.Keb
              </h1>
              <p className="">Putri kedua dari</p>
              <p className="">Bapak Daniella Putranto & Ibu Eka Yuni</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
