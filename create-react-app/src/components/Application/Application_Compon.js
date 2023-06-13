import React, { Component } from "react";
import { Form } from 'semantic-ui-react';

export default class Apps extends Component {
    // Component state
    state = {
        formError: false,
        formSuccess: false,
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        userName: '',
        email: '',
        address: '',
        country: '',
        state: '',
        zip: '',
        marital: '',
        areaCode: '+1',
        phone: '',
        comment: '',
    };

    // Event handler for input changes
    handleChange = (event) => {
        const { name, value } = event.target;

        if (name === "areaCode") {
            this.setState({ areaCode: value });
        } else {
            this.setState({ [name]: value });
        }
    };

    // Event handler for form submission
    submitHandler = (event) => {
        event.preventDefault();
        console.log("Submit button clicked");
        const { firstName, lastName, age, gender, userName, email, address, country, state, zip, marital, areaCode, phone, comment, } = this.state;
        if (firstName.trim() === '' || lastName.trim() === '' || age.trim() === '' || gender.trim() === ''
            || userName.trim() === '' || email.trim() === '' || address.trim() === '' || country.trim() === '' || state.trim() === ''
            || zip.trim() === '' || marital.trim() === '' || areaCode.trim() === '' || phone.trim() === '' || comment.trim() === '') {
            this.setState({ formError: true, formSuccess: false });
        } else {
            console.log("Form submitted successfully");
            this.setState({ formError: false, formSuccess: true });
        }
    };

    // Render method
    render() {
        const {
            formError,
            formSuccess,
            firstName,
            lastName,
            age,
            gender,
            userName,
            email,
            address,
            country,
            state,
            zip,
            marital,
            areaCode,
            phone,
            comment,
        } = this.state;
        return (
            <div>
                <div>
                    <div>
                        <main id="application">
                            <section className="bg-color" style={{ fontSize: "1em" }}>
                                <div className="container">
                                    <h2>Application Form</h2>
                                    <p className="lead">
                                        Please fill in this application form to adopt a cute pet for you.
                                    </p>
                                    <div className="py-5 text-left">
                                        <div className="row g-3">
                                            <div className="col-md-7 col-lg-8" style={{ margin: '0 auto' }}>
                                                <h3 className="mb-3">Adopter Information</h3>
                                                <Form>
                                                    <div className="row g-3">
                                                        <div className="col-md-6">
                                                            <label htmlFor="firstName" className="form-label">First name</label>
                                                            <input type="text" className="form-control" id="firstName" placeholder="" name="firstName" aria-label="firstName"
                                                                value={firstName} required onChange={this.handleChange} />
                                                            <div className="invalid-feedback">
                                                                Valid first name is required.
                                                            </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <label htmlFor="lastName" className="form-label">Last name</label>
                                                            <input type="text" className="form-control" id="lastName" placeholder="" name="lastName" aria-label="lastName" value={lastName}
                                                                required onChange={this.handleChange} />
                                                            <div className="invalid-feedback">
                                                                Valid last name is required.
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <label htmlFor="gender" className="form-label">Gender</label>
                                                            <select className="form-select" id="gender" name="gender" aria-label='gender' value={gender}
                                                                required onChange={this.handleChange}>
                                                                <option value="">Choose...</option>
                                                                <option>Male</option>
                                                                <option>Female</option>
                                                                <option>Prefer Not To Tell</option>
                                                            </select>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <label htmlFor="age" className="form-label">Age</label>
                                                            <input type="text" className="form-control" id="age" name="age" placeholder="" aria-label="age" value={age}
                                                                required onChange={this.handleChange} />
                                                        </div>

                                                        <div className="col-12">
                                                            <label htmlFor="username" className="form-label">Username</label>
                                                            <div className="input-group has-validation">
                                                                <input type="text" className="form-control" id="username" placeholder="Username" name="userName" aria-label="username"
                                                                    value={userName} required onChange={this.handleChange} />
                                                                <div className="invalid-feedback">
                                                                    Your username is required.
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-12">
                                                            <label htmlFor="email" className="form-label">Email<span
                                                                className="text-body-secondary"></span></label>
                                                            <input type="email" className="form-control" id="email" placeholder="@example.com" name="email" aria-label="email" value={email}
                                                                required onChange={this.handleChange} />
                                                            <div className="invalid-feedback">
                                                                Please enter a valid email address for shipping updates.
                                                            </div>
                                                        </div>

                                                        <div className="col-12">
                                                            <label htmlFor="address" className="form-label">Address</label>
                                                            <input type="text" className="form-control" id="address" placeholder="1234 Main St" name="address" aria-label="fill in your address"
                                                                value={address} required onChange={this.handleChange} />
                                                            <div className="invalid-feedback">
                                                                Please enter your shipping address.
                                                            </div>
                                                        </div>

                                                        <div className="col-12">
                                                            <label htmlFor="address2" className="form-label">Address 2 <span
                                                                className="text-body-secondary">(Optional)</span></label>
                                                            <input type="text" className="form-control" id="address2" aria-label="fill in your address2 optional"
                                                                placeholder="Apartment or suite" />
                                                        </div>

                                                        <div className="col-md-3">
                                                            <label htmlFor="country" className="form-label">Country</label>
                                                            <select className="form-select" id="country" name="country" aria-label="select country" value={country}
                                                                required onChange={this.handleChange}>
                                                                <option value="">Choose...</option>
                                                                <option>United States</option>
                                                            </select>
                                                            <div className="invalid-feedback">
                                                                Please select a valid country.
                                                            </div>
                                                        </div>

                                                        <div className="col-md-3">
                                                            <label htmlFor="state" className="form-label">State</label>
                                                            <select className="form-select" id="state" name="state" aria-label="Select state" value={state}
                                                                required onChange={this.handleChange}>
                                                                <option value="">Choose...</option>
                                                                <option>California</option>
                                                                <option>Washington</option>
                                                                <option>Florida</option>
                                                                <option>Michigan</option>
                                                                <option>Ohio</option>
                                                                <option>New York</option>
                                                            </select>
                                                            <div className="invalid-feedback">
                                                                Please provide a valid state.
                                                            </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <label htmlFor="zip" className="form-label">Zip Code</label>
                                                            <input type="text" className="form-control" id="zip" name="zip" aria-label="Zip code" placeholder="" value={zip}
                                                                required onChange={this.handleChange} />
                                                            <div className="invalid-feedback">
                                                                Zip code required.
                                                            </div>
                                                        </div>

                                                        <div className="col-md-12">
                                                            <label htmlFor="marital" className="form-label">Marital Status</label>
                                                            <select className="form-select" id="marital" name="marital" aria-label="select marital status" value={marital}
                                                                required onChange={this.handleChange}>
                                                                <option value="">Choose...</option>
                                                                <option>Single</option>
                                                                <option>Married</option>
                                                                <option>Widowed</option>
                                                                <option>Divorced</option>
                                                            </select>
                                                        </div>

                                                        <div className="col-md-3">
                                                            <label htmlFor="areaCode" className="form-label">Area Code<span
                                                                className="text-body-secondary"></span></label>
                                                            <select className="form-select" id="areaCode" name="areaCode" value={areaCode} aria-label="areaCode"
                                                                required onChange={this.handleChange}>
                                                                <option>+1</option>
                                                                <option>+86</option>
                                                            </select>
                                                        </div>

                                                        <div className="col-md-9">
                                                            <label htmlFor="phone" className="form-label"><span className="text-body-secondary"></span>Phone Number</label>
                                                            <input type="text" className="form-control" id="phone" name="phone" aria-label="enter phone number" placeholder="phone" value={phone} required onChange={this.handleChange} />
                                                            <div className="invalid-feedback">
                                                                Your phone number is required.
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="row mid-3">
                                                            <div className="col-md-12 text-left mt-4">
                                                                <label htmlFor="comment" className="form-label">Tell us something about your
                                                                    previous experience with pets and why you want to adopt a pet.</label>
                                                                <textarea className="form-control" name="comment" id="comment" aria-label="comment" value={comment}
                                                                    required onChange={this.handleChange}></textarea>
                                                                <div className="invalid-feedback">
                                                                    Comment is required.
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <hr className="my-4" />

                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="same-address" />
                                                        <label className="form-check-label" htmlFor="same-address" aria-label="save address">Shipping address is the same as
                                                            my billing address</label>
                                                    </div>

                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="save-info" />
                                                        <label className="form-check-label" htmlFor="save-info" aria-label="save information">Save this information for next
                                                            time</label>
                                                    </div>

                                                    <hr className="my-4" />

                                                    <div className="d-flex justify-content-center">
                                                        <button className="btn btn-primary btn-lg" type="submit" aria-label="submit" onClick={this.submitHandler.bind(this)}>Submit Application</button>
                                                    </div>
                                                </Form>
                                                {formSuccess ? (
                                                    <div className="alert alert-success" role="alert">
                                                        Your form has been submitted successfully!
                                                    </div>
                                                ) : null}
                                                {formError ? (
                                                    <div className="alert alert-danger" role="alert">
                                                        Missing fields! All fields must be filled.
                                                    </div>
                                                ) : null}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </main>
                    </div>
                </div>

            </div>
        )
    }
}
