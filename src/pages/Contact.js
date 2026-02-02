import React, { useState } from "react";

export default function Contact() {
  const FORM_ENDPOINT = "https://formspree.io/f/mgozrven";

  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Optional: If you suspect file upload is causing issues, uncomment next line
    // formData.delete("artwork");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(
          data?.errors?.[0]?.message ||
            `Formspree rejected the submission (HTTP ${res.status}).`
        );
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Network error — submission did not reach Formspree.");
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h1
          className="text-5xl mb-4 text-[#8C1515]"
          style={{ fontFamily: '"Freshman", sans-serif', fontWeight: 400 }}
        >
          Request a Quote
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Tell us what you need and we’ll get back to you with pricing and production details.
        </p>
      </div>

      {status === "success" ? (
        <div className="bg-green-100 border border-green-300 text-green-800 p-6 rounded-lg text-center">
          ✅ Your quote request has been sent! We’ll be in touch shortly.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="bg-white shadow-xl rounded-xl p-8"
        >
          {/* Spam trap */}
          <input type="text" name="_gotcha" className="hidden" tabIndex="-1" autoComplete="off" />

          {/* Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                required
                className="w-full border rounded-md p-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#8C1515]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                required
                className="w-full border rounded-md p-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#8C1515]"
              />
            </div>
          </div>

          {/* Company */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Company or Organization Name</label>
            <input
              type="text"
              name="company"
              className="w-full border rounded-md p-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#8C1515]"
            />
          </div>

          {/* Email + Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border rounded-md p-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#8C1515]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                className="w-full border rounded-md p-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#8C1515]"
              />
            </div>
          </div>

          {/* Item Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">Item ID</label>
              <input
                type="text"
                name="itemId"
                placeholder="Example: Gildan G500"
                className="w-full border rounded-md p-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#8C1515]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Item Color</label>
              <input
                type="text"
                name="itemColor"
                placeholder="Example: Antique Orange"
                className="w-full border rounded-md p-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#8C1515]"
              />
            </div>
          </div>

          {/* Sizes */}
          <div className="mb-8">
            <p className="text-sm font-medium mb-4">Sizes & Quantities</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL",].map((size) => (
                <div key={size}>
                  <label className="block text-sm mb-1">{size}</label>
                  <input
                    type="number"
                    name={`size_${size}`}
                    min="0"
                    defaultValue="0"
                    className="w-full border rounded-md p-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#8C1515]"
                  />
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Please ensure the color and sizes requested are available in our product catalog.
            </p>
          </div>

          
          {/* Special Requests */}
          <div className="mb-8">
            <label className="block text-sm font-medium mb-2">Special Requests? Tell us below!</label>
            <textarea
              name="specialRequests"
              rows="7"
              className="w-full border rounded-md p-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#8C1515]"
            />
          </div>

          {/* Error */}
          {status === "error" && (
            <div className="mb-6 bg-red-100 border border-red-300 text-red-800 p-4 rounded-md">
              ❌ {errorMsg}
            </div>
          )}

          {/* Submit */}
          <div className="text-left">
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-[#8C1515] text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-black transition shadow-lg disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
