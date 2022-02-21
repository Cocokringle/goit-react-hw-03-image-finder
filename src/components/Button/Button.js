import PropTypes from 'prop-types';
import s from './Button.module.css'

export default function LoadMoreButton ({onClickMoreBtn})  {
	
    return (
        <div className={s.LoadMoreButtonBox}>
            <button 
            type='button'
            onClick={() => onClickMoreBtn()}
            className={s.Button}
            >Load More</button>
        </div>
    );
    

	
}

LoadMoreButton.propTypes = {
    onClickMoreBtn: PropTypes.func.isRequired,
}