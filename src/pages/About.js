import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-14">
          <h1
            className="text-5xl mb-4 text-[#8C1515]"
            style={{ fontFamily: '"Freshman", sans-serif', fontWeight: 400 }}
          >
            About Threads TN
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            We’re a locally owned, family-rooted apparel shop built by teachers,
            coaches, and former educators — helping schools, teams, and small
            businesses bring their vision to life through embroidery and screen printing.
          </p>
        </div>

        {/* Story + Family Photo */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
  {/* Story Card */}
  <div className="bg-white rounded-2xl shadow-md p-8">
    <h2
      className="text-3xl mb-4 text-gray-900"
      style={{ fontFamily: '"Freshman", sans-serif', fontWeight: 400 }}
    >
      Our Story
    </h2>
    <p className="text-gray-700 leading-relaxed">
      Threads TN was created with one goal: make it easy for organizations
      to get apparel they’re proud of — even when budgets are tight or timelines
      are short. With three generations of roots in education and coaching,
      we understand what schools and teams need (and what they don’t have time for).
    </p>
    <p className="text-gray-700 leading-relaxed mt-4">
      From spirit wear to staff polos, we handle the details so you can focus on
      your students, your team, and your community.
    </p>
  </div>

  {/* Family Photo Card */}
  <div className="bg-white rounded-2xl shadow-md p-4">
    <img
      src="/about/family.jpg"
      alt="Threads TN Family"
      className="rounded-xl object-cover w-full h-[350px]"
    />
    <p className="text-sm text-gray-600 text-center mt-3">
      Three families, one mission — serving our community through custom apparel.
    </p>
  </div>


          {/* Story Card */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2
              className="text-3xl mb-4 text-gray-900"
              style={{ fontFamily: '"Freshman", sans-serif', fontWeight: 400 }}
            >
              Sponsorships
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We stand by our commitment to serve the community through sponorships. 
              We want to ensure your your season or event is succesfull whether you 
              need thisrts or not!
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Please reach out to us if you need sponsors for your event. We will do 
              our best to give something to every group that asks!
            </p>
          </div>

          {/* Values Card */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2
              className="text-3xl mb-6 text-gray-900"
              style={{ fontFamily: '"Freshman", sans-serif', fontWeight: 400 }}
            >
              What We Stand For
            </h2>

            <div className="space-y-5">
              <div className="border border-gray-200 rounded-xl p-5 bg-gray-50">
                <p className="font-semibold text-gray-900">No budget? We’ll find a way.</p>
                <p className="text-gray-700 mt-1">
                  We help schools and clubs get quality apparel without compromising
                  their mission.
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-5 bg-gray-50">
                <p className="font-semibold text-gray-900">Fast, dependable turnaround.</p>
                <p className="text-gray-700 mt-1">
                  Clear timelines, good communication, and deadlines you can trust.
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-5 bg-gray-50">
                <p className="font-semibold text-gray-900">Quality you can feel.</p>
                <p className="text-gray-700 mt-1">
                  Clean prints, sharp embroidery, and apparel that holds up season after season.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-12 bg-white rounded-2xl shadow-md p-8">
          <h2
            className="text-3xl mb-6 text-gray-900 text-center"
            style={{ fontFamily: '"Freshman", sans-serif', fontWeight: 400 }}
          >
            Why Organizations Choose Threads TN
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <p className="font-semibold text-gray-900 mb-2">Schools & Teams</p>
              <p className="text-gray-700">
                Spirit wear, uniforms, boosters, coaches gear, clubs, and team stores.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <p className="font-semibold text-gray-900 mb-2">Local Businesses</p>
              <p className="text-gray-700">
                Branded polos, hats, workwear, and event shirts that represent your brand.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <p className="font-semibold text-gray-900 mb-2">Events</p>
              <p className="text-gray-700">
                Runs, fundraisers, tournaments, and community events — done right and on time.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <div className="inline-block bg-[#8C1515] text-white rounded-2xl px-10 py-10 shadow-xl">
            <h3
              className="text-3xl mb-3"
              style={{ fontFamily: '"Freshman", sans-serif', fontWeight: 400 }}
            >
              Ready to bring your vision to life?
            </h3>
            <p className="text-gray-100 mb-6 max-w-2xl mx-auto">
              Send us your idea — we’ll help you choose the right apparel, decoration method,
              and timeline to get it done.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-[#8C1515] px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
