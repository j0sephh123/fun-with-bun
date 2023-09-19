import Avatar from "../../Avatar/Avatar";

type Props = {
  src?: string;
  title: string;
  onDelete: VoidFunction;
};

export default function GalleryItem({ src, title, onDelete }: Props) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // prevent closing of the modal

    onDelete();
  };

  return (
    <div className="card card-compact w-44 bg-base-100">
      <figure>
        <Avatar avatar={src ? src : null} />
      </figure>
      <div className="card-body items-center">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions">
          <button
            onClick={handleClick}
            className="btn btn-error btn-sm text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
