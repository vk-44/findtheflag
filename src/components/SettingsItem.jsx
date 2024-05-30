function SettingsItem({ icon, description, onClick, className = "" }) {
  return (
    <button
      className={`btnSecondary descriptionContainer ${className}`}
      onClick={onClick}
    >
      {icon}
      {description}
    </button>
  );
}

export default SettingsItem;
