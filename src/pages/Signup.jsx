import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div>
            <section className="min-h-screen flex justify-center items-center">
                            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                                <div className="card-body p-10">
                                    <h2 className="text-2xl text-center font-semibold">SignUp You Acount</h2>
                                    <from className="from">
                                        <label className="label">Name</label>
                                        <input type="text" className="input" placeholder="Name" />

                                        <label className="label">Photo-Url</label>
                                        <input type="text" className="input" placeholder="Photo-Url" />

                                        <label className="label">Email</label>
                                        <input type="email" className="input" placeholder="Email" />

                                        <label className="label">Password</label>
                                        <input type="password" className="input" placeholder="Password" />
                                        
                                        <div></div>
                                        <button className="btn btn-neutral mt-4">Login</button>
                                    </from>
                                    <p className="text-center font-semibold text-gray-400">Have An Account ? <Link className="text-red-600" to="/auth/login">Login</Link></p>
                                </div>
                            </div>
                        </section>
        </div>
    );
};

export default Signup;