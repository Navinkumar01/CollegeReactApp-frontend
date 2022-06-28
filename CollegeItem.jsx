import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

export const CollegeItem = ({ college, onCollegeDelete }) => {
    const handleCollegeDelete = ()=>{
        onCollegeDelete(college._id);
    }
    return (
        <li
          key={college._id}
          className={`college-item ${college.isCompleted ? "college-item--completed" : ""}`}
          >
            <div className="college-content">
            {college.college}
          </div>
          <div className="college-action">
            <Link to={"/colleges/" + college._id}>
              <FontAwesomeIcon icon={faPen} />
            </Link>
            <button onClick={handleCollegeDelete} className="btn-delete">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </li>
      );
    }



