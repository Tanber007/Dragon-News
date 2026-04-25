import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <section className="min-h-screen flex justify-center items-center">
                <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                    <div className="card-body p-10">
                        <h2 className="text-2xl text-center font-semibold">LogIn You Acount</h2>
                        <from className="from">
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </from>
                        <p className="text-center font-semibold text-gray-400">Don't Have An Account ? <Link className="text-lime-700" to="/auth/signup">Resister</Link></p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;