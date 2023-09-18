export default function GalleryItem() {
  return (
    <div className="card card-compact w-44 bg-base-100 shadow-xl">
      <figure>
        <img className="mask mask-circle" src="/100x100.png" alt="Shoes" />
      </figure>
      <div className="card-body items-center">
        <h2 className="card-title">Shoes!</h2>
        <div className="card-actions">
          <button className="btn btn-primary btn-sm">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
