import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { IoLocationOutline } from 'react-icons/io5'
import { AiOutlineDollar } from 'react-icons/ai' 


const AppliedJobDetails = ({ job }) => {
  const {
    id,
    job_title,
    logo,
    location,
    company_name,
    remote_or_onsite,
    job_type,
    salary,
  } = job

  const navigate = useNavigate()

  return (
    <div className="flex flex-col md:flex-row p-3 rounded-lg justify-between w-full lg:w-3/4 items-center bg-base-100 shadow-xl pr-3">
      <div className="flex flex-col gap-8 md:flex-row">
        <figure className="px-10 pt-10 bg-slate-200 rounded flex items-center justify-center">
          <img
            src={logo}
            alt={job_title}
            className="rounded-xl w-[200px] h-[100px] justify-self-start"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl font-bold">{job_title}</h2>
          <p className="text-lg font-medium text-gray-700">{company_name}</p>

          <div className="flex gap-4 my-4">
            <button className="btn btn-outline px-6 btn-primary">
              {remote_or_onsite}
            </button>
            <button className="btn btn-outline btn-primary px-6">
              {job_type}
            </button>
          </div>

          <div className="flex items-center gap-6 text-base font-semibold text-gray-700">
            <div className="flex items-center gap-1">
              <IoLocationOutline />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-1">
              <AiOutlineDollar />
              <span>{salary}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <button
          onClick={() => navigate(`/job/${id}`)}
          className="btn btn-primary"
        >
          View Details
        </button>
      </div>
    </div>
  )
}

AppliedJobDetails.propTypes = {
  job: PropTypes.object.isRequired,
}

export default AppliedJobDetails
