import { SlCalender } from "react-icons/sl";
import { FaMapPin } from "react-icons/fa";
import { IoWallet } from "react-icons/io5";
import Button from "@/components/button";
import { IoIosSend } from "react-icons/io";
export default function Page() {
  const comments = [
    {
      name: "Ahmad",
      text: "Selamat menempuh hidup baru Husni & Indah! Semoga bahagia selalu.",
    },
    {
      name: "Rina",
      text: "Barakallah! Semoga pernikahan kalian penuh cinta dan keberkahan.",
    },
    {
      name: "Dewi",
      text: "Selamat menikah Husni & Indah! Semoga langgeng dan harmonis sampai jannah.",
    },
    {
      name: "Budi",
      text: "Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Aamiin.",
    },
    {
      name: "Fitri",
      text: "Ikut berbahagia! Semoga cinta dan kasih sayang kalian selalu tumbuh.",
    },
    {
      name: "Joko",
      text: "Selamat untuk Husni & Indah! Semoga selalu diberikan keberkahan dan kebahagiaan.",
    },
    {
      name: "Sari",
      text: "Selamat menempuh hidup baru! Bahagia selalu dan semoga dilimpahi rezeki yang berkah.",
    },
    {
      name: "Yusuf",
      text: "Barakallahulakuma Husni & Indah. Semoga selalu bersama dalam suka dan duka.",
    },
    {
      name: "Lina",
      text: "Semoga perjalanan cinta kalian selalu dipenuhi kebahagiaan dan keberkahan.",
    },
  ];

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
        <div className="w-[90%] h-[120px] border rounded-[20px] flex flex-col justify-center items-center gap-3 bg-gray-800 text-[.9rem] text-white">
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
      <section className="w-full min-h-[100vh] border bg-orange-100 text-black p-3">
        <div className="w-full h-max flex items-center justify-between mt-3">
          <span className="border  w-[45%] inline-block "></span>
          <h1 className="text-[1.7rem] playfair text-amber-900">
            OUR LOVE STORY
          </h1>
        </div>
        <div className="mt-5">
          <div className="w-[80%] h-[330px] m-auto border-2 border-amber-950 rounded-tl-full rounded-tr-full p-1 ">
            <div className="w-full h-full m-auto border-2 border-orange-800 rounded-tl-full rounded-tr-full p-2 bg-[url('/pw5.jpeg')] bg-cover bg-[center_20%] bg-no-repeat"></div>
          </div>
        </div>
        <div className="w-full h-max m-auto mt-6 text-center flex flex-col gap-2">
          <h1 className="text-[1.7rem] playfair text-amber-900">
            JANUARI - 2019
          </h1>
          <p className="text-[.8rem] text-gray-500">
            Kami pertama kali bertemu di acara kampus. Meski singkat, pertemuan
            itu menjadi awal kedekatan kami yang terus tumbuh seiring waktu.
          </p>
          <h1 className="text-[1.7rem] playfair text-amber-900">
            APRIL – 2022
          </h1>
          <p className="text-[.8rem] text-gray-500">
            Kami mulai berpacaran dan membangun hubungan yang kuat. Saling
            mendukung, kami tumbuh bersama melewati berbagai tantangan.
          </p>
          <h1 className="text-[1.7rem] playfair text-amber-900">
            MARET - 2025
          </h1>
          <p className="text-[.8rem] text-gray-500">
            Kami memutuskan untuk menikah. Dengan cinta dan keyakinan, kami siap
            melangkah ke masa depan bersama, saling menguatkan dalam setiap
            langkah.
          </p>
        </div>
      </section>
      <section className="w-full min-h-[100vh] bg-[url('/pw4.jpeg')] bg-cover bg-center bg-no-repeat py-3 px-2 flex justify-center items-center">
        <div className="w-full h-max border-2 border-neutral-300 p-1 rounded-xl">
          <div className="w-full h-max  border-2 border-neutral-300 p-1 rounded-xl bg-[#e4dac7d0]  py-8 text-center flex flex-col justify-center items-center gap-2">
            <h1 className="text-[1.7rem] playfair text-orange-950">
              - JADWAL PERNIKAHAN -
            </h1>
            <div className="w-[90%] m-auto h-max pb-3 border-b-2 border-neutral-900 text-center">
              <h1 className="text-[1.3rem] cinzel-bold text-orange-950">
                AKAD NIKAH
              </h1>
              <div className="mt-3 ">
                <p className="capitalize text-orange-950">
                  Sabtu, 12 Juli 2025
                </p>
                <p className="text-orange-950">08.00 - 11.00 WIB</p>
                <p className="text-orange-950 playfair text-[1.2rem] uppercase">
                  MASJID RAYA ACEH SEPAKAT
                </p>
                <p className="text-[.8rem] text-gray-600">
                  Jl Petisah Tengah, Kec. Medan Petisah, Kota Medan
                </p>
              </div>
            </div>
            <div className="w-[90%] m-auto h-max pb-3 border-t-2 border-neutral-900 text-center">
              <h1 className="text-[1.3rem] cinzel-bold text-orange-950 mt-3">
                RESEPSI
              </h1>
              <div className="mt-3 ">
                <p className="capitalize text-orange-950">
                  Minggu, 13 Juli 2025
                </p>
                <p className="text-orange-950">10.00 - 22.00 WIB</p>
                <p className="text-orange-950 playfair text-[1.2rem] uppercase">
                  Grand Central Premier Hotel
                </p>
                <p className="text-[.8rem] text-gray-600">
                  Jl. Putri Merak Jingga No.3A, Kesawan, Kec. Medan Baru, Kota
                  Medan
                </p>
                <div className="w-full h-max flex justify-center items-center gap-3 flex-col mt-2 mb-4">
                  <a
                    href="https://maps.app.goo.gl/Ldhq9s3jswjnY3X1A"
                    target="_blank"
                  >
                    <Button
                      icons={<SlCalender size={15} />}
                      teks={
                        <p className="text-white text-[.8rem]">
                          Lokasi Resepsi
                        </p>
                      }
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full min-h-[100vh] bg-[url('/bg-1.jpeg')] bg-cover bg-center bg-no-repeat flex">
        <div className="w-[40%] h-[100vh] flex justify-center text-center items-center flex-col  p-2">
          <h1 className="text-[1.7rem] playfair text-red-900">Our Gallery</h1>
          <p className="text-black text-[.7rem]">
            "Dalam pelukanmu, aku menemukan rumahku yang sejuk".
          </p>
          <p className="text-black text-[.8rem] satisfy mt-2">
            - Husni & Indah -
          </p>
        </div>
        <div className="w-[60%] h-[100vh]   p-2">
          <div className="flex flex-col justify-center items-center gap-2">
            <img
              src="/pw2.jpeg"
              alt="Gambar 1"
              className="w-30 h-46 object-cover rounded-2xl shadow-xl rotate-3"
            />

            <img
              src="/pw3.jpeg"
              alt="Gambar 2"
              className="w-30 h-46 object-cover rounded-2xl shadow-xl -rotate-6"
            />

            <img
              src="/pw5.jpeg"
              alt="Gambar 3"
              className="w-30 h-46 object-cover rounded-2xl shadow-xl rotate-12"
            />
          </div>
        </div>
      </section>
      <section className="w-full h-[80vh] bg-orange-100 py-7 px-3">
        <div className="w-full h-full border border-orange-950 rounded-xl p-1">
          <div className="w-full h-full border border-orange-950 rounded-xl bg-amber-50 flex flex-col justify-center items-center px-3">
            <img
              src="/pw4.jpeg"
              alt="image"
              className="w-56 h-60 object-cover rounded-2xl shadow-xl"
            />
            <h1 className="text-orange-950 text-[1.5rem] playfair mt-2">
              - WEDDING GIFT -
            </h1>
            <p className="text-gray-600 text-[.7rem] text-center">
              Kehadiran anda merupakan hadiah terindah, Namun apabila hendak
              memberikan tanda kasih kepada kami, dapat melalui fitur dibawah
              ini
            </p>
            <Button
              icons={<IoWallet className="text-white" size={13} />}
              teks="Amplop Digital"
            />
          </div>
        </div>
      </section>
      <section className="w-full h-max bg-[url('/bg-1.jpeg')] bg-cover bg-center bg-no-repeat py-5 px-3 ">
        <h1 className="text-[1.7rem] playfair text-red-900 text-center">
          - SEND YOU WISHES -
        </h1>
        <p className="text-gray-600 text-[.7rem] text-center mt-2">
          Kepada Bapak/Ibu/Saudara/i yang ingin memberikan doa untuk kami dapat
          dituliskan dibawah ini:{" "}
        </p>
        <form
          action=""
          className="w-full h-max rounded-xl border-2 border-orange-900 mt-4 bg-amber-50  py-5 px-4"
        >
          <div className="w-max flex flex-col ">
            <label
              htmlFor="nama"
              className="text-black text-[.8rem] capitalize"
            >
              Nama tamu:
            </label>
            <input
              type="text"
              name="nama"
              id="nama"
              placeholder="Masukkan Nama"
              className="w-full h-8 rounded-md border border-orange-900 mt-2 py-1 px-2 text-black bg-white"
            />
          </div>
          <div className="w-max flex flex-col mt-4">
            <label
              htmlFor="ucapan"
              className="text-black text-[.8rem] capitalize"
            >
              Ucapan & Doa:
            </label>
            <textarea
              name="ucapan"
              id="ucapan"
              cols="30"
              rows="10"
              placeholder="Masukkan Ucapan & Doa"
              className="w-[330px] h-28 rounded-md border border-orange-900 mt-2 py-1 px-2 text-black bg-white"
            ></textarea>
          </div>
          <Button
            icons={<IoIosSend className="text-white" size={13} />}
            teks="Kirim"
            type="submit"
          />
        </form>
        <div className="w-96 max-w-full h-64  rounded-2xl shadow-lg p-4 bg-amber-50 overflow-y-auto space-y-4 mt-5 border-2 border-orange-900">
          {comments.map((comment, index) => (
            <div key={index} className="border-b pb-2 last:border-none">
              <p className="font-semibold text-gray-800">~ {comment.name}</p>
              <p className="text-gray-600 text-[.8rem]">{comment.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full h-[100vh] bg-[url('/pw8.jpeg')] bg-cover bg-center bg-no-repeat relative">
        <div className="w-full h-[250px] absolute bottom-0 left-0  z-50 text-center px-3">
          <p className="text-orange-100 text-[.8rem] mt-2">
            Menjadi sebuah kebehagiaan bagi kami apabila Bapak/Ibu/Saudara/i
            berkenan hadir dalam hari bahagia kami. Terimah kasih atas segala
            ucapan, doa, dan perhartian yang diberikan.
          </p>
          <p className="text-orange-100 text-[.8rem]">
            Sampai jumpa di acara pernikahan kami
          </p>
          <h1 className="text-white text-[1.7rem] cinzel-bold mt-3">
            Husni & Indah
          </h1>
          <p className="text-white text-[.7rem]">beserta keluarga</p>
          <p className="text-white text-[.7rem] mt-10">
            All right reserved by{" "}
            <a
              href="https://klima-tech.vercel.app/"
              target="_blank"
              className="text-sky-400"
            >
              klimatech
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
