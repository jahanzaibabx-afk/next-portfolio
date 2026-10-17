import ArrowIcon from './ArrowIcon';

export default function SiteFooter() {
  return (
    <footer className="flex flex-col gap-4 border-t border-white/[0.07] py-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
      <p>© {new Date().getFullYear()} Jahanzaib Ahmad. Built with care.</p>
      <a
        className="inline-flex items-center gap-1.5 transition hover:text-teal-200"
        href="mailto:hello@jahanzaib.dev"
      >
        Get in touch <ArrowIcon />
      </a>
    </footer>
  );
}
