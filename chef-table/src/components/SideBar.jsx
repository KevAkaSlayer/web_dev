import PropType from 'prop-types';

const SideBar = ({recipeQ}) => {
    return (
        <div className="md:w-1/3">
            <h3>Want To Cook : {recipeQ.length}</h3>
        </div>
    );
};

SideBar.propTypes = {
    recipeQ: PropType.array
}

export default SideBar;