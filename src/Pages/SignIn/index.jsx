import { Layout } from "../../Components/Layout"
import { Button } from "../../Components/Button"
import { Input } from "../../Components/Input"
import { useContext, useState, useRef } from "react"
import { Link, Navigate } from "react-router-dom"
import { shoppingCartContext } from "../../Context/context"

function SignIn() {

    const context = useContext(shoppingCartContext)
    const [view, setView] = useState('user-info')
    const form = useRef(null)

      // Account
    const account = localStorage.getItem('account')
    const parsedAccount = JSON.parse(account)
    // Has an account
    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
    const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState


    const handleSingIn = () => {
        const stringifiedSignOut = JSON.stringify(false)
        localStorage.setItem('sign-out', stringifiedSignOut)
        context.setSignOut(false)
        // redirect
        return <Navigate replace to ={'/'}/>
    }

    const createAnAccount = () => {
        const formData = new FormData(form.current)
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password')
        }

        //create account
        const stringifiedAccount = JSON.stringify(data)
        localStorage.setItem('account', stringifiedAccount)
        context.setAccount(data)
        handleSingIn()
    }


    const renderLogIn = () => {
        return (
            <div className='flex flex-col w-80'>
                <p>
                    <span className='font-body text-sm text-ink/60'>Email: </span>
                    <span className='font-mono text-sm'>{parsedAccount?.email}</span>
                </p>
                <p>
                    <span className='font-body text-sm text-ink/60'>Password: </span>
                    <span className='font-mono text-sm'>{parsedAccount?.password}</span>
                </p>
                <Link to="/" className='mt-4 mb-2'>
                    <Button
                    onClick={() => handleSingIn()}
                    disabled={!hasUserAnAccount}>
                    Log in
                    </Button>
                </Link>
                <div className='text-center'>
                    <a className='font-body text-xs underline underline-offset-4 text-ink/60' href='/'>Forgot my password</a>
                </div>
                <div className='mt-6'>
                    <Button
                        variant='secondary'
                        onClick={() => setView('create-user-info')}
                        disabled={hasUserAnAccount}>
                        Sign up
                    </Button>
                </div>
        </div>
        )
    }

    const renderCreateUserInfo = () => {
        return (
            <form ref={form} className='flex flex-col gap-4 w-80'>
                <Input label="Your name:" name="name" type="text" defaultValue={parsedAccount?.name} placeholder="Peter" />
                <Input label="Your email:" name="email" type="text" defaultValue={parsedAccount?.email} placeholder="hi@helloworld.com" />
                <Input label="Your password:" name="password" type="text" defaultValue={parsedAccount?.password} placeholder="******" />
            <Link to="/">
                <Button onClick={() => createAnAccount()}>
                Create
                </Button>
            </Link>
        </form>
        )
    }

    const renderView = () => view === 'create-user-info' ? renderCreateUserInfo() : renderLogIn()

return (
    <Layout>
        <h1 className="font-display text-xl text-center mb-6 w-80">Welcome</h1>
        {renderView()}
    </Layout>
)
}

export default SignIn