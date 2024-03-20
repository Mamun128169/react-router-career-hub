const getAppliedJobs = () => {
    const applyJobsCart = localStorage.getItem("appliedJobs");
    if (applyJobsCart) {
        return JSON.parse(applyJobsCart);
    }
    return [];
}

const saveAppliedJobsToLS = id => {
    const appliedJobsId = getAppliedJobs();
    const existedJobsId = appliedJobsId.find(val => val === id);

    if (!existedJobsId) {
        appliedJobsId.push(id);
        localStorage.setItem("appliedJobs", JSON.stringify(appliedJobsId));
    }
}

export {getAppliedJobs, saveAppliedJobsToLS};