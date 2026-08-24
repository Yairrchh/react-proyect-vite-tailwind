import PropTypes from 'prop-types'

const Input = ({label, name, ...props}) => {
    return (
        <div className='flex flex-col gap-1'>
            <label htmlFor={name} className='font-body text-sm text-ink/70'>{label}</label>
            <input
                id={name}
                name={name}
                className='rounded-lg border border-line bg-paper placeholder:text-ink/40
                focus:outline-none focus:border-accent py-2 px-4 font-body'
                {...props}
            />
        </div>
    )
}

Input.propTypes = {
    label: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
}

export {Input}
