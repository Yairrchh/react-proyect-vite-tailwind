import { Layout } from "../../Components/Layout"

function SignIn() {
return (
    <Layout>
        <div className="div-login h-screen w-full flex justify-center text-xl mt-7">
            <div className="cover bg-white w-72 h-96 border-4 rounded-lg shadow-inner border-slate-300 flex
            flex-col items-center justify-around" >
                <h1>Sign in</h1>
                <input className="border rounded-sm border-gray-400 text-center font-light text-lg" type="text" placeholder="USERNAME"></input>
                <input  className="border rounded-sm border-gray-400 text-center font-light text-lg" type="password" placeholder="PASSWORD"></input>

                <div className="login-btn w-20 rounded-lg text-center cursor-pointer bg-green-400 text-lg">Login</div>
                <div className="bg-slate-300 w-40 rounded-lg text-center cursor-pointer text-lg">Create account</div>

                <p className="bg-blue-300 w-52 rounded-lg text-center text-lg">Or login using</p>

                <div className="alt-login w-40 h-26 justify-between flex flex-row">
                        <img className="h-14 w-14" src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-3-1.png" alt="Facebook" />
                        <img className="h-14 w-14" src="https://www.pngmart.com/files/16/official-Google-Logo-PNG-Image.png" alt="google" />
                </div>
            </div>
        </div>
    </Layout>
)
}

export default SignIn