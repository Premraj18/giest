export default function RunningTab() {
  return (
    <div className="w-full overflow-hidden bg-gray-100 border-y py-4">
      <div className="whitespace-nowrap animate-marquee text-gray-900 font-medium py-2 text-xl">
        “2025 IEEE 2nd International Conference on Green Industrial Electronics and Sustainable Technologies” will be organized by the Electrical Engineering Department, NIT Jamshedpur from 11th to 13th October 2025 in <span className="font-bold"> HYBRID MODE</span> 
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
