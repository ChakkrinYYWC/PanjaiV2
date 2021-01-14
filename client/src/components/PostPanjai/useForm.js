import React, { useEffect, useState } from "react";

const useForm = (initialFieldValues, setCurrentId) => {

    const [values, setValues] = useState(initialFieldValues)
    const [errors, setErrors] = useState({})
    const [file, setFile] = useState('')

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }


    const resetForm = () => {
        setValues(initialFieldValues)
        setErrors({})
        setFile('')
        setCurrentId(0)
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm,
        file,
        setFile,
    };
}

export default useForm;

