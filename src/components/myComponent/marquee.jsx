"use client";

const Marquee = () => {
  const data = [
    {
      items: [
        "See our collection",
        "New arrivals dropping soon",
        "Exclusive Shalwar Qameez",
        "Premium fabrics at Ghanchis.pk"
      ]
    }
  ];

  const marqueeData = data?.[0];
  const comments = marqueeData?.items || [];

  if (comments.length === 0) {
    return <div className="text-center py-4">No comments available</div>;
  }

  return (
    <div className="w-full bg-black dark:bg-white text-white dark:text-black overflow-hidden relative h-10 flex items-center">
      {/* Outer container */}
      <div className="flex whitespace-nowrap animate-marquee">
        {[...comments, ...comments].map((comment, index) => (
          <span
            key={index}
            className="mx-8 font-medium text-sm sm:text-base"
          >
            {comment}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
