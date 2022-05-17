import './InterestDescription.css'

const InterestDescription = ({ active, id, description }) => {
    return (
        <div className={id === active ? 'description-container' : 'hidden-description'}>
            <p>
                {description}
            </p>
        </div>
    )
}

export default InterestDescription