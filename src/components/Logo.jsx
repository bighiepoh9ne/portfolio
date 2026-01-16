function Logo({ width = 40, height = 50 }) {
  return (
    <svg width={width} height={height} viewBox="0 0 200 250" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Logo symbol at top */}
      <g transform="translate(50, 20)">
        {/* Top left circle */}
        <circle cx="20" cy="30" r="18" fill="#A8D5E2"/>
        {/* Top right circle */}
        <circle cx="80" cy="30" r="18" fill="#A8D5E2"/>
        {/* Center connecting shape */}
        <path d="M 20 30 Q 50 10 80 30 Q 50 50 20 30 Z" fill="#A8D5E2"/>
        {/* Bottom circle */}
        <circle cx="50" cy="70" r="15" fill="#A8D5E2"/>
      </g>
      
      {/* AAC text */}
      <g transform="translate(20, 130)">
        {/* First A */}
        <path d="M 10 80 L 30 20 L 50 80 M 20 60 L 40 60" stroke="#A8D5E2" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M 15 80 L 35 20 L 55 80 M 25 60 L 45 60" stroke="#A8D5E2" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        
        {/* Second A */}
        <path d="M 70 80 L 90 20 L 110 80 M 80 60 L 100 60" stroke="#A8D5E2" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M 75 80 L 95 20 L 115 80 M 85 60 L 105 60" stroke="#A8D5E2" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        
        {/* C */}
        <path d="M 160 30 Q 140 20 130 40 Q 130 60 140 80 Q 150 90 160 80" stroke="#A8D5E2" strokeWidth="8" fill="none" strokeLinecap="round"/>
        <path d="M 165 30 Q 145 20 135 40 Q 135 60 145 80 Q 155 90 165 80" stroke="#A8D5E2" strokeWidth="8" fill="none" strokeLinecap="round"/>
      </g>
    </svg>
  )
}

export default Logo
