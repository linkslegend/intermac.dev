export function YouTube({ id }: { id: string }) {
  return (
    <div
      className="rounded-xl overflow-hidden my-8"
      style={{
        position: "relative",
        paddingBottom: "56.25%",
        height: 0,
        border: "1px solid rgba(255,255,255,0.1)",
        backdropFilter: "blur(4px)",
      }}
    >
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: 0,
        }}
      />
    </div>
  );
}
