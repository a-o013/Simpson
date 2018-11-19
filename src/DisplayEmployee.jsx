import  React  from  'react';


const  DisplayEmployee = ({ employee }) => {
    return (
        <div  className="DisplayEmployee">
            <img  src={employee.image}  alt="picture"  />
            <ul>
                <li>{employee.gender}</li>
                <li>
                    {employee.quote}  
                </li>
                <li>{employee.character}</li>
                
            </ul>
        </div>
    );
};

export  default  DisplayEmployee;