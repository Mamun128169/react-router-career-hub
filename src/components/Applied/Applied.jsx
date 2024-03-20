import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { getAppliedJobs } from '../../Utilities/app'
import AppliedJobDetails from '../AppliedJobDetails/AppliedJobDetails'

const Applied = () => {
  const jobs = useLoaderData()

  // applied jobs state
  const [totalAppliedJobs, setTotalAppliedJobs] = useState([])
  const [displayAppliedJobs, setDisplayAppliedJobs] = useState([])

  // get Applied jobs data from local storage
  useEffect(() => {
    let storedJobIds = getAppliedJobs();
    if (storedJobIds.length > 0) {
      // way 01;
      const appliedJobs = jobs.filter((job) => storedJobIds.includes(job.id))
      setTotalAppliedJobs(appliedJobs);
      setDisplayAppliedJobs(appliedJobs);

      // way 02;
      // const appliedJobs = [];
      // for (let id of storedJobIds) {
      //     const jobsMatched = jobs.find(job => job.id === id);

      //     if (jobsMatched) {
      //         appliedJobs.push(jobsMatched);
      //     }
      // }
      // setTotalAppliedJobs(appliedJobs);
    }
  }, [jobs])

  // filter methods event handlers
  const handleFilterSearch = filterText => {
    if (filterText === "all") {
        setDisplayAppliedJobs(totalAppliedJobs);
    } else if (filterText === "remote") {
        const remoteJobs = totalAppliedJobs.filter(job => job.remote_or_onsite === "Remote");
        setDisplayAppliedJobs(remoteJobs);
    } else if (filterText === "onsite") {
        const onsiteJobs = totalAppliedJobs.filter(job => job.remote_or_onsite !== "Remote");
        setDisplayAppliedJobs(onsiteJobs);
    }
  }

  return (
    <div className="my-12">
      <h2 className="text-center my-16 text-3xl font-bold">
        Applied Jobs: {totalAppliedJobs.length}{' '}
      </h2>
      {/* filter dropdown */}
      <div className='flex w-full my-5 justify-end'>
        <details className="dropdown">
          <summary className="m-1 btn">Filter Jobs</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handleFilterSearch("all")}>
              <a>All</a>
            </li>
            <li onClick={() => handleFilterSearch("remote")}>
              <a>Remote</a>
            </li>
            <li onClick={() => handleFilterSearch("onsite")}>
              <a>Onsite</a>
            </li>
          </ul>
        </details>
      </div>
      <div></div>
      <div className="space-y-6 flex flex-col items-center">
        {displayAppliedJobs.map((job) => (
          <AppliedJobDetails key={job.id} job={job}></AppliedJobDetails>
        ))}
      </div>
    </div>
  )
}

export default Applied
