export function Profile() {
  const imageUrl = "https://st4.depositphotos.com/34458648/40874/v/450/depositphotos_408742582-stock-illustration-logo-luxury-design-vector-icon.jpg";
  const altText = "AM";
  const imageWidth = 100;

  return (
    <div>
      <img src={imageUrl} alt={altText} width={imageWidth} height={75} />
    </div>
  );
}
