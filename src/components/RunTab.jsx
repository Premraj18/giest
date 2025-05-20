export default function RunningTab(props) {
  return (
    <div className="w-full overflow-hidden bg-gray-100 border-y py-4">
      <div className="whitespace-nowrap animate-marquee text-gray-900 font-medium py-2 text-xl">
        {props.text} <span className='font-bold text-red-600'> HYBRID MODE</span>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          min-width: 100%;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
