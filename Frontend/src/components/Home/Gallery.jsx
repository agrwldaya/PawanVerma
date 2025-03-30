 
import img01 from '/gallery01.jpeg'
import img02 from '/gallery02.jpeg'
import img03 from '/gallery03.png'
import img04 from '/gallery04.jpeg'
import img05 from '/gallery05.jpeg'

const Gallery = () => {
    return (
      <section className="py-16 bg-white ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold inline-block relative">
              Dig A Little Deeper Into My Life.
               <hr />
            </h2>
          </div>
  
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="col-span-2 md:col-span-1 row-span-2">
              <img
                src={img01}
                alt="Pawan Verma speaking at an event"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div>
              <img
                src={img02}
                alt="Pawan Verma at desk"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div>
              <img
                src={img03}
                alt="Pawan Verma at book launch"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div>
              <img
                src={img04}
                alt="Pawan Verma with award"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div>
              <img
                src={img05}
                alt="Pawan Verma on stage"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
        </div>
        
      </section>
    )
  }
  
  export default Gallery
  
  