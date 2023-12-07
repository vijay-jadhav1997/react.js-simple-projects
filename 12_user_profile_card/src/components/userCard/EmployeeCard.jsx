import "./EmployeeCard.css";

const EmployeeCard = (props) => {
  const {
    image,
    firstName,
    lastName,
    birthDate,
    bloodGroup,
    phone,
    email,
    company,
    ip,
  } = props?.studentData;

  return (
    <div className="userCard">
      <div className="gradient"></div>
      <div className="styl1"></div>
      <div className="styl2"></div>
      <div className="styl3"></div>
      <div className="profileBox">
        <div className="profile_header">
          <img src={image} alt="" />
          <h2>{firstName + " " + lastName}</h2>
          <p>{company?.department}</p>
        </div>
        <div className="employee_details">
          <p>
            <span>ID NO </span> : {ip}
          </p>
          <p>
            <span>POSITION</span> : {company?.title}
          </p>
          <p>
            <span>DOB</span> : {birthDate}
          </p>
          <p>
            <span>BLOOD</span> : {bloodGroup}
          </p>
          <p>
            <span>PHONE</span> : {phone}
          </p>
          <p>
            <span>EMAIL</span> : {email}
          </p>
        </div>
        <div className="contactBtn">
          <a href={"mailto:" + email}>Contact me</a>
        </div>
      </div>
      <div className="design1"></div>
      <div className="design2"></div>
    </div>
  );
};

export default EmployeeCard;
