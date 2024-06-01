function StatusItem({ icon, description, data, className = "" }) {
  return (
    <p className={`descriptionContainer ${className}`}>
      {icon}
      <span>
        {description}: <b>{data}</b>
      </span>
    </p>
  );
}

export default StatusItem;
