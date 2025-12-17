import BookCard from "@/components/books/BookCard";
import { books } from "@/data/books";

export default function BooksPage() {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:px-6 lg:px-8">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}
