import React from 'react';

function Button({color, text, bg, className}) {
 const baseClasses = `border rounded border-[#0c2461] font-semibold px-3 py-1 cursor-pointer transition-all duration-500`;

  const dynamicStyles = `
    ${bg ? '' : 'text-[#0c2461]'} 
    ${bg ? '' : 'hover:bg-[#0c2461] hover:text-white cursor-pointer'}
    ${bg ? 'bg-[#0c2461] text-white hover:opacity-80' : ''}
    ${className}
  `;
  return (
    <div className={`${dynamicStyles} ${baseClasses}`}>
      <button>
          {text}
      </button>
    </div>
  );
}

export default Button;
