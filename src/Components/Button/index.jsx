import PropTypes from 'prop-types'

const variants = {
    primary: 'bg-accent text-paper hover:bg-accent/90 disabled:bg-ink/20 disabled:text-ink/40',
    secondary: 'border border-ink text-ink hover:bg-ink hover:text-paper disabled:border-ink/30 disabled:text-ink/30 disabled:hover:bg-transparent disabled:hover:text-ink/30',
}

const Button = ({children, variant = 'primary', className = '', ...props}) => {
    return (
        <button
            className={`font-mono uppercase tracking-wide text-sm w-full rounded-lg py-3 transition-colors duration-200 ${variants[variant]} ${className}`}
            {...props}>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary']),
    className: PropTypes.string,
}

export {Button}
