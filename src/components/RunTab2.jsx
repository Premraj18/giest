export default function RunningTab(props) {
  return (
    <div className="w-full overflow-hidden border-y py-4">
      <div className="whitespace-nowrap animate-marquee text-blue-600 font-medium py-2 text-xl">
        {props.text} 
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
