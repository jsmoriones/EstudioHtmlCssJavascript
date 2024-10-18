import MenuAccordion from "./components/MenuAccordion"

function App() {

  

  return (
    <>
      <div className="contenido">
        <div className="Header relative">
          <div className="custom-area">
            <div className="custom-area-logo text-white ml-6 flex items-center">
              <figure className="flex items-end">
                <img src="./images/logo.svg" alt="Logo" className="invert" />
                &nbsp;&nbsp;
                <figcaption className="leading-none">- Admin</figcaption>
              </figure>
            </div>
            <div className="custom-area-search">
              <input type="text" name="search" className="bg-transparent outline-none text-white h-full w-full text-md placeholder:text-slate-300" placeholder="Enter your seach keyword" />
            </div>
            <div className="custom-area-options mr-6 flex items-center justify-end">
              <p className="text-white px-3 py-1 hover:bg-[rgba(0,0,0,.1)] text-md inline-block cursor-pointer hover:bg-black">Notification</p>
              <a href="#" className="px-3 py-1 hover:bg-[rgba(0,0,0,.1)]">
                <i className="fa-solid fa-maximize text-xl text-white"></i>
              </a>
              <a href="#" className="px-3 py-1 hover:bg-[rgba(0,0,0,.1)]">
                <i className="fa-solid fa-globe text-xl text-white"></i>
              </a>
              <a href="#" className="px-3 py-1 hover:bg-[rgba(0,0,0,.1)]">
                <i className="fa-solid fa-moon text-xl text-white"></i>
              </a>
              <a href="#" className="px-3 py-1 hover:bg-[rgba(0,0,0,.1)]">
                <i className="fa-solid fa-gear text-xl text-white"></i>
              </a>
            </div>
            <div className="custom-area-userprofile flex ml-6 space-x-4 mt-8">
              <div className="image-avatar">
                <img src="/images/manager.png" alt="Usuario Administrador" className="w-[55px] border-4 border-white rounded-lg"/>
              </div>
              <div className="details-user">
                <p className="text-sm text-white">Sr. Manager</p>
                <p className="text-lg text-white">Allie Grater</p>
                <div className="flex items-center space-x-4 mt-3">
                  <a href="#">
                    <i className="fa-regular fa-calendar text-[rgba(255,255,255,.9)] text-md"></i>

                  </a>
                  <a href="#">
                    <i className="fa-regular fa-note-sticky text-[rgba(255,255,255,.9)] text-md"></i>

                  </a>
                  <a href="#">
                    <i className="fa-regular fa-message text-[rgba(255,255,255,.9)] text-md"></i>

                  </a>
                  <a href="#">
                    <i className="fa-solid fa-power-off text-[rgba(255,255,255,.9)] text-md"></i>

                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-6 grid grid-cols-12 space-x-6 mt-5">
          <div className="side-left col-span-2">
            <MenuAccordion />
          </div>
          <div className="side-content col-span-10 bg-f8f6f2 border-[7px] border-e7e7e7 rounded-2xl px-5 py-6 -translate-y-32 min-h-full overflow-y-scroll">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi unde, magnam vero, dicta consectetur esse facilis veritatis non expedita libero obcaecati. Ullam excepturi architecto corrupti quas impedit repellat aperiam! Cumque?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi unde, magnam vero, dicta consectetur esse facilis veritatis non expedita libero obcaecati. Ullam excepturi architecto corrupti quas impedit repellat aperiam! Cumque?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi unde, magnam vero, dicta consectetur esse facilis veritatis non expedita libero obcaecati. Ullam excepturi architecto corrupti quas impedit repellat aperiam! Cumque?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi unde, magnam vero, dicta consectetur esse facilis veritatis non expedita libero obcaecati. Ullam excepturi architecto corrupti quas impedit repellat aperiam! Cumque?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi unde, magnam vero, dicta consectetur esse facilis veritatis non expedita libero obcaecati. Ullam excepturi architecto corrupti quas impedit repellat aperiam! Cumque?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi unde, magnam vero, dicta consectetur esse facilis veritatis non expedita libero obcaecati. Ullam excepturi architecto corrupti quas impedit repellat aperiam! Cumque?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi unde, magnam vero, dicta consectetur esse facilis veritatis non expedita libero obcaecati. Ullam excepturi architecto corrupti quas impedit repellat aperiam! Cumque?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi unde, magnam vero, dicta consectetur esse facilis veritatis non expedita libero obcaecati. Ullam excepturi architecto corrupti quas impedit repellat aperiam! Cumque?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi unde, magnam vero, dicta consectetur esse facilis veritatis non expedita libero obcaecati. Ullam excepturi architecto corrupti quas impedit repellat aperiam! Cumque?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi unde, magnam vero, dicta consectetur esse facilis veritatis non expedita libero obcaecati. Ullam excepturi architecto corrupti quas impedit repellat aperiam! Cumque?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi unde, magnam vero, dicta consectetur esse facilis veritatis non expedita libero obcaecati. Ullam excepturi architecto corrupti quas impedit repellat aperiam! Cumque?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi unde, magnam vero, dicta consectetur esse facilis veritatis non expedita libero obcaecati. Ullam excepturi architecto corrupti quas impedit repellat aperiam! Cumque?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi unde, magnam vero, dicta consectetur esse facilis veritatis non expedita libero obcaecati. Ullam excepturi architecto corrupti quas impedit repellat aperiam! Cumque?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi unde, magnam vero, dicta consectetur esse facilis veritatis non expedita libero obcaecati. Ullam excepturi architecto corrupti quas impedit repellat aperiam! Cumque?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi unde, magnam vero, dicta consectetur esse facilis veritatis non expedita libero obcaecati. Ullam excepturi architecto corrupti quas impedit repellat aperiam! Cumque?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi unde, magnam vero, dicta consectetur esse facilis veritatis non expedita libero obcaecati. Ullam excepturi architecto corrupti quas impedit repellat aperiam! Cumque?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi unde, magnam vero, dicta consectetur esse facilis veritatis non expedita libero obcaecati. Ullam excepturi architecto corrupti quas impedit repellat aperiam! Cumque?</p>
          </div>
        </div>
      </div>
    </>
  )
}

/**
          <div className="custom-area-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsum corrupti quibusdam, cum ullam recusandae porro error, labore inventore dolore libero ipsa aspernatur ducimus et neque pariatur. Voluptas, sed earum.</div>
          <div className="custom-area-sideleft">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsum corrupti quibusdam, cum ullam recusandae porro error, labore inventore dolore libero ipsa aspernatur ducimus et neque pariatur. Voluptas, sed earum.</div>
 */

export default App


//https://wrraptheme.com/templates/swift/react-tailwind/