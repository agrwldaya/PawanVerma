import book1 from '/book01.jpg';
import book2 from '/book02.jpg';
import book3 from '/book03.jpg';
import book4 from '/book04.jpg';

const BookCard = ({ title, description, image, altText }) => {
  return (
    <div className="bg-[#f5e9d1] rounded-lg overflow-hidden  shadow-md flex flex-col h-full">
      <img
        src={image || "/placeholder.svg"}
        alt={altText}
        className="w-full h-64 object-contain bg-white"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/placeholder.svg";
        }}
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-sm flex-grow">{description}</p>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-sm w-full hover:bg-yellow-600 transition duration-300 mt-4">
          Read More
        </button>
      </div>
    </div>
  );
};

const Books = () => {
  const books = [
    {
      title: "The 10X Leader",
      description:
        "A guide to leadership as a journey, providing a clear roadmap for inner transformation.",
      image: book1,
      altText: "The 10X Leader book cover",
    },
    {
      title: "Age of the Impatient Leader",
      description:
        "Exploring positive attributes of impatience in leadership and business success.",
      image: book2,
      altText: "Age of the Impatient Leader book cover",
    },
    {
      title: "UNBORN",
      description:
        "Takes the reader on a journey from idea conception to execution with practical insights.",
      image: book3,
      altText: "UNBORN book cover",
    },
    {
      title: "NO CLOSURE NO FORGIVENESS",
      description:
        "A compelling narrative that makes readers introspect and question their own beliefs.",
      image: book4,
      altText: "NO CLOSURE NO FORGIVENESS book cover",
    },
  ];

  return (
    <section id="books" className="py-16 bg-white">
      <div className="container mx-auto px-4 ">
      <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-0.5 w-12 bg-[#B8860B]" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            My Popular Books
            </h2>
            <div className="h-0.5 w-12 bg-[#B8860B]" />
          </div>
          <p className="text-gray-600 mt-4">Dr. Verma's books</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book, index) => (
            <BookCard key={index} {...book} />
          ))}
        </div>

         
      </div>
    </section>
  );
};

export default Books;