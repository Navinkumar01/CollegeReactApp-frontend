import { CollegeItem  } from "../college-item/CollegeItem"

export const CollegeList = ({ colleges, handleTodoDelete }) => {
      const onCollegeDelete = (collegeId) => {
        handleTodoDelete(collegeId);
      };
      return (
        <ul className="todo-list">
          {colleges.map((college) => (
            <CollegeItem  college={college} key={college._id} onCollegeDelete={onCollegeDelete} />
          ))}
        </ul>
      );
    };
  
