import Link from "next/link";

export default function BookCard({ book }) {
  return (
    <Link href={`/books/${book.id}`}>
      <div className="rounded-xl shadow hover:shadow-lg transition cursor-pointer">
        <img
          src={book.cover}
          className="h-56 w-full object-cover rounded-t-xl"
        />
        <div className="p-4">
          <h2 className="font-semibold text-lg">{book.title}</h2>
          <p className="text-sm text-gray-500">{book.author}</p>
        </div>
      </div>
    </Link>
  );
}
