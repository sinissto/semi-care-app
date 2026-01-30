const Section = ({ children, className }) => {
  return (
    <section className={`py-24 ${className ? className : "bg-primary-tint"}`}>
      {/* .hero */}
      <div className={"max-w-8xl mx-auto px-8"}>{children}</div>
    </section>
  );
};

export default Section;
