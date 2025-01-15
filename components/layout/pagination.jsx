import Link from "next/link";
import { usePathname } from "next/navigation";
import s from "@/styles/components/layout/pagination.module.scss";

export default function Pagination({ currentPage, totalPages }) {
  const pathname = usePathname();
  const basePath = pathname.split("/")[1];
  const prevPage = currentPage - 1 > 0;
  const nextPage = currentPage + 1 <= totalPages;

  return (
    <div className={s.pagination}>
      {!prevPage && (
        <span
          className={`${s.prev} cursor-auto disabled:opacity-50`}
          disabled={!prevPage}
        >
          Previous
        </span>
      )}
      {prevPage && (
        <Link
          href={
            currentPage - 1 === 1
              ? `/${basePath}/`
              : `/${basePath}/page/${currentPage - 1}`
          }
          passHref
        >
          <span className={s.prev}>Previous</span>
        </Link>
      )}
      {Array.from({ length: totalPages }, (_, i) => (
        <Link key={i + 1} href={`/${basePath}/page/${i + 1}`} passHref>
          <span className={currentPage === i + 1 ? s.active : ""}>{i + 1}</span>
        </Link>
      ))}
      {!nextPage && (
        <span
          className={`${s.next} cursor-auto disabled:opacity-50`}
          disabled={!nextPage}
        >
          Next
        </span>
      )}
      {nextPage && (
        <Link href={`/${basePath}/page/${currentPage + 1}`} passHref>
          <span className={s.next}>Next</span>
        </Link>
      )}
    </div>
  );
}
