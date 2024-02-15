import Joi from 'joi';

export const validateRegisterUser = (user) => {
    const validateUserSchema = Joi.object().keys({
        Username: Joi.string().required(),
        Email: Joi.string().email().required(),
        Password: Joi.string()
            .pattern(
                new RegExp(
                    "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$"
                )
            )
            .required(),
        TagName: Joi.string().required(),
        Location: Joi.string().required(),
    });

    return validateUserSchema.validate(user);
};


export const userLoginValidator = (user) => {
    const userLoginValidatorSchema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().min(4).required()
    })

    return userLoginValidatorSchema.validate(user);
}


