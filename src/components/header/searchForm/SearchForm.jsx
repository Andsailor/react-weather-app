import React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"

import "./searchForm.scss"
import search from "../../../assets/search.png"

const SearchForm = ({ setWeatherLocation }) => {

    const formik = useFormik({
        initialValues: {
            location: ''
        },
        validationSchema: Yup.object({
            location: Yup.string().matches(/[^0-9]/g, "Numbers are not valid for this field").required("This field is required")
        }),
        onSubmit: values => {
            setWeatherLocation(values.location)
            values.location = ''
        }
    })
    return (
        <div className="search-form">
            <form
                onSubmit={formik.handleSubmit}>
                <div className="search-form-wrapper">
                    <input
                        placeholder="Назва міста"
                        onChange={formik.handleChange}
                        value={formik.values.location}
                        name='location'
                        type="text" />
                    <button type="submit">
                        <img src={search} alt="search trigger button" />
                    </button>
                </div>
            </form>
            {formik.errors.location && formik.touched.location ? (
                <div className="error">{formik.errors.location}</div>
            ) : null}
        </div>
    )
}

export default SearchForm