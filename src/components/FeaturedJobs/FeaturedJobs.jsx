import axios from 'axios'
import { useEffect, useState } from 'react'
import Job from '../Job/Job'

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([])
  const [dataLength, setDataLength] = useState(4)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/jobs.json')
        const data = res.data
        setJobs(data)
      } catch (err) {
        console.log(err)
      }
    }

    // call the function to fetch data
    fetchData()
  }, [])

  return (
    <div
      className="text-center my-8 space-y-10 mb-12
        "
    >
      <div className='space-y-4'>
        <h2 className="text-5xl font-semibold">Featured Jobs</h2>
        <p className="text-gray-400 text-sm">
          Explore thousands of job opportunities with all the information you
          need.Its easy to find your dream job here.
        </p>
      </div>

      {/* jobs container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      {/* Load more button*/}
      <div className={`mt-6 ${dataLength === jobs.length && 'hidden'}`}>
        <button
          onClick={() => setDataLength(jobs.length)}
          className="btn btn-primary px-6"
        >
          View More
        </button>
      </div>
    </div>
  )
}

export default FeaturedJobs
