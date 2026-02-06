const Section = ({ children, className }) => {
  return (
    <section>
      <div
        className={`py-12 max-w-8xl mx-auto px-8 last-of-type:rounded-b-2xl ${
          className ? className : "bg-primary-tint"
        }`}
      >
        <div className={``}>{children}</div>
      </div>
    </section>
  );
};

export default Section;
