import React from "react";
import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
  let course = props.course;
 let likeCourses =props.likeCourses;
 let setLikedCourses =props.setLikedCourses;

 function clickHandler(){ 
  if(likeCourses.includes(course.id)){
    //phelse se liked hua pda hai
    setLikedCourses((prev) => prev.filter((cid)=>(cid !== course.id )));
    toast.warning("like removed")
  }
  else{
    //insert kardo 
    if(likeCourses.length ===0){
      setLikedCourses([course.id]);
    }
    else{
      setLikedCourses((prev) => [...prev,course.id])
    }
    toast.success("Liked Sucessfully");
  }
 }
  return (
    <div className="w-[300px] bg-bgDark  rounded-sm overflow-hidden bg-opacity-80 ">
      <div className=" relative ">
        <img src={course.image.url}></img>
        <div className=" absolute w-[30px] h-[30px] bg-white rounded-full right-3 bottom-3 grid place-items-center">
          <button onClick={clickHandler}>
            
            {
              likeCourses.includes(course.id)? (<FcLike fontSize="1.25rem"></FcLike>)
              :(<FcLikePlaceholder fontSize="1.75rem"/>)
            }

          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-white font-semibold text-lg  leading-6">{course.title}
        </p>
        <p className="mt-2 text-white">
  {course.description.length > 100
    ? course.description.substr(0, 100) + '...'
    : course.description}
</p>

      </div>
    </div>
  );
};

export default Card;
