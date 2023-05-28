import { useState } from 'react';
import {useDispatch} from "react-redux"
import { loginController, signupController } from '../controllers/auth';
import {useNavigate} from "react-router-dom"
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [userData, setuserData] = useState({email:"", password:"", name:""});



  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(isLogin) dispatch(loginController(userData,navigate))
    else dispatch(signupController(userData))
  };

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">{isLogin ? 'Log in to your account' : 'Create a new account'}</h2>
        {/* <p className="mt-2 text-center text-sm text-gray-600">
          Or{' '}
          <button onClick={() => setIsLogin(!isLogin)} className="font-medium text-indigo-600 hover:text-indigo-500">
            {isLogin ? 'create a new account' : 'log in to your account'}
          </button>
        </p> */}
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input value={userData.email} onChange={(e)=>setuserData({...userData,email:e.target.value})} id="email" name="email" type="email" autoComplete="email" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input value={userData.password} onChange={(e)=>setuserData({...userData,password:e.target.value})}  id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>

            {isLogin ? null : (
              <div>
                <label htmlFor="user-name" className="block text-sm font-medium text-gray-700">
                  User name
                </label>
                <div className="mt-1">
                  <input value={userData.name} onChange={(e)=>setuserData({...userData,name:e.target.value})} id="user-name" name="user-name" type="text" autoComplete="user-name" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
              </div>
            )}
        <div>
          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            {isLogin ? 'Log in' : 'Create account'}
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
);
};

export default Login;