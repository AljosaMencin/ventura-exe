const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <img src="/ventura-mark.png" alt="Ventura" className="h-5 w-5" />
          <span className="font-mono text-xs text-muted-foreground">ventura.zip</span>
        </div>

        <p className="text-xs text-muted-foreground">© {year} Ventura. From sound to vision.</p>

        <a
          href="mailto:venturadesigns01@gmail.com"
          className="text-xs text-muted-foreground transition-colors hover:text-primary"
        >
          venturadesigns01@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
