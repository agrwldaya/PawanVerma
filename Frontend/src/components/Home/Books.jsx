import book1 from '/book01.jpg';
import book2 from '/book02.jpg';
import book3 from '/book03.jpg';
import book4 from '/book04.jpg';
import booklogo from '/booklogo.png'

"use client"

const BookCard = ({ title, description, image, altText }) => {
  return (
    <div className="bg-[#f5e9d1] rounded-md overflow-hidden shadow-md w-full flex-shrink-0 mx-auto mb-8 flex flex-col h-full">
    <div className="w-full h-48 flex items-center justify-center bg-gray-100">
      <img
        src={image || "/placeholder.svg"}
        alt={altText}
        className="max-w-full max-h-48 object-contain"
        onError={(e) => {
          e.target.onerror = null
          e.target.src = "/placeholder.svg?height=192&width=300"
        }}
      />
    </div>
    <div className="p-4 flex flex-col flex-grow">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-sm mb-4 flex-grow">{description}...</p>
      <button className="bg-yellow-500 text-white px-4 py-2 rounded-sm w-full hover:bg-yellow-600 transition duration-300 mt-auto">
        Read More
      </button>
    </div>
  </div>
  
  )
}

const Books = () => {
  const books = [
    {
      title: "The 10X Leader",
      description:
        "Becoming a great leader means focusing on the right things at the right time. This book deals of leadership as a journey rather than a destination. It provides a clear roadmap to the process of inner transformation.",
      image: book1,
      altText: "The 10X Leader book cover",
    },
    {
      title: "Age of the Impatient Leader",
      description:
        "Built on the concept of 'Impatient Leadership', this book goes beyond the merely associated with impatience and explores the positive attributes that are associated with impatience.",
      image: book2,
      altText: "Age of the Impatient Leader book cover",
    },
    {
      title: "UNBORN",
      description:
        "While there is nothing wrong with the conventional wisdom that says that the reader and the right time to implement it, this book takes the reader and the right time to a new level, between the idea and its implementation.",
      image: book3,
      altText: "UNBORN book cover",
    },
    {
      title: "NO CLOSURE NO FORGIVENESS",
      description:
        "Fiction becomes a brilliant showcase when the narrator responsible for the story telling is able to create a world where you go into a reflective stance, introspect and question your own beliefs.",
      image: book4,
      altText: "NO CLOSURE NO FORGIVENESS book cover",
    },
  ]

  return (
    <section id="books" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center mb-2">
            <div className="h-0.5 w-12 bg-[#B8860B]" />
            <h2 className="text-2xl md:text-3xl font-bold mx-2">My Popular Books</h2>
            <img
              src={booklogo}
              alt="Book icon"
              className="inline-block h-16 w-16"
              onError={(e) => {
                e.target.onerror = null
                e.target.src = "/placeholder.svg?height=32&width=32"
              }}
            />
            <div className="h-0.5 w-12 bg-[#B8860B]" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {books.map((book, index) => (
            <BookCard
              key={index}
              title={book.title}
              description={book.description}
              image={book.image}
              altText={book.altText}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Books