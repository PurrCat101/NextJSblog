import Link from "next/link";
import s from "@/styles/components/layout/pagination.module.scss";

export default function Pagination({ currentPage, totalPages }) {
  return (
    <div className={s.pagination}>
      {currentPage > 1 && (
        <Link href={`/?page=${currentPage - 1}`}>
          <a className={s.prev}>Previous</a>
        </Link>
      )}
      {Array.from({ length: totalPages }, (_, i) => (
        <Link key={i + 1} href={`/?page=${i + 1}`}>
          <a className={currentPage === i + 1 ? s.active : ""}>{i + 1}</a>
        </Link>
      ))}
      {currentPage < totalPages && (
        <Link href={`/?page=${currentPage + 1}`}>
          <a className={s.next}>Next</a>
        </Link>
      )}
    </div>
  );
}
