import React, { useRef, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const EnrollNow = () => {
    const Url = "https://flutter-backend-all-api.onrender.com/api/v1/CourseEnrollmentConfirmationEmail";

    const nameRef = useRef<HTMLInputElement>(null);
    const instituteRef = useRef<HTMLInputElement>(null);
    const addressRef = useRef<HTMLInputElement>(null);
    const mobileRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const photoRef = useRef<HTMLInputElement>(null);

    const [preview, setPreview] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setPreview(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const resetForm = () => {
        nameRef.current!.value = '';
        instituteRef.current!.value = '';
        addressRef.current!.value = '';
        mobileRef.current!.value = '';
        emailRef.current!.value = '';
        if (photoRef.current) photoRef.current.value = '';
        setPreview(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const data = {
            fullName: nameRef.current?.value || '',
            instituteName: instituteRef.current?.value || '',
            address: addressRef.current?.value || '',
            mobile: mobileRef.current?.value || '',
            email: emailRef.current?.value || '',
            photoUrl: preview || '',
            notifyEmail: "adibrasel.2022@gmail.com"
        };

        try {
            // const response = await axios.post(Url, data);
            await axios.post(Url, data);


            // Success message
            Swal.fire({
                title: "Congratulations!",
                text: `Your enrollment was successful. Please check your email at ${emailRef.current?.value} for confirmation.`,
                icon: "success",
                confirmButtonColor: "#0d6efd"
            });

            resetForm();
        } catch (error) {
            console.error(error);

            // Error message
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Please Try Again</a>',
                confirmButtonColor: "#dc3545"
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="EnrollNow" className="py-5" style={{ backgroundColor: 'rgb(13 110 253 / 9%)', marginTop: "20px" }}>
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="fw-bold display-5" style={{ textAlign: 'center', color: '#0d47a1' }}>
                        Join the Course
                    </h2>
                    <p className="text-muted fs-5">Fill out the form to secure your spot in the course.</p>
                </div>

                <div className="mx-auto p-4 p-md-5 bg-white bg-opacity-75 rounded-4 shadow-lg"
                    style={{
                        maxWidth: '900px',
                        backdropFilter: 'blur(6px)',
                        border: '1px solid rgba(0,0,0,0.05)'
                    }}
                >
                    <form className="row g-4" onSubmit={handleSubmit}>
                        <div className="col-md-6">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input type="text" className="form-control form-control-lg rounded-pill shadow-sm px-4" id="name" placeholder="Full Name..." ref={nameRef} required />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="institute" className="form-label">Institute Name</label>
                            <input type="text" className="form-control form-control-lg rounded-pill shadow-sm px-4" id="institute" placeholder="Institute Name..." ref={instituteRef} required />
                        </div>

                        <div className="col-12">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input type="text" className="form-control form-control-lg rounded-pill shadow-sm px-4" id="address" placeholder="Address..." ref={addressRef} required />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="mobile" className="form-label">Mobile Number</label>
                            <input type="tel" className="form-control form-control-lg rounded-pill shadow-sm px-4" id="mobile" placeholder="01XXXXXXXXX" ref={mobileRef} required />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input type="email" className="form-control form-control-lg rounded-pill shadow-sm px-4" id="email" placeholder="Email Address..." ref={emailRef} required />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="photo" className="form-label">Upload Your Photo</label>
                            <input type="file" className="form-control form-control-lg rounded-pill shadow-sm px-4" id="photo" accept="image/*" ref={photoRef} onChange={handleImageChange} />
                        </div>

                        {preview && (
                            <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                                <label className="form-label">Preview</label>
                                <img src={preview} alt="Preview" className="rounded-circle shadow" style={{ width: '120px', height: '120px', objectFit: 'cover', border: '4px solid #0d6efd' }} />
                            </div>
                        )}

                        <div className="col-12 text-center mt-4">
                            <button type="submit" className="btn btn-primary btn-lg px-5 rounded-pill shadow-sm" disabled={loading}>
                                {loading ? "Submitting..." : "Submit"}
                            </button>
                        </div>

                        <div className="col-12 mt-4">
                            <div className="alert alert-info text-center fs-5 rounded-3 shadow-sm">
                                Course Fee: <strong>৳12,000</strong><br />
                                <span className="text-muted">
                                    Please pay the fee directly at our office to confirm your enrollment.
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default EnrollNow;
