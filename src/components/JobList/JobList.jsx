import PropTypes from 'prop-types'

const JobList = ({list}) => {
    const {logo, category_name, availability } = list;

    return (
        <div className='w-[280px] bg-violet-50 py-6 pr-10 pl-5 rounded-md '>
            <img className='w-[60px] h-[40px]' src={logo} alt={category_name} />
            <div className='text-left mt-5'>
                <h3 className='text-lg font-medium'>{category_name}</h3>
                <p className='text-sm text-gray-500 font-medium'>{availability}</p>
            </div>
        </div>
    );
};

JobList.propTypes = {
    list: PropTypes.object.isRequired,
}

export default JobList;