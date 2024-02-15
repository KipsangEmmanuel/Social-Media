import Joi from 'joi';

export const validateRegisterUser = (user)=>{
  const validateUserSchema=Joi.object().keys({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(
        new RegExp(
            "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$"
        )
        )
    });
    return validateUserSchema.validate(user)
}

export const userLoginValidator = (user) => {
    const userLoginValidatorSchema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().min(4).required()
    })

    return userLoginValidatorSchema.validate(user);
}


