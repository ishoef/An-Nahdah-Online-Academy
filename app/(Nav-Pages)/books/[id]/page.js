import PDFReader from "@/components/books/PDFReader";

export default async function BookReadPage({ params }) {
  const { id } = await params;

  return (
    <div className="p-4">
      <PDFReader bookId={id} />
    </div>
  );
}
