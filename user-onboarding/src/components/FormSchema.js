import * as yup from "yup";

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required("We Need Your Name For Your Profile"),
    username: yup
        .string()
        .trim()
        .required("Give Yourself A Sweet Gamer Tag")
        .min(3, "Let's Add More Than 3 Chars"),
    email: yup
        .string()
        .trim()
        .email("Valid Email Needed")
        .required("Email is necessary"),
    password: yup
        .string()
        .trim()
        .required("Keep your gaming protected! Password needed")
        .min(3, "Let's Add More Than 3 Chars"),
    genre: yup
        .string(),
    choice: yup
        .string(),
    tos: yup
        .boolean()
        .oneOf([true], "You Must Agree To Advance")
})

export default formSchema;