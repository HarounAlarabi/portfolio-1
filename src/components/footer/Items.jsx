function Items({ item, link }) {
  return (
    <li>
      <a href={`${link}`} className="hover:underline md:me-6">
        <img src={item} alt={item.title} className="h-6" />
      </a>
    </li>
  );
}

export default Items;
