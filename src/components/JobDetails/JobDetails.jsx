import { useLoaderData, useParams } from 'react-router-dom'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { PiSubtitles } from 'react-icons/pi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveAppliedJobsToLS } from '../../Utilities/app';

const JobDetails = () => {
  const jobs = useLoaderData()
  const { currentId } = useParams()
  const intId = parseInt(currentId);
  const job = jobs.find((job) => job.id === parseInt(intId))

  const {
    job_title,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = job;

  const handleApplyNow = () => {
    saveAppliedJobsToLS(intId);
    toast(`Successfully Applied for the Job of ${job_title}`);
  }

  return (
    <div className="my-12">
      <h2 className="text-center text-3xl font-bold my-12">
        Job Details of : {job_title}
      </h2>
      <div className="grid grid-cols-4 gap-6 my-10 items-center">
        <div className="col-span-4 lg:col-span-3 space-y-6">
          <h3 className="text-lg font-black">
            Job Description:{' '}
            <span className="text-sm font-semibold text-gray-500">
              {job_description}
            </span>{' '}
          </h3>
          <h3 className="text-lg font-black">
            Job Responsibility:{' '}
            <span className="text-sm font-semibold text-gray-500">
              {job_responsibility}
            </span>{' '}
          </h3>

          <h3 className="text-lg font-black">Educational Requirements:</h3>
          <p className="text-sm text-gray-500 font-semibold">
            {educational_requirements}
          </p>
          <h3 className="text-lg font-black">Experience:</h3>
          <p className="text-sm text-gray-500 font-semibold">{experiences}</p>
        </div>
        <div className="col-span-4 lg:col-span-1">
          <div className="bg-violet-200 p-4 rounded-md ">
            <h2 className="text-xl font-bold border-gray-400 pb-6 border-b-2">
              Job Details
            </h2>
            <div className="my-5">
              <div className="flex items-center gap-1">
                <div>
                  <AiOutlineDollarCircle className="text-lg text-violet-500" />
                </div>
                <h2 className="text-lg font-bold">
                  Salary:
                  <span className="text-base font-medium text-gray-500">
                    {salary}
                  </span>
                </h2>
              </div>
              <div className="flex items-center gap-1">
                <div>
                  <PiSubtitles className="text-lg text-violet-500" />
                </div>
                <h2 className="text-lg font-bold">
                  Job Title:
                  <span className="text-base font-medium text-gray-500">
                    {job_title}
                  </span>
                </h2>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold border-gray-400 pb-6 border-b-2">
                Contact Information
              </h2>
              <div className="my-5">
                <div className="flex items-center gap-1">
                  <div>
                    <AiOutlineDollarCircle className="text-lg text-violet-500" />
                  </div>
                  <h2 className="text-lg font-bold">
                    Phone:
                    <span className="text-base font-medium text-gray-500">
                      {contact_information.phone}
                    </span>
                  </h2>
                </div>
                <div className="flex items-center gap-1">
                  <div>
                    <PiSubtitles className="text-lg text-violet-500" />
                  </div>
                  <h2 className="text-lg font-bold">
                    Email:
                    <span className="text-base font-medium text-gray-500">
                      {contact_information.email}
                    </span>
                  </h2>
                </div>
                <div className="flex items-center gap-1">
                  <div>
                    <PiSubtitles className="text-lg text-violet-500" />
                  </div>
                  <h2 className="text-lg font-bold">
                    Address:
                    <span className="text-base font-medium text-gray-500">
                      {contact_information.address}
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          {/* apply button */}
          <div className='mt-5 m'>
            <button 
              onClick={handleApplyNow} 
              className='btn btn-primary w-full'>
                Apply Now
            </button>
          </div>
        </div>
      </div>
      {/* react toast */}
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default JobDetails
