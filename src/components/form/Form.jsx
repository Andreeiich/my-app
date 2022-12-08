import { useForm } from "react-hook-form";
import React from "react";
import style from "./form.module.css"
import axios from "axios";

export default function Form(){

  const { register, handleSubmit,formState:{errors} } = useForm();
  const onSubmit = (data) => {
    axios.post(`https://637f91cc2f8f56e28e904eb7.mockapi.io/form`, data)
    alert("Заявка отправлена")
  }


    return(

        <div className={style.form}>
            <form id="form" onSubmit={handleSubmit(onSubmit)}>
                <h1>Заполните заявку на обратный звонок</h1>
                <div>
                <div className="input-group mb-3">
                    <input {...register("lastName",{
                          required:true,
                          maxLength:50,
                          pattern: /^[А-Яа-я]+$/i 
                    })}
                    type="text" className="form-control"                 placeholder="Фамилия">
                    </input>


                </div>
                {errors?.firstName?.type === "required" &&(<p>Поле Имя обязательно для заполнения</p>)}
                    {errors?.firstName?.type === "maxLength" &&(<p> Имя не может содержать более 50 символов</p>)
                    }
                    {errors?.firstName?.type === "pattern" &&(<p>Поле заполнено не корректно</p>)}

                    <div className="input-group mb-3">
                    <input {...register("firstName",{
                          required:true,
                          maxLength:50,
                          pattern: /^[А-Яа-я]+$/i 
                    })}
                    type="text" className="form-control"                 placeholder="Имя">
                    </input>


                </div>
                {errors?.patronymic?.type === "required" &&(<p>Поле Отчетство обязательно для заполнения</p>)}
                    {errors?.patronymic?.type === "maxLength" &&(<p> Отчество не может содержать более 50 символов</p>)
                    }
                    {errors?.patronymic?.type === "pattern" &&(<p>Поле заполнено не корректно</p>)}

                    <div className="input-group mb-3">
                    <input {...register("patronymic",{
                          required:true,
                          maxLength:50,
                          pattern: /^[А-Яа-я]+$/i 
                    })}
                    type="text" className="form-control"          placeholder="Отчество">
                    </input>
                   
                </div>

                  

                {errors?.lastName?.type === "required" &&(<p>Поле Фамилия обязательно для заполнения</p>)}  {errors?.lastName?.type === "maxLength" &&(<p> Фамилия не может содержать более 50 символов</p>)
                    }
                    {errors?.lastName?.type === "pattern" &&(<p>Поле заполнено не корректно</p>)}
                    <div className="input-group mb-3"> 
                     <input
                     {...register("email", {
                            required: true,
                            maxLength: 50,
                            pattern: /^[A-Za-z@._-]+$/i 
                     })}
                     type="text"
                     className="form-control"
                     placeholder="Email"
                    />
                </div>
               
                
               

                </div>
                <div>
                    <input className="btn btn-outline-primary" type="submit"/> 
                </div>
            </form>
        </div>

    )


}