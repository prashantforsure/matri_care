export const YoutubeEmbed = ({ embedId }: { embedId: string }) => (
    <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-full">
      <iframe
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full rounded-lg"
      />
    </div>
  )
  
  