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
      {/* First Marquee */}
      <div className="flex whitespace-nowrap animate-marquee">
        {comments.map((comment, index) => (
          <span key={`1-${index}`} className="mx-8 font-medium">
            {comment}
          </span>
        ))}
      </div>

      {/* Second Marquee for seamless loop */}
      <div className="flex whitespace-nowrap animate-marquee absolute left-full top-0 h-full items-center">
        {comments.map((comment, index) => (
          <span key={`2-${index}`} className="mx-8 font-medium">
            {comment}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
