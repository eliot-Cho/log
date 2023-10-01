interface Props {
  url: string;
}

export const Thumbnail = ({ url }: Props) => {
  return (
    <div className="mt-9 flex justify-center">
      <img
        loading="lazy"
        className="object-cover h-[300px]"
        src={url}
        alt="thumbnail"
      />
    </div>
  );
};
