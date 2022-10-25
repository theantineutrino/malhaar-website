import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { PDFDocument, StandardFont } from "pdf-lib";

import Header from "../components/Header";
import Dropdown from "../ux/Dropdown";
import Footer from "../ux/Footer";

function Tickets() {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [data, setData] = useState({ name: "", email: "", phone: "" });
  const formRef = useRef(null);
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxmEtC5Gcjk1HmXB5tg2sWID20V8YDdwPLVtqr14hGjUx_43BAt9phItcSz_AhO7Z2-Iw/exec";

  async function modifyPDF() {
    const formUrl = await fetch(
      "https://pdfhost.io/edit?doc=07b359f0-1b69-4d53-b429-f72e62b29d04"
    );
    const formPdfBytes = await fetch(formUrl).then((res) => res.arrayBuffer());

    const document = await PDFDocument.load(formPdfBytes);

    const courierBoldFont = await document.embedFont(StandardFont.Courier);
    const firstPage = document.getPage(0);

    firstPage.moveTo(0, 0);
    firstPage.drawText(data.name, {
      font: courierBoldFont,
      size: 12,
    });

    const pdfBytes = await document.save();

    let blob = new Blob([pdfBytes], { type: "application/pdf" });
    let link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "myFile.pdf";
    link.click();
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(scriptURL, {
      method: "POST",
      body: new FormData(formRef.current),
    })
      .then((res) => {
        console.log("SUCCESSFULLY SUBMITTED");
        console.log(formRef.current);
        toast.success(
          "Congrats you got registered! Check your email for your ticket",
          {
            position: toast.POSITION.TOP_RIGHT,
          }
        );

        modifyPDF().catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));

    e.target.reset();
  };

  return (
    <section className="bg-black">
      <div>
        <Header overlayOpen={overlayOpen} setOverlayOpen={setOverlayOpen} />
        <Dropdown overlayOpen={overlayOpen} setOverlayOpen={setOverlayOpen} />
      </div>

      <div className="w-11/12 mx-auto mt-10 md:mt-6 mb-20">
        <h1 className="font-open text-white capitalize text-7xl font-bold tracking-tighter">
          Tickets
        </h1>
        <div className="w-full flex flex-col md:flex-row justify-between items-start gap-10">
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis augue
            justo, porttitor vitae felis nec, molestie sodales mi. Suspendisse
            eget aliquam ex, mollis lacinia nunc.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Duis augue justo, porttitor vitae felis
            nec, molestie sodales mi. Suspendisse eget aliquam ex, mollis
            lacinia nunc.
          </p>
          <div className="w-full">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <div>
                <label htmlFor="name" className="text-white font-open text-xl">
                  Name
                </label>
                <input
                  type="text"
                  name="Name"
                  id="name"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  placeholder="Name..."
                  className="p-3 w-full rounded-md focus:outline-none border focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label
                  htmlFor="mail"
                  className="block text-white font-open text-xl"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="Email"
                  id="mail"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  className="p-3 w-full rounded-md focus:outline-none border focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                  placeholder="Email..."
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-white font-open text-xl">
                  Mobile Number
                </label>
                <input
                  type="text"
                  name="Phone"
                  id="phone"
                  value={data.phone}
                  onChange={(e) => setData({ ...data, phone: e.target.value })}
                  className="p-3 w-full rounded-md focus:outline-none border focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                  placeholder="Number..."
                />
              </div>
              <button
                type="submit"
                className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-open font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-yellow-500 rounded-md group-hover:w-full group-hover:h-80"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                <span className="relative uppercase font-semibold">
                  Yes I'm In
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer theme="dark" autoClose={5000} />
    </section>
  );
}

export default Tickets;
