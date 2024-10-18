const MenuAccordion = () => {
    const toggleAccordion = (index) => {
        const content = document.getElementById(`content-${index}`);
        const icon = document.getElementById(`icon-${index}`);
     
        // SVG for Minus icon
        const minusSVG = `
            <i class="fa-solid fa-angle-down"></i>
        `;
     
        // SVG for Plus icon
        const plusSVG = `
            <i class="fa-solid fa-chevron-right text-sm"></i>
        `;

        document.querySelectorAll('[id*="content"]').forEach(item => {
          //console.log(item.id)
          if(item.id !== "content-"+index){
            //console.log("Es este")
            item.style.maxHeight = '0';
          }
        });
     
        // Toggle the content's max-height for smooth opening and closing
        if (content.style.maxHeight && content.style.maxHeight !== '0px') {
          content.style.maxHeight = '0';
          icon.innerHTML = plusSVG;
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
          icon.innerHTML = minusSVG;
        }
      }
    
  return (<>
<div className="py-2">
  <button onClick={() => toggleAccordion(1)} className="w-full text-white flex justify-between items-center">
    <p className="flex space-x-3 items-center text-colorMenuText">
      <i className="fa-solid fa-house"></i>
      <span>My Dahsboard</span>
    </p>
    <span id="icon-1" className="text-colorMenuText transition-transform duration-300">
      <i className="fa-solid fa-chevron-right text-sm"></i>
    </span>
  </button>
  <div id="content-1" className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
    <div className="pb-5 text-sm text-slate-500">
      Material Tailwind is a framework that enhances Tailwind CSS with additional styles and components.
    </div>
  </div>
</div>
 

<div className="py-2">
  <button onClick={() => toggleAccordion(2)} className="w-full text-white flex justify-between items-center">
    <p className="flex space-x-3 items-center text-colorMenuText">
      <i className="fa-solid fa-table-cells-large"></i>
      <span>Applications</span>
    </p>
    <span id="icon-2" className="text-colorMenuText transition-transform duration-300">
      <i className="fa-solid fa-chevron-right text-sm"></i>
    </span>
  </button>
  <div id="content-2" className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
    <div className="pb-5 text-sm text-slate-500">
      You can use Material Tailwind by importing its components into your Tailwind CSS project.
    </div>
  </div>
</div>
 
 
<div className="py-2">
  <button onClick={() => toggleAccordion(3)} className="w-full text-white flex justify-between items-center">
    <p className="flex space-x-3 items-center text-colorMenuText">
      <i className="fa-solid fa-file-lines"></i>
      <span>More Pages</span>
    </p>
    <span id="icon-3" className="text-colorMenuText transition-transform duration-300">
      <i className="fa-solid fa-chevron-right text-sm"></i>
    </span>
  </button>
  <div id="content-3" className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
    <div className="pb-5 text-sm text-slate-500">
      Material Tailwind allows you to quickly build modern, responsive websites with a focus on design.
    </div>
  </div>
</div>

<div className="py-2">
  <button onClick={() => toggleAccordion(4)} className="w-full text-white flex justify-between items-center">
    <p className="flex space-x-3 items-center text-colorMenuText">
      <i className="fa-regular fa-address-card"></i>
      <span>Account</span>
    </p>
    <span id="icon-4" className="text-colorMenuText transition-transform duration-300">
      <i className="fa-solid fa-chevron-right text-sm"></i>
    </span>
  </button>
  <div id="content-4" className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
    <div className="pb-5 text-sm text-slate-500">
      Material Tailwind allows you to quickly build modern, responsive websites with a focus on design.
    </div>
  </div>
</div>


<div className="py-2">
  <button onClick={() => toggleAccordion(5)} className="w-full text-white flex justify-between items-center">
    <p className="flex space-x-3 items-center text-colorMenuText">
      <i className="fa-solid fa-shield"></i>
      <span>Authentication</span>
    </p>
    <span id="icon-5" className="text-colorMenuText transition-transform duration-300">
      <i className="fa-solid fa-chevron-right text-sm"></i>
    </span>
  </button>
  <div id="content-5" className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
    <div className="pb-5 text-sm text-slate-500">
      Material Tailwind allows you to quickly build modern, responsive websites with a focus on design.
    </div>
  </div>
</div>


<div className="py-2">
  <button onClick={() => toggleAccordion(6)} className="w-full text-white flex justify-between items-center">
    <p className="flex space-x-3 items-center text-colorMenuText">
      <i className="fa-solid fa-sitemap"></i>
      <span>Menu Level</span>
    </p>
    <span id="icon-6" className="text-colorMenuText transition-transform duration-300">
      <i className="fa-solid fa-chevron-right text-sm"></i>
    </span>
  </button>
  <div id="content-6" className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
    <div className="pb-5 text-sm text-slate-500">
      Material Tailwind allows you to quickly build modern, responsive websites with a focus on design.
    </div>
  </div>
</div>
</>
  );
};

export default MenuAccordion;
