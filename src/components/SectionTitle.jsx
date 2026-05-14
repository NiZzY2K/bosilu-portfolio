function SectionTitle({ label, title, description, align = "center" }) {
  const isCenter = align === "center";

  return (
    <div className={`${isCenter ? "mx-auto text-center" : ""} max-w-3xl`}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
        {label}
      </p>

      <h2 className="text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-8 text-white/60 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;