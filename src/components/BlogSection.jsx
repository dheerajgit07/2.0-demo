import React from "react";

function BlogSection() {
  const blogs = [
    {
      title: "Why Regular Blood Tests Are Important",
      desc: "Learn how routine blood tests help detect diseases early and improve overall health.",
      date: "Jan 15, 2026",
      image:
        "src/assets/images/staff-working.jpg",
    },
    {
      title: "5 Tips to Keep Your Heart Healthy",
      desc: "Simple lifestyle changes that can protect your heart and boost longevity.",
      date: "Feb 2, 2026",
      image:
        "src/assets/images/reception-area.jpg",
    },
    {
      title: "Understanding MRI & CT Scans",
      desc: "A complete guide to how imaging tests work and when you need them.",
      date: "Feb 8, 2026",
      image:
        "src/assets/images/lab-equipment.jpg",
    },
  ];

  return (
    <section
      id="blog"
      className="bg-slate-950 text-white py-24 border-t border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 space-y-4">

          <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-bold uppercase tracking-widest">
            Our Blog
          </span>

          <h2 className="text-4xl md:text-5xl font-bold">
            Health <span className="text-blue-400">Insights</span>
          </h2>

          <p className="text-slate-400 max-w-xl mx-auto">
            Latest medical updates, health tips, and diagnostic awareness.
          </p>

        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500 shadow-xl"
            >
              {/* Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 object-cover"
              />

              {/* Content */}
              <div className="p-6 space-y-4">

                <span className="text-xs text-slate-500">{blog.date}</span>

                <h3 className="text-xl font-bold hover:text-blue-400 transition">
                  {blog.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {blog.desc}
                </p>

                {/* <button className="text-blue-400 font-semibold text-sm hover:text-blue-300">
                  Read More →
                </button> */}

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default BlogSection;
