import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background text-foreground">
    <p className="font-mono text-sm text-primary">404</p>
    <h1 className="text-2xl font-light">Page not found</h1>
    <Link to="/" className="text-sm text-muted-foreground underline underline-offset-4 hover:text-primary">
      Back to ventura.zip
    </Link>
  </div>
);

export default NotFound;
