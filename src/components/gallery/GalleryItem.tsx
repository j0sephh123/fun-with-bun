import clsx from "clsx";
import Avatar from "../../Avatar/Avatar";

type Props = {
  src?: string;
  title: string;
  onClick: VoidFunction;
  actionLabel: string;
};

export default function GalleryItem({
  src,
  title,
  onClick,
  actionLabel,
}: Props) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // prevent closing of the modal

    onClick();
  };

  // TODO refactor button label/className when we create a button component 
  // with different variants, so only variant is passed
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
            className={clsx(
              "btn btn-sm text-white",
              actionLabel === "Delete" ? "btn-error" : "btn-primary"
            )}
          >
            {actionLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
