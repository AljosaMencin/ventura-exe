import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-balance text-4xl font-light text-foreground sm:text-5xl">
          Got a project in mind?
        </h2>
        <p className="mt-4 text-muted-foreground">
          Limited projects. Full focus. Tell us about the record.
        </p>
        <Button asChild size="lg" className="mt-10">
          <a href="mailto:venturadesigns01@gmail.com">venturadesigns01@gmail.com</a>
        </Button>
      </motion.div>
    </section>
  );
};

export default Contact;
