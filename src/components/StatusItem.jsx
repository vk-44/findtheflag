function StatusItem({ icon, description, data }) {
  return (
    <p className="descriptionContainer">
      {icon}
      <span>
        {description}: <b>{data}</b>
      </span>
    </p>
  );
}

export default StatusItem;
