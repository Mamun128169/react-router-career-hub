import PropTypes from 'prop-types'
import { IoLocationOutline } from 'react-icons/io5'
import { AiOutlineDollar } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

const Job = ({ job }) => {
  // console.log(job);
  const {
    id,
    logo,
    job_title,
    job_type,
    remote_or_onsite,
    company_name,
    location,
    salary,
  } = job
  return (
    <div className="flex flex-col card card-compact bg-base-100 shadow-xl">
      <figure className="flex p-2">
        <img
          src={logo}
          className="h-[50px] w-[40%] justify-self-start"
          alt={company_name}
        />
      </figure>
      <div className="card-body text-left space-y-2">
        <h2 className="card-title text-xl font-bold">{job_title}</h2>
        <p className="text-lg font-medium text-gray-700">{company_name}</p>

        <div className="flex gap-4">
          <button className="btn btn-outline px-6 btn-primary">{remote_or_onsite}</button>
          <button className="btn btn-outline btn-primary px-6">
            {job_type}
          </button>
        </div>

        <div className='flex items-center gap-6 text-base font-semibold text-gray-700'>
          <div className='flex items-center gap-1'>
            <IoLocationOutline />
            <span>{location}</span>
          </div>
          <div className='flex items-center gap-1'>
            <AiOutlineDollar /> 
            <span>{salary}</span>
          </div>
        </div>

        <div className="card-actions">
          <NavLink to={`/job/${id}`}>
            <button className="btn btn-primary px-7">View Details</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

Job.propTypes = {
  job: PropTypes.object.isRequired,
}

export default Job
