import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Interest.css'

const Interest = ({ active, id, icon, name }) => {
    return (
        <div className={id === active ? 'interest-icon icon-active' : 'interest-icon'}>
            <FontAwesomeIcon icon={icon} />
            <p>{name}</p>
        </div>
    )
}

export default Interest