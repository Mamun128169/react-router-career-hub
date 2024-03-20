import { useNavigate, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  const navigate = useNavigate()

  const handleGoHome = () => {
    navigate('/')
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold">Oops!</h1>
        <p className="text-xl font-medium text-gray-500">
          Sorry, an unexpected error has occurred.
        </p>
        <h2 className="text-2xl font-bold text-gray-700">{error.statusText}</h2>
        {/* <i className="mt-5 text-xl">{error.error.message}</i> */}
        <div>
        <button onClick={handleGoHome} className="btn btn-outline btn-primary">Go Home</button>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
