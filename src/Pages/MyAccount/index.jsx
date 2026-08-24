import { useContext, useState, useRef } from 'react'
import { shoppingCartContext } from '../../Context/context'
import { Layout } from '../../Components/Layout'
import { Button } from '../../Components/Button'
import { Input } from '../../Components/Input'

function MyAccount() {
    const context = useContext(shoppingCartContext)
    const [view, setView] = useState('user-info')
    const account = localStorage.getItem('account')
    const parsedAccount = JSON.parse(account)
    const form = useRef(null)

const editAccount = () => {
    const formData = new FormData(form.current)
		const data = {
			name: formData.get('name'),
			email: formData.get('email'),
			password: formData.get('password')
		}

    // Update account
    const stringifiedAccount = JSON.stringify(data)
    localStorage.setItem('account', stringifiedAccount)
    context.setAccount(data)
}

const renderUserInfo = () => {
return (
    <div className='flex flex-col w-80'>
    <p>
        <span className='font-body text-sm text-ink/60'>Name: </span>
        <span className='font-mono text-sm'>{parsedAccount?.name}</span>
    </p>
    <p>
        <span className='font-body text-sm text-ink/60'>Email: </span>
        <span className='font-mono text-sm'>{parsedAccount?.email}</span>
    </p>
    <div className='mt-6'>
        <Button variant='secondary' onClick={() => setView('edit-user-info')}>
            Edit
        </Button>
    </div>
    </div>
)
}

const renderEditUserInfo = () => {
return (
    <form ref={form} className='flex flex-col gap-4 w-80'>
        <Input label="Your name:" name="name" type="text" defaultValue={parsedAccount.name} placeholder="Peter" />
        <Input label="Your email:" name="email" type="text" defaultValue={parsedAccount.email} placeholder="hi@helloworld.com" />
        <Input label="Your password:" name="password" type="text" defaultValue={parsedAccount.password} placeholder="******" />
    <Button onClick={() => {setView('user-info'), editAccount()}}>
        Save
    </Button>
    </form>
)
}

const renderView = () => view === 'edit-user-info' ? renderEditUserInfo() : renderUserInfo()

return (
<Layout>
    <h1 className="font-display text-xl text-center mb-6 w-80">My account</h1>
    {renderView()}
</Layout>
)
}

export default MyAccount