import { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'




const UpdateJob = () => {
  const { user } = useContext(AuthContext)
  const { id } = useParams()
  const [startDate, setStartDate] = useState(new Date())
  const [job, setJob] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    fetchJob()
  }, [id])

  const fetchJob = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/job/${id}`);
      setJob(data);
      setStartDate(new Date(data.deadline))
    } catch (error) {
      console.error('Failed to fetch job:', error);
    }
  };

  


  const handleSubmit = async e => {
    e.preventDefault()
    const title = e.target.job_title.value
    const email = e.target.email.value
    const deadline = startDate
    const category = e.target.category.value
    const minPrice = e.target.min_price.value
    const maxPrice = e.target.max_price.value
    const description = e.target.description.value

    const formData = {
      title,
      buyer: {
        email,
        name: user.displayName,
        photo: user.photoURL
      },
      deadline,
      category,
      minPrice,
      maxPrice,
      description,
      bid_count:job.bid_count,
    }
    try{
      await axios.put(`${import.meta.env.VITE_API_URL}/updateJob/${id}`, formData)
      toast.success('data updated  Successfully')
      navigate('/my-posted-jobs')
    }catch(error){
      toast.error(error.message)
    }


  }



  return (
    <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
      <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
        <h2 className='text-lg font-semibold text-gray-700 capitalize '>
          Update a Job
        </h2>

        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            <div>
              <label className='text-gray-700 ' htmlFor='job_title'>
                Job title
              </label>
              <input
                id='job_title'
                name='job_title'
                type='text'
                defaultValue={job.title}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='emailAddress'>
                Email Address
              </label>
              <input
                id='emailAddress'
                type='email'
                name='email'
                disabled
                defaultValue={user?.email}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            <div className='flex flex-col gap-2 '>
              <label className='text-gray-700'>Deadline</label>

              <DatePicker
                className='border p-2 rounded-md'
                selected={startDate || new Date()} // Fallback to the current date
                onChange={(date) => setStartDate(date)}
              />

            </div>

            {
              job.category && (
                <div className='flex flex-col gap-2 '>
                  <label className='text-gray-700 ' htmlFor='category'>
                    Category
                  </label>
                  <select
                    name='category'
                    id='category'
                    defaultValue={job.category}
                    className='border p-2 rounded-md'
                  >
                    <option value='Web Development'>Web Development</option>
                    <option value='Graphics Design'>Graphics Design</option>
                    <option value='Digital Marketing'>Digital Marketing</option>
                  </select>
                </div>
              )
            }
            <div>
              <label className='text-gray-700 ' htmlFor='min_price'>
                Minimum Price
              </label>
              <input
                id='min_price'
                name='min_price'
                type='number'
                defaultValue={job.minPrice}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='max_price'>
                Maximum Price
              </label>
              <input
                id='max_price'
                name='max_price'
                type='number'
                defaultValue={job.maxPrice}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
          </div>
          <div className='flex flex-col gap-2 mt-4'>
            <label className='text-gray-700 ' htmlFor='description'>
              Description
            </label>
            <textarea
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              name='description'
              id='description'
              cols='30'
              defaultValue={job.description}
            ></textarea>
          </div>
          <div className='flex justify-end mt-6'>
            <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default UpdateJob
